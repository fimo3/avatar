document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        var button = dropdown.querySelector('.dropbtn');
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.classList.toggle('show');
        });
    });

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdownContents = document.querySelectorAll('.dropdown-content');
            dropdownContents.forEach(function(content) {
                if (content.classList.contains('show')) {
                    content.classList.remove('show');
                }
            });
        }
    };
});
