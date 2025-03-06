document.addEventListener("DOMContentLoaded", () => {
    const fabBtn = document.getElementById("fab-btn");
    const popupMenu = document.getElementById("popup-menu");
    const lightModeBtn = document.getElementById("light-mode");
    const darkModeBtn = document.getElementById("emerald-mode");
    const body = document.body;

    // Cek LocalStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Hilangkan efek flicker saat halaman dimuat
    setTimeout(() => {
        body.style.opacity = "1";
    }, 100); 

    // Toggle popup saat FAB diklik
    if (fabBtn && popupMenu) {
        fabBtn.addEventListener("click", () => {
            popupMenu.classList.toggle("show");
        });
    }

    // Ubah theme ke Light Mode (Saphire)
    if (lightModeBtn) {
        lightModeBtn.addEventListener("click", () => {
            body.classList.add("light-mode");
            body.classList.remove("emerald-mode");
            localStorage.setItem("theme", "light-mode"); // Simpan tema ke LocalStorage
            popupMenu.classList.remove("show");
        });
    }

    // Ubah theme ke Emerald Mode
    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", () => {
            body.classList.add("emerald-mode");
            body.classList.remove("light-mode");
            localStorage.setItem("theme", "emerald-mode"); // Simpan tema ke LocalStorage
            popupMenu.classList.remove("show");
        });
    }
});
