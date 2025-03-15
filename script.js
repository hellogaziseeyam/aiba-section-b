document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});
