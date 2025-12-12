// Inisialisasi Swiper untuk carousel
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,  // Jumlah gambar yang tampil per halaman
  spaceBetween: 10,   // Jarak antar gambar
  autoplay: {
    delay: 5000,      // Gambar berubah setiap 5 detik
    disableOnInteraction: false,
  },
  loop: true,         // Mengulang carousel
  navigation: {
    nextEl: '.swiper-button-next',   // Tombol next
    prevEl: '.swiper-button-prev',   // Tombol prev
  },
  breakpoints: {
    1024: {
      slidesPerView: 2, // Untuk tablet, tampilkan 2 slide
    },
    768: {
      slidesPerView: 1, // Untuk mobile, tampilkan 1 slide
    },
  }
});
