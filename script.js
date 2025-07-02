
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu
     hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');

     // Update aria-expanded attribute
     const isExpanded = this.getAttribute('aria-expanded') === 'true';
     this.setAttribute('aria-expanded', !isExpanded);

     // Toggle body scroll
     document.body.classList.toggle('menu-open', isExpanded);

         // Toggle body scroll
     document.body.classList.toggle('menu-open', isExpanded);

    });

    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () =>  {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
});