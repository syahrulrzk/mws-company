## Ringkas Tujuan
- Fokus konversi: Book Demo, Free Audit CEMS, Konsultasi 30 Menit
- Menjawab pain EHS/Plant/Compliance: PROPER, denda, downtime, reporting manual
- Posisi MWS: CEMS end‑to‑end + software custom, SLA cepat, 0‑downtime, laporan comply KLHK & ISO 17025

## Pilihan Teknologi (diset default: Vanilla HTML + Tailwind CDN)
- Vanilla HTML + Tailwind CDN: paling cepat, 0 build step, tinggal copy‑paste; cocok untuk landing B2B
- Alternatif: Astro (partial hydration, super ringan) bila butuh SSR/komponen; Vite + vanilla bila interaktivitas kompleks
- Keputusan: mulai dengan Tailwind CDN supaya live cepat; arsitektur sederhana memungkinkan migrasi ke Astro/Vite nanti tanpa ubah copy

## Struktur File
- `index.html` (single page)
- `assets/js/main.js` (slider klien/testimonial, accordion FAQ, form validation, tracking)
- Aset gambar memakai folder `img/`

## Visual & Komponen UI
- Tailwind utility‑first, mobile‑first
- Navbar ringan + sticky CTA (Book Demo)
- Hero dengan background `img/cems.jpg` + overlay
- Grid logo klien (slider sederhana)
- Cards layanan (icon + teks) memakai aset `img/service/*`
- Section 4M (Measure‑Manage‑Maintain‑Monitor) sebagai langkah berurutan
- ROI & Regulation Shield (badge/ikon ISO & KLHK)
- Testimonial carousel (quote + jabatan + foto pabrik)
- CTA banner kontras
- FAQ accordion (ARIA friendly)
- Form lead (Nama, Perusahaan, Email, Phone, Pilihan Layanan, Pesan)
- Footer: alamat, email, phone, sosmed, ISO & KLHK logo

## Draft Copy (Siap Implementasi)
- Hero
  - Headline: "CEMS Selalu ON, Laporan Otomatis, Siap PROPER"
  - Subheadline: "End‑to‑end CEMS: kajian teknis, supply, instalasi, kalibrasi, maintenance, audit kinerja, pelaporan terintegrasi. Tim bersertifikasi, respons komplain <4 jam, paket 0‑downtime."
  - USP highlight: "Sesuai regulasi KLHK & ISO 17025"
  - CTA utama: "Book Demo"; CTA sekunder: "Free Audit CEMS"
  - Badge: "24/7 Support" • "Response <4 jam" • "0‑Downtime Package"

- Social Proof / Client Logos
  - Caption: "Dipercaya pabrik di tekstil, pulp & paper, semen, power plant, smelter"
  - Slider/gird: pakai `img/client/*`

- Pain → Agitate → Solve
  - Pain bullets: PROPER, denda lingkungan, CEMS sering down, vendor lamban, data tidak real‑time, reporting manual
  - Agitate: "Downtime = produksi tertahan, laporan tidak valid, audit gagal"
  - Solve: "MWS menangani end‑to‑end: desain sistem, instalasi, kalibrasi ISO 17025, monitoring 24/7, SLA respons <4 jam, pelaporan otomatis sesuai KLHK"

- Layanan Inti (2 kartu besar)
  1) CEMS End‑to‑End:
     - Kajian teknis & desain
     - Supply, instalasi, commissioning
     - Kalibrasi, QA/QC, audit kinerja
     - Maintenance preventif & korektif (sparepart ready)
     - Dashboard real‑time & alarm
     - Pelaporan otomatis comply KLHK
  2) IT & Software Custom:
     - Aplikasi bisnis & pelaporan lingkungan
     - Integrasi ERP/MES/SCADA
     - Digitalisasi SOP/workflow EHS
     - Visualisasi data, notifikasi WA/email

