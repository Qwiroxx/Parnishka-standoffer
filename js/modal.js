document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("open-modal-btn");
    const closeBtn = document.getElementById("close-my-modal-btn");
    const modal = document.getElementById("my-modal");

    if (openBtn) {
        openBtn.addEventListener("click", () => {
            modal.classList.add("open");
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("open");
        });
    }

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.classList.remove("open");
        }
    });
});