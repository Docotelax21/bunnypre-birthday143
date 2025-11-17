// ========== HEART REVEAL (143 PAGE) ==========
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("heart")) {
        const content = e.target.querySelector(".text");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }
    }
});

// RANDOM REVEAL BUTTON
function revealRandom() {
    const hearts = document.querySelectorAll(".text");
    hearts.forEach(h => h.classList.add("hidden"));
    const random = hearts[Math.floor(Math.random() * hearts.length)];
    random.classList.remove("hidden");
}

function resetHearts() {
    document.querySelectorAll(".text").forEach(h => h.classList.add("hidden"));
}
