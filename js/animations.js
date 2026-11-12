/* =========================================================
   AL TAHADI – ANIMATIONS & INTERACTIONS
   Scroll reveals, split headings, parallax, counters,
   3D tilt, magnetic buttons, custom cursor, page transitions.
   ========================================================= */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const q = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- 1. Page transition veil ---------- */
  const veil = document.createElement("div");
  veil.className = "veil";
  veil.innerHTML = '<img src="images/logo-emblem-white.png" alt="" />';
  if (!reduce) document.body.appendChild(veil);

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || reduce || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || /^(mailto|tel|https?):/i.test(href)) return;
    const url = new URL(href, location.href);
    if (url.pathname === location.pathname && url.search === location.search) return;
    e.preventDefault();
    veil.classList.remove("leave"); void veil.offsetWidth; veil.classList.add("leave");
    setTimeout(() => (location.href = url.href), 650);
  });
  addEventListener("pageshow", (e) => { if (e.persisted) veil.classList.remove("leave"); });

  /* ---------- 2. Assign reveal variants ---------- */
  const tag = (sel, variant) => q(sel).forEach((el) => {
    el.classList.add("reveal");
    if (variant && !el.dataset.reveal) el.dataset.reveal = variant;
  });
  tag(".two-col__img, .split-row__img", "clip");
  tag(".split__content", "left");
  tag(".split__features .feature", "right");
  tag(".why .feature");
  tag(".mv > div", "zoom");
  tag(".page-hero p:not(.crumbs)");
  tag(".page-hero .crumbs, .tour-meta, #tourType");
  tag(".filters, .results-count, .book-card");
  tag("#tourBody > *");
  tag(".stats .stat");
  tag(".footer__contacts h4, .footer__row > *");

  // stagger siblings automatically
  const groups = new Map();
  q(".reveal").forEach((el) => {
    if (el.style.getPropertyValue("--i")) return;
    const p = el.parentElement;
    if (!groups.has(p)) groups.set(p, 0);
    const i = groups.get(p);
    el.style.setProperty("--i", Math.min(i, 8));
    groups.set(p, i + 1);
  });

  /* ---------- 3. Split headings into words ---------- */
  function splitWords(el) {
    let wi = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
            const w = document.createElement("span");
            w.className = "w";
            w.innerHTML = `<span style="--wi:${wi++}"></span>`;
            w.firstChild.textContent = part;
            frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
      });
    };
    walk(el);
    el.classList.add("split-words");
  }
  if (!reduce) q(".h-xl, .h-lg, .h-md, .footer__title, .h-sm").forEach(splitWords);

  /* ---------- 4. Reveal observer (+ counters) ---------- */
  function countUp(el) {
    const raw = el.textContent.trim();
    const m = raw.match(/^(\d+)(.*)$/);
    if (!m || raw.includes("/")) return;
    const end = +m[1], suffix = m[2];
    const start = end > 1000 ? end - 30 : 0;
    const dur = 1800, t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(start + (end - start) * e) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target;
    el.classList.add("in");
    if (el.classList.contains("stat")) { const b = el.querySelector("b"); if (b) countUp(b); }
    io.unobserve(el);
  }), { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

  const watch = () => q(".reveal:not(.in), .split-words:not(.in), .section-head:not(.in)").forEach((el) => io.observe(el));
  watch();
  // re-watch when content is re-rendered (tour filters)
  new MutationObserver(() => { watch(); }).observe(document.body, { childList: true, subtree: true });

  /* ---------- 5. Scroll: header hide/show, progress, parallax ---------- */
  const header = document.getElementById("header");
  const toTop = document.createElement("button");
  toTop.className = "to-top";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML = '<svg viewBox="0 0 52 52"><circle cx="26" cy="26" r="24"/></svg><i>↑</i>';
  document.body.appendChild(toTop);
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  const parallax = q(".page-hero, .split__media, .footer__cta");
  const floaters = q(".footer__window");
  let lastY = scrollY, ticking = false;

  function onScroll() {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? y / max : 0;
    if (header) {
      header.style.setProperty("--sp", `${p * 100}%`);
      const hide = y > 300 && y > lastY && !document.body.classList.contains("menu-open");
      header.classList.toggle("hide", hide);
    }
    toTop.classList.toggle("show", y > innerHeight * 0.8);
    toTop.style.setProperty("--sp-n", p.toFixed(3));

    if (!reduce) {
      parallax.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        const off = (r.top + r.height / 2 - innerHeight / 2) * -0.18;
        el.style.backgroundPosition = `center calc(50% + ${off.toFixed(1)}px)`;
      });
      floaters.forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        el.style.transform = `translateY(${((r.top - innerHeight / 2) * 0.12).toFixed(1)}px)`;
      });
    }
    lastY = y;
    ticking = false;
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  if (reduce || !finePointer) return;

  /* ---------- 6. 3D tilt + shine on cards (delegated) ---------- */
  const TILT = ".dest-card, .dest-tile, .tour-card, .contact-card";
  let tiltEl = null;
  document.addEventListener("pointermove", (e) => {
    const el = e.target.closest(TILT);
    if (tiltEl && tiltEl !== el) resetTilt(tiltEl);
    tiltEl = el;
    if (!el || !el.classList.contains("in") && el.classList.contains("reveal")) return;
    if (!el.classList.contains("tilt")) {
      el.classList.add("tilt");
      const s = document.createElement("span"); s.className = "shine"; el.appendChild(s);
    }
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.transition = "transform .2s ease-out, border-color .4s";
    el.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 10}deg) translateY(-6px)`;
  });
  function resetTilt(el) {
    el.style.transition = "transform .8s cubic-bezier(.16,1,.3,1), border-color .4s";
    el.style.transform = "";
  }
  document.addEventListener("pointerleave", () => tiltEl && resetTilt(tiltEl));

  /* ---------- 7. Magnetic buttons ---------- */
  const MAG = ".btn, .btn-round, .arrow, .icon-btn, .link-all, .footer__social a, .contact-social a, .to-top";
  document.addEventListener("pointermove", (e) => {
    q(".magnetic.pulled").forEach((m) => { if (!m.contains(e.target)) { m.style.transform = ""; m.classList.remove("pulled"); } });
    const el = e.target.closest(MAG);
    if (!el) return;
    el.classList.add("magnetic", "pulled");
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
  });

  /* ---------- 8. Custom cursor ---------- */
  const ring = document.createElement("div");
  ring.className = "cursor is-hidden";
  ring.innerHTML = "<span>View</span>";
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  document.body.append(ring, dot);
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  document.addEventListener("pointermove", (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
    ring.classList.remove("is-hidden");
    const t = e.target;
    const view = t.closest(".dest-card, .dest-tile, .tour-card, .hcard");
    ring.classList.toggle("is-view", !!view);
    ring.classList.toggle("is-link", !view && !!t.closest("a, button, summary, select, input, textarea, label"));
  });
  document.addEventListener("pointerleave", () => ring.classList.add("is-hidden"));
  (function loop() {
    rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(loop);
  })();
})();