- Metodologi 4M
  - Measure: instalasi, kalibrasi terakreditasi, validasi alat
  - Manage: dashboard, alarm threshold, role‑based access, integrasi
  - Maintain: PM plan, health check berkala, remote diagnosis, SLA <4 jam
  - Monitor: audit kinerja, QA/QC, pelaporan otomatis KLHK & ISO 17025

- ROI & Regulation Shield
  - "Kurangi risiko denda hingga ratusan juta per insiden dengan 0‑downtime"
  - "Hemat ratusan jam kerja lewat pelaporan otomatis & integrasi data"
  - Badge: "Comply KLHK" • "Proses kalibrasi sesuai ISO 17025"

- Testimonial Carousel
  - Contoh: "Downtime berkurang drastis, audit lancar, tim responsif" — EHS Manager, Pabrik Semen

- CTA Banner
  - Headline: "Free Audit CEMS + Konsultasi 30 Menit"
  - Benefit: cek kesiapan audit, rekomendasi 0‑downtime, peta integrasi data
  - CTA: "Jadwalkan Sekarang"

- FAQ (5)
  1) "Apa itu CEMS dan kenapa wajib di pabrik kami?"
  2) "Bagaimana MWS memastikan 0‑downtime & respons <4 jam?"
  3) "Apakah laporan otomatis sesuai KLHK & ISO 17025?"
  4) "Bisakah integrasi ke ERP/MES/SCADA & WhatsApp/email?"
  5) "Bagaimana skema kontrak maintenance & garansi?"

- Final CTA + Form
  - Headline: "Siapkan Pabrik Anda untuk Audit & Operasi Tanpa Gangguan"
  - Fields: Nama, Perusahaan, Email, Phone, Pilihan Layanan (CEMS, IT/Software, Keduanya), Pesan
  - Microcopy privasi: "Data Anda aman, kami hanya menghubungi untuk konsultasi"
  - Submit: "Kirim & Jadwalkan Demo"

- Footer
  - MWS – PT. Mrene Wae Solusi • alamat, email, phone, sosmed
  - Logo ISO & KLHK
  - Copyright & kebijakan privasi

## Implementasi Teknis (Tailwind CDN)
- Tambah CDN: `https://cdn.tailwindcss.com` dan `preconnect` agar cepat
- Komponen interaktif:
  - Slider klien & testimonial: vanilla JS (auto‑play, swipe di mobile)
  - Accordion FAQ: tombol `button[aria-expanded]` + transisi
  - Form validation: required, email regex, phone format, pilihan layanan
- Tracking: GTM event untuk klik "Book Demo", submit form
- WhatsApp CTA: deep link `https://wa.me/<nomor>?text=...`

## Performance & A11y
- Lazy‑load gambar (`loading="lazy"`), ukuran gambar disesuaikan
- Semantik: `<header>`, `<main>`, `<section>`, `<footer>`; alt text jelas
- Kontras warna & fokus ring Tailwind; keyboard navigable

## SEO
- Meta title/description yang menekankan CEMS, PROPER, 0‑downtime
- OpenGraph/Twitter Card; favicon `img/icon-msw.png`
- Schema `Organization` + `Service`

## Aset yang Dipakai
- Logo: `img/Logo1.jpg`; Hero: `img/cems.jpg`
- Ikon layanan: `img/service/cems/*.png`, `img/calib.png`, `img/Maintenancee.jpg`
- Klien: `img/client/*`

## Rencana Kerja
- Tahap 1: finalisasi copy + layout (hari ini)
- Tahap 2: build HTML + Tailwind CDN + JS ringan (besok)
- Tahap 3: validasi form + QA performance & mobile (hari berikutnya)
- Tahap 4: publish & tracking

Siap lanjut eksekusi dengan Tailwind CDN. Jika ingin ganti ke Astro/Vite, struktur dan copy ini tetap dapat dipakai tanpa perubahan besar.