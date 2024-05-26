document.querySelectorAll('.chrCard').forEach(card => {
    card.addEventListener('click', function() {
        const row = card.parentElement;

        // Remove the expanded class from all cards and show them
        document.querySelectorAll('.chrCard').forEach(c => {
            c.classList.remove('expanded');
            c.style.display = 'flex';
        });

        // Toggle the clicked card
        card.classList.toggle('expanded');

        // Hide other cards in the same row when one is expanded
        if (card.classList.contains('expanded')) {
            row.querySelectorAll('.chrCard').forEach(c => {
                if (c !== card) {
                    c.style.display = 'none';
                }
            });
        }
    });
});

