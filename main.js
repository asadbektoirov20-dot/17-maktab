document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.navbar nav');

    // Mobil menyuni ochish/yopish funksiyasi
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Menyu havolasini bosganda menyuni yopish
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            // Faqat mobil rejimda yopish
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
});