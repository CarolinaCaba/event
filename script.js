// Menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Cerrar menú al hacer click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
/* ========== PORTAFOLIO VERTICAL ========== */
.portafolio {
    padding: 80px 0;
    background: #fafafa;
}

.portafolio-vertical {
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 900px;
    margin: 0 auto;
}

.portafolio-item {
    background: white;
    border-radius: 32px;
    overflow: hidden;
    box-shadow: 0 10px 30px -8px rgba(0,0,0,0.1);
    transition: 0.3s;
}

.portafolio-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -12px rgba(0,0,0,0.15);
}

.portafolio-imagenes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    background: #e5e7eb;
}

.portafolio-imagenes img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    background: #f5f5f5;
}

.portafolio-info {
    padding: 28px;
}

.portafolio-info h3 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    color: #1f2937;
}

.portafolio-info p {
    color: #6b7280;
    margin-bottom: 12px;
}

.portafolio-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.portafolio-tags span {
    background: #f0fdfa;
    padding: 6px 14px;
    border-radius: 30px;
    font-size: 0.75rem;
    color: #369694;
    font-weight: 500;
}

.btn-portafolio-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #369694;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;
}

.btn-portafolio-link:hover {
    gap: 12px;
    color: #2a7a78;
}

/* Responsive para portafolio vertical */
@media (max-width: 768px) {
    .portafolio-imagenes {
        grid-template-columns: 1fr;
        gap: 0;
    }
    
    .portafolio-info {
        padding: 20px;
    }
    
    .portafolio-info h3 {
        font-size: 1.3rem;
    }
}
