document.querySelectorAll('.chrCard').forEach(card => {
    card.addEventListener('click', function() {
        const row = card.parentElement;

        document.querySelectorAll('.chrCard').forEach(c => {
            c.classList.remove('expanded');
            c.style.display = 'flex';
        });

        card.classList.toggle('expanded');

        if (card.classList.contains('expanded')) {
            row.querySelectorAll('.chrCard').forEach(c => {
                if (c !== card) {
                    c.style.display = 'none';
                }
            });
        }
    });
});

