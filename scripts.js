// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeToggleButton = document.getElementById('themeToggle');
    if (document.body.classList.contains('dark-theme')) {
        themeToggleButton.innerText = "Switch to Light Theme";
    } else {
        themeToggleButton.innerText = "Switch to Dark Theme";
    }
}
