const clientSlider = document.querySelector('#client-slider > div');
if (clientSlider) {
  let offset = 0;
  const speed = 0.5;
  const animate = () => {
    offset -= speed;
    const width = clientSlider.scrollWidth;
    clientSlider.style.transform = `translateX(${offset}px)`;
    if (Math.abs(offset) > width / 2) offset = 0;
    requestAnimationFrame(animate);
  };
  animate();
}

const testiSlider = document.querySelector('#testi-slider > div');
if (testiSlider) {
  let index = 0;
  const step = () => {
    index = (index + 1) % testiSlider.children.length;
    const x = -index * testiSlider.children[0].getBoundingClientRect().width - index * 24;
    testiSlider.style.transform = `translateX(${x}px)`;
  };
  setInterval(step, 4000);
}

const faqButtons = document.querySelectorAll('#faq-accordion button');
faqButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = btn.nextElementSibling;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    next.classList.toggle('hidden', expanded);
  });
});

const form = document.getElementById('lead-form');
const statusEl = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      statusEl.textContent = 'Email tidak valid.';
      statusEl.className = 'text-sm text-red-600';
      return;
    }
    if (!/^(\+62|0)8[0-9]{8,}$/.test(data.phone)) {
      statusEl.textContent = 'Nomor telepon tidak valid.';
      statusEl.className = 'text-sm text-red-600';
      return;
    }
    statusEl.textContent = 'Mengirim...';
    statusEl.className = 'text-sm text-slate-600';
    await new Promise((r) => setTimeout(r, 800));
    statusEl.textContent = 'Terima kasih! Tim kami akan menghubungi Anda untuk menjadwalkan demo.';
    statusEl.className = 'text-sm text-emerald-700';
    form.reset();
  });
}

document.querySelectorAll('a[href="#form"]').forEach((a) => {
  a.addEventListener('click', () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_click', label: 'form' });
    const target = document.querySelector('#form');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});
document.querySelectorAll('nav a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      const id = a.getAttribute('href');
      const opts = id === '#home' ? { behavior: 'smooth', block: 'start' } : { behavior: 'smooth', block: 'nearest' };
      target.scrollIntoView(opts);
    }
  });
});

const tabs = document.querySelectorAll('nav[role="tablist"] [role="tab"]');
tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    tabs.forEach((t) => t.setAttribute('aria-selected', 'false'));
    tab.setAttribute('aria-selected', 'true');
    const target = document.querySelector(tab.getAttribute('data-tab'));
    if (target) {
      const id = tab.getAttribute('data-tab');
      const opts = id === '#home' ? { behavior: 'smooth', block: 'start' } : { behavior: 'smooth', block: 'nearest' };
      target.scrollIntoView(opts);
    }
  });
});

const updateActiveTabOnScroll = () => {
  const sections = Array.from(tabs).map((t) => document.querySelector(t.getAttribute('data-tab')));
  const y = window.scrollY + 96;
  let activeIndex = 0;
  sections.forEach((sec, i) => {
    if (sec && y >= sec.offsetTop) activeIndex = i;
  });
  tabs.forEach((t, i) => t.setAttribute('aria-selected', i === activeIndex ? 'true' : 'false'));
};
document.addEventListener('scroll', updateActiveTabOnScroll, { passive: true });
updateActiveTabOnScroll();

const cekButtons = document.querySelectorAll('#cek [data-industri]');
const cekOutput = document.getElementById('cek-output');
cekButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-industri');
    const map = {
      tekstil: 'Rekomendasi: sensor partikulat dan gas, integrasi ke ERP untuk batch tracking, alarm saat mendekati threshold.',
      pulp: 'Rekomendasi: pemantauan kontinuitas emisi SOx/NOx, dashboard QA/QC untuk audit, pelaporan otomatis format KLHK.',
      semen: 'Rekomendasi: 0‑downtime package, sparepart ready, audit kinerja berkala, integrasi ke MES/SCADA.',
      power: 'Rekomendasi: redundansi analyzer, health check harian, notifikasi WA/email untuk alarm kritis.',
      smelter: 'Rekomendasi: validasi alat intensif, remote diagnosis, SLA respons <4 jam, template laporan siap PROPER.',
      lain: 'Rekomendasi: konsultasi 30 menit untuk memetakan kebutuhan CEMS & integrasi data spesifik industri Anda.'
    };
    cekOutput.textContent = map[id] || map.lain;
  });
});