// Sayfa kaydırma efekti
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const menuIcon = document.querySelector('.menu-icon'); // Header'daki hamburger
const closeMenu = document.getElementById('closeMenu'); // 'X' butonu
const menuOverlay = document.getElementById('menuOverlay');

// Menüyü Aç
menuIcon.addEventListener('click', () => {
    menuOverlay.classList.add('active');
});

// Menüyü Kapat
closeMenu.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
});

// Linklerden birine tıklandığında menüyü otomatik kapat
const navLinks = document.querySelectorAll('.overlay-content a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });
});
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const overlay = document.getElementById('menuOverlay');

openBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

