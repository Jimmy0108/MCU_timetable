const toggleButton = document.getElementById("toggle-theme-btn");

toggleButton.addEventListener("click", function () {
    document.body.classList.add("transitioning");
    setTimeout(function () {
        document.body.classList.toggle("night-mode");
        document.body.classList.remove("transitioning");
    }, 500);
});
