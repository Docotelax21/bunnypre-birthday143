// ---- 143 Reasons ----
const reasons = [
    "I love the way your smile starts my day.",
    "Your laugh is my favourite song.",
    "Your hugs—they fit perfectly in mine.",
    "How you make tea on rainy days.",
    "Your stubbornness when you're right.",
    "Your little notes you hide for me.",
    "How you make food taste like home.",
    "You dancing in the kitchen at midnight.",
    "The way you look when you’re concentrating.",
    "Your texts that turn my bad days around.",
    "How you call me when you're excited.",
    "Your eyes while reading.",
    "Your voice saying my name.",
    "Your little shy moments.",
    "How you teach me new things.",
    "Your cute giggles at sunsets.",
    "Your smell on your hoodie.",
    "The way you remember small details.",
    "Your courage to try new things.",
    "Your soft honesty.",
    "Your silly jokes.",
    "Your doodles.",
    "Your appetite for adventure.",
    "Your gentleness.",
    "Your patience even when you’re upset."
];

// --------- Render hearts ----------
window.onload = () => {
    const container = document.getElementById("reasons-container");
    if (!container) return;

    reasons.forEach((reason, index) => {
        const div = document.createElement("div");
        div.className = "reason-heart";
        div.innerHTML = `
            <strong>❤️ ${index + 1}</strong>
            <p class="reason-text">${reason}</p>
        `;
        div.onclick = () => {
            const text = div.querySelector(".reason-text");
            text.style.display = text.style.display === "block" ? "none" : "block";
        };
        container.appendChild(div);
    });
};
