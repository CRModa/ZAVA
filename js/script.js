// Dados dinâmicos
const servicesData = [
    { icon: 'fas fa-users', title: 'Recursos Humanos', description: 'Auditorias, organização de departamentos, políticas de trabalho, processamento de salários e muito mais.' },
    { icon: 'fas fa-chart-line', title: 'Consultoria Empresarial', description: 'Melhoria da gestão de pessoas e clima organizacional com soluções personalizadas.' },
    { icon: 'fas fa-briefcase', title: 'Gestão Estratégica', description: 'Otimização de processos, estratégias e resultados para sua empresa.' },
    { icon: 'fas fa-balance-scale', title: 'Assessoria Jurídica', description: 'Apoio em questões trabalhistas, regulamentos internos e conflitos laborais.' },
    { icon: 'fas fa-building', title: 'Constituição de Empresas', description: 'Apoio desde a consultoria inicial até ao registo e legalização da sua empresa.' },
    { icon: 'fas fa-passport', title: 'Legalização de Expatriados', description: 'Orientação para obtenção de vistos e adaptação em Moçambique.' }
];

const valuesData = [
    { icon: 'fas fa-shield-alt', title: 'Integridade', description: 'Agimos com honestidade e transparência em todas as nossas relações.' },
    { icon: 'fas fa-graduation-cap', title: 'Ética Profissional', description: 'Respeitamos os mais altos padrões de conduta profissional.' },
    { icon: 'fas fa-hands-helping', title: 'Responsabilidade', description: 'Assumimos compromissos sérios com nossos clientes e parceiros.' },
    { icon: 'fas fa-medal', title: 'Qualidade', description: 'Entregamos excelência em todos os serviços prestados.' },
    { icon: 'fas fa-lightbulb', title: 'Criatividade e Inovação', description: 'Buscamos soluções criativas e inovadoras para desafios empresariais.' }
];

const contactInfo = [
    { icon: 'fas fa-map-marker-alt', title: 'Localização', content: 'Cidade da Beira - Sofala, Moçambique' },
    { icon: 'fas fa-phone-alt', title: 'Telefone', content: '+258 84 2615111<br>+258 86 9639111' },
    { icon: 'fas fa-envelope', title: 'Email', content: 'zavaconsultoria11@gmail.com' },
    { icon: 'fab fa-instagram', title: 'Instagram', content: '@zava_consultoria' }
];

const footerData = {
    about: "Especializada em soluções de recursos humanos, consultoria empresarial e gestão estratégica para organizações em Moçambique.",
    services: [
        'Recursos Humanos',
        'Consultoria Empresarial',
        'Gestão Estratégica',
        'Assessoria Jurídica',
        'Constituição de Empresas',
        'Legalização de Expatriados'
    ],
    links: [
        { text: 'Início', href: '#home' },
        { text: 'Serviços', href: '#services' },
        { text: 'Sobre Nós', href: '#about' },
        { text: 'Missão & Visão', href: '#mission' },
        { text: 'Contactos', href: '#contact' }
    ]
};

// Gerar conteúdo dinâmico
document.addEventListener('DOMContentLoaded', () => {
    // Gerar serviços
    const servicesGrid = document.querySelector('.services-grid');
    servicesData.forEach(service => {
        servicesGrid.innerHTML += `
            <div class="service-card fade-in">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <div class="service-content">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            </div>
        `;
    });

    // Gerar valores
    const valuesGrid = document.querySelector('.values-grid');
    valuesData.forEach(value => {
        valuesGrid.innerHTML += `
            <div class="value-card fade-in">
                <div class="value-icon">
                    <i class="${value.icon}"></i>
                </div>
                <h3>${value.title}</h3>
                <p>${value.description}</p>
            </div>
        `;
    });

    // Gerar contatos
    const contactInfoContainer = document.querySelector('.contact-info');
    contactInfo.forEach(contact => {
        contactInfoContainer.innerHTML += `
            <div class="contact-item fade-in">
                <div class="contact-icon">
                    <i class="${contact.icon}"></i>
                </div>
                <div class="contact-text">
                    <h4>${contact.title}</h4>
                    <p>${contact.content}</p>
                </div>
            </div>
        `;
    });

    // Gerar rodapé
    const footerGrid = document.querySelector('.footer-grid');
    footerGrid.innerHTML = `
        <div class="footer-col">
            <h4>ZAVA Consultoria</h4>
            <p>${footerData.about}</p>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/zava_consultoria/" target="_blank" aria-label="Visite o perfil da ZAVA Consultoria no Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
        
        <div class="footer-col">
            <h4>Serviços</h4>
            <ul class="footer-links">
                ${footerData.services.map(service => `<li><a href="#">${service}</a></li>`).join('')}
            </ul>
        </div>
        
        <div class="footer-col">
            <h4>Links Úteis</h4>
            <ul class="footer-links">
                ${footerData.links.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
            </ul>
        </div>
        
        <div class="footer-col">
            <h4>Newsletter</h4>
            <p>Subscreva para receber as últimas novidades e dicas empresariais.</p>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Seu Email" required>
                </div>
                <button type="submit" class="btn">Subscrever</button>
            </form>
        </div>
    `;

    // Atualizar ano no rodapé
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Scroll animation for elements
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
});