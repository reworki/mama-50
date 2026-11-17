import { Container } from './assets/vendor/liquid-glass-container.js';

// This adapts the upstream WebGL renderer to an explicitly supplied local image.
// It does not capture or transmit any page content. The texture is static and
// the shader redraws only on size or visibility changes.
export function initStudioGlass(target = document.querySelector('#glass-effect-canvas')) {
  const canvas = target instanceof HTMLCanvasElement ? target : target?.querySelector('#glass-effect-canvas');
  const host = canvas?.parentElement;
  if (!canvas || !host) return { dispose() {} };
  let instance, image, observer, resizeObserver, frame = 0;
  let visible = false, disposed = false, loading = false, failed = false;
  let previousSize = '';
  const priorStyle = canvas.getAttribute('style');
  const canRender = () => !disposed && visible && !document.hidden;

  function releaseInstance() {
    if (!instance) return;
    const refs = instance.gl_refs || {};
    const gl = refs.gl || instance.gl;
    if (gl) {
      if (refs.texture) gl.deleteTexture(refs.texture);
      if (refs.positionBuffer) gl.deleteBuffer(refs.positionBuffer);
      if (refs.texcoordBuffer) gl.deleteBuffer(refs.texcoordBuffer);
      if (refs.program) gl.deleteProgram(refs.program);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
    const index = Container.instances.indexOf(instance);
    if (index !== -1) Container.instances.splice(index, 1);
    instance = null;
  }
  function paint() {
    frame = 0;
    if (!canRender() || !instance?.gl_refs?.program) return;
    const { gl, program, resolutionLoc, borderRadiusLoc } = instance.gl_refs;
    if (!gl || gl.isContextLost()) return;
    const w = Math.max(1, Math.min(600, Math.round(host.clientWidth)));
    const h = Math.max(1, Math.min(350, Math.round(host.clientHeight)));
    if (w < 2 || h < 2) return;
    const size = `${w}x${h}`;
    if (size !== previousSize) {
      previousSize = size;
      canvas.width = w; canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.useProgram(program);
      gl.uniform2f(resolutionLoc, w, h);
      gl.uniform1f(borderRadiusLoc, Math.min(24, h / 2));
    }
    instance.render?.();
  }
  function requestPaint() { if (!frame && canRender()) frame = requestAnimationFrame(paint); }
  async function setup() {
    if (disposed || failed || loading || instance) return;
    loading = true;
    try {
      image = new Image(); image.decoding = 'async';
      image.src = new URL('./assets/crystal-world.webp', import.meta.url).href;
      await image.decode();
      if (disposed) return;
      instance = new Container({ canvas, borderRadius:24, tintOpacity:.18 });
      if (!instance.gl) throw new Error('WebGL is unavailable');
      const w = Math.max(1, Math.min(600, Math.round(host.clientWidth)));
      const h = Math.max(1, Math.min(350, Math.round(host.clientHeight)));
      canvas.width = w; canvas.height = h;
      instance.setupShader(image);
      if (!instance.gl_refs.program) throw new Error('Glass shader could not be initialized');
      previousSize = `${w}x${h}`;
      host.dataset.liquidGlass = 'ready';
      requestPaint();
    } catch (error) {
      console.warn('Liquid glass enhancement unavailable:', error);
      failed = true;
      releaseInstance();
      delete host.dataset.liquidGlass;
      if (priorStyle === null) canvas.removeAttribute('style'); else canvas.setAttribute('style', priorStyle);
    } finally { loading = false; }
  }
  function onVisibility() {
    if (document.hidden) { if (frame) cancelAnimationFrame(frame); frame = 0; }
    else requestPaint();
  }
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible) { setup(); requestPaint(); }
      else { if (frame) cancelAnimationFrame(frame); frame = 0; }
    }, { rootMargin:'100px' });
    observer.observe(host);
  } else { visible = true; setup(); }
  if ('ResizeObserver' in window) { resizeObserver = new ResizeObserver(requestPaint); resizeObserver.observe(host); }
  else window.addEventListener('resize', requestPaint, { passive:true });
  document.addEventListener('visibilitychange', onVisibility);
  function onPageHide(event) { if (!event.persisted) dispose(); }
  window.addEventListener('pagehide', onPageHide);
  function dispose() {
    if (disposed) return;
    disposed = true;
    if (frame) cancelAnimationFrame(frame);
    observer?.disconnect(); resizeObserver?.disconnect();
    window.removeEventListener('resize', requestPaint);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('pagehide', onPageHide);
    releaseInstance();
    if (priorStyle === null) canvas.removeAttribute('style'); else canvas.setAttribute('style', priorStyle);
    delete host.dataset.liquidGlass;
    image = null;
  }
  return { dispose };
}
