document.addEventListener("DOMContentLoaded", function () {
    const menuToggleButton = document.getElementById("menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const pageContent = document.getElementById("page-content-wrapper");

    if (menuToggleButton && sidebar && pageContent) {
        menuToggleButton.addEventListener("click", function () {
            sidebar.classList.toggle("toggled");
            pageContent.classList.toggle("toggled");
        });
    }
    
    const themeToggleSwitch = document.getElementById("theme-toggle");

    if (themeToggleSwitch) {
        themeToggleSwitch.addEventListener("change", function () {
            document.body.classList.toggle("dark-mode");
        });
    }
});