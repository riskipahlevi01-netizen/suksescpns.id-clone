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

  // Deteksi apakah halaman di root atau subfolder (tentang-kami, blogs, dll)
  const basePath =
    window.location.pathname.includes("/tentang-kami") ||
    window.location.pathname.includes("/blog") ||
    window.location.pathname.includes("/bimbelcpns") ||
    window.location.pathname.includes("/bimbelpppk") ||
    window.location.pathname.includes("/bimbelbumn") ||
    window.location.pathname.includes("/kontak-kami")
      ? ".."
      : ".";

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


