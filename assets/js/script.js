const cards = document.querySelectorAll('.feature-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        if (card.classList.contains("lock")) return;
        card.classList.toggle("open");
    });

    card.addEventListener('mouseleave', () => {
        if (card.classList.contains("lock")) return;
        card.classList.toggle("open");
    });

    card.addEventListener('click', () => {
        card.classList.toggle("lock");
    });

});
