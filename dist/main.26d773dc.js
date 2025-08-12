document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open");
});
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open");
});
window.addEventListener('keydown', (e)=>{
    if (e.key === "Escape") document.getElementById("my-modal").classList.remove("open");
});

//# sourceMappingURL=main.26d773dc.js.map
