/** A small, locally hosted Three.js scene for the birthday greeting. */
export async function initGiftScene() {
  const canvas = document.querySelector('#gift-canvas');
  const host = document.querySelector('#gift-world');
  if (!canvas || !host) return { dispose() {} };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const motionAllowed = () => !reduce.matches && !document.documentElement.classList.contains('motion-paused');
  const resources = new Set();
  const own = resource => (resources.add(resource), resource);
  let renderer, world, camera, sculpture, halo, stars, observer, resizeObserver;
  let frame = 0, live = true, visible = true, elapsed = 0, last = 0;
  let px = 0, py = 0, ex = 0, ey = 0, depth = 0;
  const canRender = () => live && visible && !document.hidden;
  function stop() { if (frame) cancelAnimationFrame(frame); frame = 0; last = 0; }
  function request() { if (renderer && canRender() && !frame) frame = requestAnimationFrame(draw); }
  function draw(now = 0) {
    frame = 0;
    if (!renderer || !canRender()) return;
    const moving = motionAllowed();
    const delta = last ? Math.min((now - last) / 1000, .05) : 0;
    last = now;
    if (moving) elapsed += delta;
    const factor = moving ? Math.min(1, delta * 2.2) : 1;
    ex += (px - ex) * factor; ey += (py - ey) * factor;
    const chapter = document.body.dataset.chapter || '0';
    const expanded = !['0', 'intro', 'cover', 'closed'].includes(chapter);
    const target = expanded ? 1 : 0;
    depth += (target - depth) * (moving ? Math.min(1, delta * 1.5) : 1);
    sculpture.rotation.y = .10 + Math.sin(elapsed * .28) * .10 + ex * .18 + depth * .25;
    sculpture.rotation.x = Math.sin(elapsed * .22) * .055 + ey * .11;
    sculpture.rotation.z = Math.sin(elapsed * .19) * .035;
    const pulse = 1 + Math.sin(elapsed * .8) * .018;
    sculpture.scale.setScalar((host.clientWidth < 700 ? .79 : 1) * (1 - depth * .13) * pulse);
    sculpture.position.x = host.clientWidth < 700 ? 0 : 1.65;
    sculpture.position.y = (host.clientWidth < 700 ? 1.12 : 0) + Math.sin(elapsed * .5) * .045;
    halo.rotation.z = elapsed * .045;
    stars.rotation.z = elapsed * .009;
    renderer.render(world, camera);
    if (moving) frame = requestAnimationFrame(draw);
  }
  function resize() {
    if (!renderer) return;
    const width = host.clientWidth, height = host.clientHeight;
    if (!width || !height) return;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, width < 700 ? 1 : 1.4));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.position.z = width < 700 ? 8.9 : 8.1;
    camera.updateProjectionMatrix();
    stop(); request();
  }
  function pointer(event) {
    if (!motionAllowed() || event.pointerType === 'touch') return;
    const r = host.getBoundingClientRect();
    px = Math.max(-.5, Math.min(.5, (event.clientX-r.left)/r.width-.5));
    py = Math.max(-.5, Math.min(.5, (event.clientY-r.top)/r.height-.5));
    request();
  }
  function leave() { px = 0; py = 0; request(); }
  function onMotion() { stop(); request(); }
  function onVisibility() { if (document.hidden) stop(); else request(); }
  function dispose() {
    live = false; stop(); observer?.disconnect(); resizeObserver?.disconnect(); mutation.disconnect();
    window.removeEventListener('resize',resize); host.removeEventListener('pointermove',pointer); host.removeEventListener('pointerleave',leave);
    document.removeEventListener('visibilitychange',onVisibility); reduce.removeEventListener?.('change',onMotion);
    resources.forEach(item => item.dispose?.()); renderer?.dispose();
  }
  const mutation = new MutationObserver(() => { if (renderer) { stop(); request(); } });
  mutation.observe(document.documentElement,{attributes:true,attributeFilter:['class']});
  mutation.observe(document.body,{attributes:true,attributeFilter:['data-chapter']});
  try {
    const THREE = await import('./assets/vendor/three.module.js');
    if (!live) return {dispose};
    renderer = new THREE.WebGLRenderer({canvas,alpha:true,antialias:innerWidth>700,powerPreference:'low-power'});
    renderer.setClearColor(0x000000,0); renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.24;
    world=new THREE.Scene(); camera=new THREE.PerspectiveCamera(37,1,.1,50);camera.position.set(0,0,8.1);
    const env=document.createElement('canvas');env.width=512;env.height=256;const ctx=env.getContext('2d');
    const grad=ctx.createLinearGradient(0,0,0,256);grad.addColorStop(0,'#f7ddb2');grad.addColorStop(.3,'#907046');grad.addColorStop(.52,'#1c1720');grad.addColorStop(.75,'#c39666');grad.addColorStop(1,'#30201c');ctx.fillStyle=grad;ctx.fillRect(0,0,512,256);ctx.filter='blur(14px)';ctx.fillStyle='#fff0c6';ctx.fillRect(60,0,50,190);ctx.fillRect(325,0,30,170);
    const envMap=own(new THREE.CanvasTexture(env));envMap.mapping=THREE.EquirectangularReflectionMapping;envMap.colorSpace=THREE.SRGBColorSpace;world.environment=envMap;
    const gold=own(new THREE.MeshPhysicalMaterial({color:0xe4bc78,metalness:.84,roughness:.22,clearcoat:1,envMapIntensity:1.4}));
    const pale=own(new THREE.MeshPhysicalMaterial({color:0xffe6b6,metalness:.6,roughness:.23,clearcoat:1,envMapIntensity:1.1}));
    const satin=own(new THREE.MeshPhysicalMaterial({color:0x9d6b55,metalness:.55,roughness:.25,clearcoat:.8}));
    sculpture=new THREE.Group();world.add(sculpture);
    // A dimensional, softly bevelled eight-point star creates the central keepsake.
    const shape=new THREE.Shape();
    for(let i=0;i<16;i++){const angle=Math.PI/2+i*Math.PI/8;const radius=i%2?.42:1.18;const x=Math.cos(angle)*radius,y=Math.sin(angle)*radius;if(i===0)shape.moveTo(x,y);else shape.lineTo(x,y)}shape.closePath();
    const starGeo=own(new THREE.ExtrudeGeometry(shape,{depth:.13,bevelEnabled:true,bevelThickness:.085,bevelSize:.055,bevelSegments:3,steps:1,curveSegments:8}));starGeo.translate(0,0,-.065);
    sculpture.add(new THREE.Mesh(starGeo,gold));
    const ringGeo=own(new THREE.TorusGeometry(1.65,.018,10,120));
    halo=new THREE.Group();sculpture.add(halo);
    const ring1=new THREE.Mesh(ringGeo,pale);ring1.rotation.set(.2,-.32,.2);halo.add(ring1);
    const ring2=new THREE.Mesh(ringGeo,satin);ring2.scale.set(.91,1.06,1);ring2.rotation.set(-.55,.4,-.5);halo.add(ring2);
    const sphere=own(new THREE.SphereGeometry(1,16,10));
    [[1.48,.66,.25,.09],[-1.36,-.88,.10,.07],[.2,1.6,-.05,.06],[-1.6,.35,0,.045]].forEach(([x,y,z,r],i)=>{const mesh=new THREE.Mesh(sphere,i%2?gold:pale);mesh.position.set(x,y,z);mesh.scale.setScalar(r);halo.add(mesh)});
    world.add(new THREE.HemisphereLight(0xffeed3,0x4d3345,2));
    const key=new THREE.DirectionalLight(0xffe4b9,3.4);key.position.set(-3,4,5);world.add(key);
    const rim=new THREE.DirectionalLight(0xf5bfa0,2.8);rim.position.set(4,1,2);world.add(rim);
    const points=[];let seed=187;const random=()=>((seed=seed*16807%2147483647)-1)/2147483646;
    for(let i=0;i<(innerWidth<700?80:135);i++)points.push((random()-.5)*15,(random()-.5)*10,-2-random()*6);
    const pointsGeo=own(new THREE.BufferGeometry());pointsGeo.setAttribute('position',new THREE.Float32BufferAttribute(points,3));
    const pointsMat=own(new THREE.PointsMaterial({color:0xf5d09c,size:.025,transparent:true,opacity:.65,depthWrite:false}));
    stars=new THREE.Points(pointsGeo,pointsMat);world.add(stars);
    host.dataset.gift3d='ready';
    window.addEventListener('resize',resize,{passive:true});host.addEventListener('pointermove',pointer,{passive:true});host.addEventListener('pointerleave',leave,{passive:true});
    document.addEventListener('visibilitychange',onVisibility);reduce.addEventListener?.('change',onMotion);
    if('IntersectionObserver'in window){observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)request();else stop()});observer.observe(host)}
    if('ResizeObserver'in window){resizeObserver=new ResizeObserver(resize);resizeObserver.observe(host)}
    window.addEventListener('pagehide',event=>{if(!event.persisted)dispose()},{once:true});
    resize();
  } catch(error) {
    host.dataset.gift3d='unavailable';renderer?.dispose();
    console.warn('Праздничная сцена недоступна, остаётся статичное оформление.',error);
  }
  return {dispose};
}
