document.addEventListener("DOMContentLoaded", () => {
    const fabBtn = document.getElementById("fab-btn");
    const popupMenu = document.getElementById("popup-menu");
    const lightModeBtn = document.getElementById("light-mode");
    const darkModeBtn = document.getElementById("emerald-mode");
    const body = document.body;

    let currentTheme = localStorage.getItem("theme");

    if (!currentTheme) {
        body.classList.add("emerald-mode");
        localStorage.setItem("theme", "emerald-mode");
    } else {
        body.classList.add(currentTheme);
    }

    setTimeout(() => {
        body.style.opacity = "1";
    }, 100);

    // FAB Button
    if (fabBtn && popupMenu) {
        fabBtn.addEventListener("click", () => {
            popupMenu.classList.toggle("show");
        });
    }

    // Ganti ke Light Mode (Saphire)
    if (lightModeBtn) {
        lightModeBtn.addEventListener("click", () => {
            body.classList.remove("emerald-mode");
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light-mode");
            popupMenu.classList.remove("show");
        });
    }

    // Ganti ke Emerald Mode
    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", () => {
            body.classList.remove("light-mode");
            body.classList.add("emerald-mode");
            localStorage.setItem("theme", "emerald-mode");
            popupMenu.classList.remove("show");
        });
    }
});
