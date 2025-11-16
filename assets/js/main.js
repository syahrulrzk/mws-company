// Background slideshow functionality
document.addEventListener('DOMContentLoaded', () => {
  const bgSlideshow = document.getElementById('bg-slideshow');
  if (bgSlideshow) {
    const slides = bgSlideshow.querySelectorAll('img');
    let currentBgSlide = 0;
    let bgSlideInterval;

    function updateBgSlideshow() {
      // Reset all slides to invisible
      slides.forEach(slide => {
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0');
      });

      // Show current slide
      slides[currentBgSlide].classList.remove('opacity-0');
      slides[currentBgSlide].classList.add('opacity-100');

      // Move to next slide
      currentBgSlide = (currentBgSlide + 1) % slides.length;
    }

    // Start background slideshow
    function startBgSlideshow() {
      if (bgSlideInterval) {
        clearInterval(bgSlideInterval);
      }
      bgSlideInterval = setInterval(updateBgSlideshow, 5000); // Change slide every 5 seconds
    }

    // Pause background slideshow on hover
    bgSlideshow.addEventListener('mouseenter', () => {
      if (bgSlideInterval) {
        clearInterval(bgSlideInterval);
        bgSlideInterval = null;
      }
    });

    // Resume background slideshow when not hovering
    bgSlideshow.addEventListener('mouseleave', startBgSlideshow);

    // Initialize and start slideshow
    updateBgSlideshow();
    startBgSlideshow();
  }
});

// Image slider functionality for analyzer
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('image-slider');
  if (slider) {
    const slides = slider.querySelectorAll('.slide');
    let currentSlide = 0;

    function updateSlider() {
      // Reset all slides to invisible
      slides.forEach(slide => {
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0');
      });

      // Show current slide
      slides[currentSlide].classList.remove('opacity-0');
      slides[currentSlide].classList.add('opacity-100');
    }

    // Move to next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    }

    // Move to previous slide
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider();
    }

    // Add event listeners for navigation buttons
    const nextButton = slider.querySelector('.next');
    const prevButton = slider.querySelector('.prev');

    if (nextButton) {
      nextButton.addEventListener('click', nextSlide);
    }

    if (prevButton) {
      prevButton.addEventListener('click', prevSlide);
    }

    // Initialize slider
    updateSlider();
  }
});

// Product modal functionality
const productModal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalSlide = productModal ? productModal.querySelector('.transform') : null;

