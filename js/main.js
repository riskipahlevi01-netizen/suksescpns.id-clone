// ===============================================================
// === LOAD HEADER & FOOTER DINAMIS (MODULAR WEBSITE) ============
// ===============================================================
document.addEventListener("DOMContentLoaded", async () => {
  async function loadComponent(selector, filePath) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const res = await fetch(filePath);
      if (!res.ok) throw new Error(`Gagal memuat ${filePath}`);
      const html = await res.text();
      el.innerHTML = html;
    } catch (err) {
      console.error("Error memuat komponen:", filePath, err);
    }
  }

  // Tentukan basePath berdasarkan URL
  const basePath = (() => {
    const pathname = window.location.pathname;

    // Naik dua level 
    if (pathname.includes("/blog/detail/")) {
      return "../../../";  // Naik dua folder
    }

    // Naik satu level 
    if (pathname.includes("/tentang-kami") ||
      pathname.includes("/bimbelcpns") ||
      pathname.includes("/bimbelpppk") ||
      pathname.includes("/bimbelbumn") ||
      pathname.includes("/blog") ||
      pathname.includes("/kontak-kami")) {
      return "..";  // Naik satu folder
    }

    // Default jika berada di root atau folder yang sama
    return "."; // Default
  })();

  // Muat header dan footer
  await loadComponent("header", `${basePath}/components/header.html`);
  await loadComponent("footer", `${basePath}/components/footer.html`);


  // Menambahkan event listener untuk dropdown menu
  const menuItems = document.querySelectorAll(".menu-item");

  

  menuItems.forEach((item) => {
    const subMenu = item.querySelector(".sub-menu");
    if (subMenu) {
      // Menangani hover (mouse masuk dan keluar)
      item.addEventListener("mouseenter", () => {
        subMenu.style.display = "block"; // Menampilkan sub-menu
      });

      item.addEventListener("mouseleave", () => {
        subMenu.style.display = "none"; // Menyembunyikan sub-menu
      });

    }
  });

  // Setelah header/footer termuat, jalankan seluruh fitur website
  if (typeof EducateWebsite === "function") {
    new EducateWebsite();
  }
});





