/**
 * REWORK GAMES / Liquid Logo integration.
 * Shaders are the unmodified MIT-licensed work of Alan Ang, collidingScopes/liquid-logo.
 * See assets/liquid-logo/LICENSE.txt and https://github.com/collidingScopes/liquid-logo.
 * This deliberately small adapter replaces the original editor, upload and export UI.
 */
const canvas = document.querySelector('#liquid-logo-canvas');
if (canvas) {
  const holder = canvas.parentElement;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let gl, program, texture, buffer, vs, fs, observer, resizeObserver;
  let visible = false, disposed = false, loading = false, failed = false, raf = 0;
  let shaderSources, startTime = 0, elapsed = 0;
  const shouldMove = () => !motion.matches && !document.documentElement.classList.contains('motion-paused');
  const isReady = () => !!gl && !!program && visible && !document.hidden && !disposed;
  const stop = () => { if (raf) cancelAnimationFrame(raf); raf = 0; startTime = 0; };
  function release() {
    stop();
    if (gl) {
      if (texture) gl.deleteTexture(texture);
      if (buffer) gl.deleteBuffer(buffer);
      if (program) gl.deleteProgram(program);
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
    }
    gl = program = texture = buffer = vs = fs = null;
    holder?.classList.remove('is-liquid-logo-ready');
    delete canvas.dataset.logoReady;
  }
  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const message = gl.getShaderInfoLog(shader); gl.deleteShader(shader);
      throw new Error(`Liquid Logo shader: ${message}`);
    }
    return shader;
  }
  function resize() {
    if (!gl || !program) return;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const dpr = Math.min(devicePixelRatio || 1, innerWidth <= 700 ? 1 : 1.5);
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
    gl.viewport(0, 0, width, height);
    gl.useProgram(program);
    gl.uniform2f(gl.getUniformLocation(program, 'u_resolution'), width, height);
    stop(); draw(0);
  }
  function draw(now) {
    raf = 0;
    if (!isReady()) return;
    if (shouldMove()) {
      if (startTime) elapsed += Math.min(0.05, (now - startTime) / 1000);
      startTime = now;
    } else { startTime = 0; }
    gl.useProgram(program);
    gl.uniform1f(gl.getUniformLocation(program, 'u_time'), elapsed);
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    if (shouldMove()) raf = requestAnimationFrame(draw);
  }
  async function init() {
    if (disposed || loading || failed || !visible || document.hidden || gl) return;
    loading = true;
    try {
      if (!shaderSources) {
        const responses = await Promise.all([
          fetch('assets/liquid-logo/vertex-shader.glsl'), fetch('assets/liquid-logo/fragment-shader.glsl')
        ]);
        if (responses.some(response => !response.ok)) throw new Error('Liquid Logo shaders unavailable');
        shaderSources = await Promise.all(responses.map(response => response.text()));
      }
      if (!visible || document.hidden || disposed) return;
      gl = canvas.getContext('webgl', { alpha:true, antialias:false, depth:false, stencil:false, powerPreference:'low-power', premultipliedAlpha:false });
      if (!gl) throw new Error('WebGL unavailable');
      vs = compile(gl.VERTEX_SHADER, shaderSources[0]);
      fs = compile(gl.FRAGMENT_SHADER, shaderSources[1]);
      program = gl.createProgram(); gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(`Liquid Logo program: ${gl.getProgramInfoLog(program)}`);
      gl.useProgram(program);
      buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
      const position = gl.getAttribLocation(program, 'aVertexPosition');
      gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      const mask = document.createElement('canvas'); mask.width = 512; mask.height = 512;
      const ctx = mask.getContext('2d');
      if (!ctx) throw new Error('2D canvas unavailable');
      ctx.clearRect(0,0,512,512); ctx.fillStyle = 'white'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = 'bold 290px Georgia, serif'; ctx.fillText('50', 256, 260);
      texture = gl.createTexture(); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, mask);
      gl.uniform1i(gl.getUniformLocation(program, 'u_logoTexture'), 0);
      const values = {u_speed:.44,u_iterations:8,u_scale:2.63,u_dotFactor:.03,u_dotMultiplier:.61,u_vOffset:0,u_intensityFactor:.37,u_expFactor:.5,u_noiseIntensity:.5,u_colorShift:.1,u_logoOpacity:1,u_logoScale:1,u_logoAspectRatio:1,u_logoInteractStrength:.1};
      Object.entries(values).forEach(([name,value]) => gl.uniform1f(gl.getUniformLocation(program,name), value));
      gl.uniform3f(gl.getUniformLocation(program, 'u_colorFactors'), 1,-.3,1.6);
      gl.uniform1i(gl.getUniformLocation(program, 'u_logoBlendMode'), 0);
      canvas.dataset.logoReady = 'true'; holder?.classList.add('is-liquid-logo-ready');
      resize();
    } catch (error) {
      failed = true; release(); console.warn('Liquid Logo unavailable; static mark remains.', error);
    } finally { loading = false; }
  }
  const onVisibility = () => { if (document.hidden) stop(); else if (visible) { if (gl) draw(0); else init(); } };
  const onMotion = () => { stop(); if (isReady()) draw(0); };
  const onContextLost = event => { event.preventDefault(); release(); failed = true; };
  const onContextRestored = () => { failed = false; if (visible) init(); };
  document.addEventListener('visibilitychange', onVisibility);
  motion.addEventListener?.('change', onMotion);
  const classObserver = new MutationObserver(onMotion);
  classObserver.observe(document.documentElement, {attributes:true, attributeFilter:['class']});
  canvas.addEventListener('webglcontextlost', onContextLost);
  canvas.addEventListener('webglcontextrestored', onContextRestored);
  if ('ResizeObserver' in window) { resizeObserver = new ResizeObserver(resize); resizeObserver.observe(canvas); }
  else window.addEventListener('resize', resize, {passive:true});
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible) init(); else release();
    }, {threshold: 0});
    observer.observe(canvas);
  } else { visible = true; init(); }
  window.addEventListener('pagehide', event => {
    if (event.persisted) { stop(); return; }
    disposed = true; release(); observer?.disconnect(); resizeObserver?.disconnect(); classObserver.disconnect();
    motion.removeEventListener?.('change', onMotion); document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('resize', resize); canvas.removeEventListener('webglcontextlost', onContextLost);
    canvas.removeEventListener('webglcontextrestored', onContextRestored);
  });
}