// Product data
const products = {
  analyzer: {
    title: 'Analyzer CEMS',
    content: `
      <div class="mt-6 flex items-center justify-center">
        <div class="w-full max-w-7xl">
          <div class="text-center">
            <h4 class="text-lg font-semibold text-emerald-700">OPSIS AB</h4>
            <p class="mt-2 text-slate-700 max-w-3xl mx-auto">OPSIS AB adalah pemasok global sistem pemantauan lingkungan untuk analisis gas dan layanan terkait. OPSIS telah menyediakan ribuan sistem baik untuk pemantauan kualitas udara ambien (AQMS), dan untuk aplikasi kontrol proses.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div class="md:col-span-2">
              <!-- Image Slider -->
              <div class="relative overflow-hidden rounded-xl">
                <div class="image-slider flex transition-transform duration-300 ease-in-out" style="transform: translateX(0);">
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/analyzer/insitu.png" alt="Sistem In-Situ" class="w-full h-96 object-cover">
                  </div>
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/analyzer/ekstrative.png" alt="Sistem Ekstraktif" class="w-full h-96 object-cover">
                  </div>
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/analyzer/insek.png" alt="Kombinasi In-Situ & Ekstraktif" class="w-full h-96 object-cover">
                  </div>
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/analyzer/multiplixer.png" alt="Sistem Multiplexer" class="w-full h-96 object-cover">
                  </div>
                </div>
                <!-- Slider Navigation -->
                <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="0"></button>
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="1"></button>
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="2"></button>
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="3"></button>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <div>
                <h4 class="text-lg font-semibold text-emerald-700">SISTEM PEMANTAUAN CEMS & PROSES (OPSIS)</h4>
                <ul class="mt-4 space-y-2 list-disc pl-5 text-slate-700">
                  <li>SISTEM IN-SITU</li>
                  <li>SISTEM MULTIGAS EKSTRAKTIF</li>
                  <li>SISTEM KOMBINASI IN-SITU & EKSTRAKTIF</li>
                  <li>SISTEM MULTIPLEXER</li>
                </ul>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-emerald-700">Mitra Teknologi Kami</h4>
                <div class="mt-4 flex flex-wrap gap-4">
                  <img src="/img/service/logo-mitra.png" alt="OPSIS" class="h-16 object-contain">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  gateway: {
    title: 'Gateway CEMS',
    content: `
      <div class="mt-6 flex items-center justify-center">
        <div class="w-full max-w-7xl">
          <div class="text-center">
            <h4 class="text-lg font-semibold text-emerald-700">Gateway CEMS</h4>
            <p class="mt-2 text-slate-700 max-w-3xl mx-auto">Gateway CEMS adalah solusi integrasi data yang menghubungkan sistem pemantauan emisi dengan berbagai platform dan sistem informasi lainnya. Gateway kami memastikan transfer data yang aman, real-time, dan sesuai dengan regulasi KLHK.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div class="md:col-span-2">
              <!-- Image Slider -->
              <div class="relative overflow-hidden rounded-xl">
                <div class="image-slider flex transition-transform duration-300 ease-in-out" style="transform: translateX(0);">
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/cems/cems1.png" alt="Sistem Gateway CEMS" class="w-full h-96 object-contain">
                  </div>
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/cems/cems2.png" alt="Integrasi Data" class="w-full h-96 object-contain">
                  </div>
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/cems/cems3.png" alt="Pemantauan Waktu Nyata" class="w-full h-96 object-contain">
                  </div>
                </div>
                <!-- Slider Navigation -->
                <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="0"></button>
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="1"></button>
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="2"></button>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <div>
                <h4 class="text-lg font-semibold text-emerald-700">Fitur Utama</h4>
                <ul class="mt-4 space-y-2 list-disc pl-5 text-slate-700">
                  <li>Pengiriman data secara waktu nyata dan aman</li>
                  <li>Sudah teruji dengan sistem pelaporan KLHK</li>
                  <li>Data laporan tersaji di server KLHK untuk memudahkan audit</li>
                  <li>Dapat memantau status notifikasi pelaporan data ke sistem KLHK</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <h4 class="text-lg font-semibold text-emerald-700">Dashboard Pemantauan CEMS</h4>
            <ul class="mt-4 space-y-2 list-disc pl-5 text-slate-700">
              <li>Pengumpulan Data yang diambil dari Server OPC dan mendukung OPC-UA (Unified Architecture)</li>
              <li>Menyajikan data CEMS secara Dashboard waktu nyata per detik</li>
              <li>Pelaporan Data yang dapat disajikan dengan tampilan grafis dan bagan</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  calibration: {
    title: 'Kalibrasi & Pengujian CEMS',
    content: `
      <div class="mt-6 flex items-center justify-center">
        <div class="w-full max-w-7xl">
          <div class="text-center">
            <h4 class="text-lg font-semibold text-emerald-700">Audit Kinerja CEMS</h4>
            <p class="mt-2 text-slate-700 max-w-3xl mx-auto">Layanan kalibrasi dan pengujian CEMS oleh teknisi bersertifikasi dengan peralatan terakreditasi untuk memastikan akurasi sistem pemantauan sesuai standar ISO 17025.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div class="md:col-span-2">
              <!-- Image Slider -->
              <div class="relative overflow-hidden rounded-xl">
                <div class="image-slider flex transition-transform duration-300 ease-in-out" style="transform: translateX(0);">
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/tes/tescgaa.jpg" alt="Audit Silinder Gas" class="w-full h-96 object-cover">
                  </div>
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/tes/tesrcaa.jpg" alt="Audit Korelasi Respons" class="w-full h-96 object-cover">
                  </div>
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/tes/tesrataa.jpg" alt="Audit Tes Akurasi Relatif" class="w-full h-96 object-cover">
                  </div>
                </div>
                <!-- Slider Navigation -->
                <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="0"></button>
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="1"></button>
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="2"></button>
                </div>
              </div>
            </div>
            
            <div>
              <div>
                <h4 class="text-base font-semibold text-emerald-700">Audit Kinerja CEMS: Cylinder Gas Audit (CGA)</h4>
                <p class="mt-2 text-slate-700 text-justify text-sm">Cylinder Gas Audit yang selanjutnya disingkat CGA adalah pengujian akurasi dari sistem pemantauan emisi secara terus menerus yang bertujuan untuk menentukan ketepatan mengukur gas yang telah tersertifikasi.</p>
                <p class="mt-2 text-slate-700 text-justify text-sm">CGA ditujukan untuk menguji kinerja gas analyzer yang merupakan salah satu jaminan mutu (Quality Assurance, QA) dari CEMS.</p>
              </div>
              
              <div class="mt-6">
                <h4 class="text-base font-semibold text-emerald-700">Audit Kinerja CEMS: Response Correlation Audit (RCA)</h4>
                <p class="mt-2 text-slate-700 text-justify text-sm">RCA Adalah Serangkaian pengujian yang dilakukan secara spesifik untuk menjamin secara kontinyu validitas pengukuran partikulat dengan pemantauan emisi secara terus menerus (Continuous Emission Monitoring System)</p>
                <p class="mt-2 text-slate-700 text-justify text-sm">Kelayakan instrumen dinilai dari pengujian akurasi, linearitas dan waktu respons</p>
                <p class="mt-2 text-slate-700 text-justify text-sm">Kriteria evaluasi berdasarkan US EPA 40 CFR</p>
              </div>
              
              <div class="mt-6">
                <h4 class="text-base font-semibold text-emerald-700">Audit Kinerja CEMS: Relative Accuracy Tes Audit RATA</h4>
                <p class="mt-2 text-slate-700 text-justify text-sm">RATA Adalah perbedaan rata-rata absolut antara konsentrasi gas dengan peralatan pemantauan secara terus menerus dan nilai yang ditentukan dengan metode referensi sebagaimana dalam EPA yaitu 40CFR75 dan/atau 40 CFR60.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  support: {
    title: 'Dukungan & Pemeliharaan',
    content: `
      <div class="mt-6 flex items-center justify-center">
        <div class="w-full max-w-7xl">
          <div class="text-center">
            <h4 class="text-lg font-semibold text-emerald-700">Dukungan & Pemeliharaan</h4>
            <p class="mt-2 text-slate-700 max-w-3xl mx-auto">Layanan dukungan dan pemeliharaan 24/7 dengan waktu respons <4 jam oleh tim teknisi ahli di seluruh Indonesia.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div class="md:col-span-2">
              <!-- Image Slider -->
              <div class="relative overflow-hidden rounded-xl">
                <div class="image-slider flex transition-transform duration-300 ease-in-out" style="transform: translateX(0);">
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/mod-support.png" alt="Dukungan & Pemeliharaan" class="w-full h-96 object-cover">
                  </div>
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/mod-support.png" alt="Dukungan 24/7" class="w-full h-96 object-cover">
                  </div>
                  <div class="flex-shrink-0 w-full">
                    <img src="/img/service/mod-support.png" alt="Pemeliharaan Pencegahan" class="w-full h-96 object-cover">
                  </div>
                </div>
                <!-- Slider Navigation -->
                <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="0"></button>
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="1"></button>
                  <button class="slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white" data-index="2"></button>
                </div>
              </div>
            </div>
            
            <div>
              <div>
                <h4 class="text-base font-semibold text-emerald-700">Dukungan & Pemeliharaan</h4>
                <ul class="mt-2 space-y-2 list-disc pl-5 text-slate-700 text-sm">
                  <li>Lebih dari 13 tahun pengalaman di CEMS luar dan dalam negeri</li>
                  <li>Berpengalaman dalam regulasi teknik & audit</li>
                  <li>Berpengalaman integrasi TI & software integrasi ke SISIPEK(KLHK)</li>
                  <li>Patuh dan mengikuti aturan perundang-undangan dengan badan pemerintah (KLHK)</li>
                </ul>
              </div>
              
              <div class="mt-6">
                <h4 class="text-base font-semibold text-emerald-700">Pasokan & Integrasi CEMS</h4>
                <p class="mt-2 text-slate-700 text-justify text-sm">Didukung oleh tim unggul yang terdiri dari individu-individu yang memiliki keterampilan, pengetahuan, pengalaman dan keahlian tinggi di bidang mekanikal, elektrikal dan lingkungan. Biaya investasi dalam sistem pemantauan gasnya kecil dibandingkan dengan apa yang dapat dihabiskan untuk memelihara jenis sistem lainnya. Sistem peralatan CEMS kami memiliki total biaya kepemilikan yang rendah berdasarkan beberapa bagian yang bergerak, interval panjang antara kalibrasi, kemudahan pengoperasian, dan konsumsi energi yang rendah.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};

// Open modal when product card is clicked
document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('click', () => {
      const productKey = card.getAttribute('data-product');
      const product = products[productKey];
      
      console.log('Product clicked:', productKey);
      console.log('Product data:', product);
      
      if (product && productModal && modalSlide) {
        modalTitle.textContent = product.title;
        modalContent.innerHTML = product.content;
        productModal.classList.remove('hidden');
        
        // Slide in animation
        setTimeout(() => {
          modalSlide.classList.remove('-translate-x-full');
        }, 10);
        
        // Initialize image slider for analyzer, gateway, calibration, and support
        if (productKey === 'analyzer' || productKey === 'gateway' || productKey === 'calibration' || productKey === 'support') {
          // Tambahkan sedikit delay untuk memastikan DOM sudah siap
          setTimeout(() => {
            initializeImageSlider();
          }, 100);
        }
      } else {
        console.log('Modal elements not found or product not defined');
      }
    });
  });
  
  // Close modal
  const closeProductModal = () => {
    if (productModal && modalSlide) {
      modalSlide.classList.add('-translate-x-full');
      setTimeout(() => {
        productModal.classList.add('hidden');
        modalContent.innerHTML = ''; // Clear content when closing
      }, 300);
    }
  };
  
  if (closeModal) {
    closeModal.addEventListener('click', closeProductModal);
  }
  
  // Close modal when clicking backdrop
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeProductModal);
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal && !productModal.classList.contains('hidden')) {
      closeProductModal();
    }
  });
  
  // Tab navigation functionality
  const tabButtons = document.querySelectorAll('[data-tab]');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  // Handle tab navigation
  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = button.getAttribute('data-tab');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
        
        // Scroll to target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Mobile menu toggle
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent event from bubbling to document
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden') && 
        mobileMenuButton && !mobileMenu.contains(e.target) && 
        !mobileMenuButton.contains(e.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
});

