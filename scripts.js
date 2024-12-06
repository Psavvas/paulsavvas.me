document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Responsive navigation bar
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;';
    nav.appendChild(navToggle);

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
    });
});
