// Mobile bottom sheet menu
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');

function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

mobileToggle.addEventListener('click', openMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);
// Close mobile menu if screen resizing exceeds 900px
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        closeMobileMenu();
    }
});

// Mobile services accordion
document.querySelectorAll('.mobile-dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;
        submenu.classList.toggle('open');
        const icon = btn.querySelector('i');
        icon.classList.toggle('fa-angle-down');
        icon.classList.toggle('fa-angle-up');
    });
});

// Close sheet when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Back to top button
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
});
topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Contact form - basic client-side handling (static site has no backend)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thanks for reaching out! Please note this form needs an email service (like Formspree or EmailMeForm) connected to actually deliver messages, since this is a static site with no backend.');
    });
}