// Image slider functionality
function initializeImageSlider() {
  const slider = document.querySelector('.image-slider');
  if (!slider) return;
  
  const slides = slider.querySelectorAll('.flex-shrink-0');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;
  let slideInterval;
  
  function updateSlider() {
    const translateX = -currentSlide * 100;
    slider.style.transform = `translateX(${translateX}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('bg-white');
        dot.classList.remove('bg-white/50');
      } else {
        dot.classList.remove('bg-white');
        dot.classList.add('bg-white/50');
      }
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }
  
  // Start auto slide
  function startAutoSlide() {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  // Stop auto slide
  function stopAutoSlide() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }
  
  // Add event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
      stopAutoSlide();
      startAutoSlide();
    });
  });
  
  // Pause auto slide when hovering over slider
  const sliderContainer = slider.closest('.relative');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
  }
  
  // Reset to first slide
  currentSlide = 0;
  updateSlider();
  
  // Start auto slide
  startAutoSlide();
}

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('lead-form');
  const formStatus = document.getElementById('form-status');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading message
      formStatus.textContent = 'Mengirim pesan...';
      formStatus.className = 'text-sm text-slate-600';
      
      // Disable submit button during submission
      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Mengirim...';
      submitButton.disabled = true;
      
      // Get form data
      const formData = new FormData(form);
      
      // Add hidden fields
      formData.append('_subject', 'Pesan Baru dari Website MWS');
      formData.append('_cc', 'syahrulrizki318@gmail.com');
      
      // Send form data using fetch
      fetch('https://formspree.io/f/xyzldkpn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          formStatus.textContent = 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.';
          formStatus.className = 'text-sm text-green-600';
          form.reset();
        } else {
          formStatus.textContent = 'Gagal mengirim pesan. Silakan coba lagi.';
          formStatus.className = 'text-sm text-red-600';
        }
      }).catch(error => {
        formStatus.textContent = 'Gagal mengirim pesan. Silakan coba lagi.';
        formStatus.className = 'text-sm text-red-600';
      }).finally(() => {
        // Re-enable submit button
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      });
    });
  }
  
  // Mobile dropdown functionality
  const mobileDropdownToggles = document.querySelectorAll('#mobile-menu .flex.justify-between.items-center');
  
  mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const submenu = this.nextElementSibling;
      const icon = this.querySelector('svg');
      
      // Toggle submenu visibility
      submenu.classList.toggle('hidden');
      
      // Rotate icon
      if (submenu.classList.contains('hidden')) {
        icon.style.transform = 'rotate(0deg)';
      } else {
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
  
  // Desktop dropdown functionality
  const desktopDropdowns = document.querySelectorAll('#main-nav .relative.group');
  
  desktopDropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('button');
    const menu = dropdown.querySelector('.absolute');
    
    // Show dropdown on mouse enter
    toggle.addEventListener('mouseenter', function() {
      menu.style.display = 'block';
    });
    
    // Hide dropdown when mouse leaves the dropdown area
    dropdown.addEventListener('mouseleave', function() {
      menu.style.display = 'none';
    });
  });
});