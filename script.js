// Efeito suave ao rolar e animação nos cards ao aparecer
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card');
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        observer.observe(card);
    });
});

// Adicione ao CSS para animação de entrada
// .service-card { opacity: 0; transform: translateY(24px); transition: opacity 0.6s, transform 0.6s; }
// .service-card.show { opacity: 1; transform: translateY(0); }

// Efeito suave ao rolar a página
document.addEventListener('DOMContentLoaded', function() {
    if ('scrollBehavior' in document.documentElement.style) {
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Animação no botão WhatsApp
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('mouseenter', function() {
            whatsappBtn.animate([
                { transform: 'scale(1.05)' },
                { transform: 'scale(1.12)' },
                { transform: 'scale(1.05)' }
            ], {
                duration: 350,
                easing: 'ease-in-out'
            });
        });
    }

    // Animação nos ícones dos serviços ao aparecer
    const serviceIcons = document.querySelectorAll('.icon');
    serviceIcons.forEach((icon, i) => {
        setTimeout(() => {
            icon.animate([
                { opacity: 0, transform: 'scale(0.7) rotate(-20deg)' },
                { opacity: 1, transform: 'scale(1) rotate(0deg)' }
            ], {
                duration: 600,
                fill: 'forwards',
                easing: 'ease-out'
            });
        }, 200 + i * 120);
    });
});
