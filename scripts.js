function toggleThemeMenu() {
    const menu = document.getElementById("theme-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function setTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    toggleThemeMenu();
}

function showModule(moduleId) {
    document.querySelectorAll(".module-card").forEach(card => {
        card.classList.remove("visible");
    });
    document.getElementById(moduleId).classList.add("visible");
}
