/* «Маме» — переключатель глав.
   Уходящая глава гаснет на месте, новая въезжает с размытием и лесенкой,
   поверх летит золотой мазок, а 3D-звезда получает пинок и проворачивается. */
const chapters = [...document.querySelectorAll('.chapter')];
const root = document.documentElement;
const toggle = document.querySelector('#motion-toggle');
const progress = document.querySelector('#progress-bar');
const counter = document.querySelector('#current-chapter');
const sweep = document.querySelector('#sweep');

const OUT_MS = 340;   // сколько живёт уходящая глава
const IN_MS = 900;    // сколько играет вход
const LOCK_MS = 460;  // защита от двойного клика

let index = -1;       // ничего ещё не показано
let paused = false;   // анимации выключаются только кнопкой
let locked = false;

const motionOn = () => !paused;

function setChapter(next, focusTitle = true) {
  const target = Math.max(0, Math.min(chapters.length - 1, next));
  if (target === index) return;

  const previous = index;
  const direction = previous < 0 || target > previous ? 'forward' : 'back';
  const outgoing = previous >= 0 ? chapters[previous] : null;
  const incoming = chapters[target];
  const animate = motionOn();

  // новая глава встаёт в поток сразу, старая ещё держится
  incoming.hidden = false;
  incoming.classList.remove('is-leaving');
  incoming.classList.add('is-entering');

  // всё остальное прячем: иначе главы копятся стопкой и ломают раскладку
  chapters.forEach((chapter, i) => {
    if (i !== target && chapter !== outgoing) chapter.hidden = true;
  });

  if (outgoing && outgoing !== incoming) {
    outgoing.classList.remove('is-entering');
    outgoing.classList.add('is-leaving');
    window.setTimeout(() => {
      outgoing.hidden = true;
      outgoing.classList.remove('is-leaving');
    }, animate ? OUT_MS : 0);
  }

  index = target;
  document.body.dataset.chapter = String(target);
  root.dataset.direction = direction;
  counter.textContent = String(target + 1).padStart(2, '0');
  progress.style.width = `${((target + 1) / chapters.length) * 100}%`;

  // золотой мазок по экрану
  if (sweep && animate) {
    sweep.classList.remove('is-firing');
    void sweep.offsetWidth;
    sweep.classList.add('is-firing');
  }

  // пинок 3D-сцене: звезда делает оборот, камера подъезжает
  document.dispatchEvent(new CustomEvent('keepsake:kick', { detail: { direction } }));

  window.setTimeout(() => incoming.classList.remove('is-entering'), animate ? IN_MS : 0);
  window.scrollTo({ top: 0, behavior: 'instant' });

  if (focusTitle) {
    const title = incoming.querySelector('h1,h2');
    if (title) { title.setAttribute('tabindex', '-1'); title.focus({ preventScroll: true }); }
  }
}

function step(delta) {
  if (locked) return;
  locked = true;
  setChapter(index + delta);
  window.setTimeout(() => { locked = false; }, LOCK_MS);
}

// кнопки в главах
document.querySelectorAll('[data-next]').forEach(el => el.addEventListener('click', () => step(1)));
document.querySelectorAll('[data-prev]').forEach(el => el.addEventListener('click', () => step(-1)));
document.querySelector('[data-restart]')?.addEventListener('click', () => setChapter(0));

// клавиатура
window.addEventListener('keydown', event => {
  if (event.target.closest('input,textarea,select')) return;
  if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); step(1); }
  else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); step(-1); }
  else if (event.key === 'Home') { event.preventDefault(); setChapter(0); }
});

// колесо: одно движение = один слайд
let wheelTotal = 0;
let wheelAt = 0;
window.addEventListener('wheel', event => {
  const now = performance.now();
  if (now - wheelAt > 260) wheelTotal = 0;
  wheelAt = now;
  wheelTotal += event.deltaY;
  if (Math.abs(wheelTotal) > 70) {
    step(wheelTotal > 0 ? 1 : -1);
    wheelTotal = 0;
  }
}, { passive: true });

// свайп на телефоне
let touchStart = 0;
let touchAt = 0;
window.addEventListener('touchstart', event => { touchStart = event.touches[0].clientY; touchAt = performance.now(); }, { passive: true });
window.addEventListener('touchend', event => {
  const delta = touchStart - event.changedTouches[0].clientY;
  if (performance.now() - touchAt < 700 && Math.abs(delta) > 55) step(delta > 0 ? 1 : -1);
}, { passive: true });

// пауза анимаций
function updateMotion() {
  root.classList.toggle('motion-paused', paused);
  toggle.textContent = paused ? 'АНИМАЦИЯ: ВЫКЛ.' : 'АНИМАЦИЯ: ВКЛ.';
  toggle.setAttribute('aria-pressed', String(!paused));
}
toggle.addEventListener('click', () => { paused = !paused; updateMotion(); });

root.classList.add('js');
setChapter(0, false);
updateMotion();

import('./gift-scene.js').then(m => m.initGiftScene?.()).catch(error => console.warn('3D недоступно:', error));
