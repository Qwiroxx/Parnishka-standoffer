document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const header = document.querySelector(".header");

    burger.addEventListener("click", function() {
        header.classList.toggle("open");

        if (header.classList.contains("open")) {
            document.body.style.overflow = "hidden"; // блокуємо скрол
        } else {
            document.body.style.overflow = ""; // повертаємо як було
        }
    });
});