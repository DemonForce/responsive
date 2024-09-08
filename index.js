const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function detectMobile() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.body.style.backgroundColor = '#111'; // Cambia el fondo si es móvil
    } else {
        document.body.style.backgroundColor = '#0a0a0a'; // Fondo para escritorio
    }
}

window.onload = detectMobile;
