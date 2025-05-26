// Funções globais para WhatsApp
function sendWhatsApp() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    
    // Codificar os parâmetros para URL
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedMessage = encodeURIComponent(message);
    
    // Montar a URL do WhatsApp com os dados do formulário
    const whatsappURL = `https://wa.me/5575988245757?text=Olá,%20meu%20nome%20é%20${encodedName}%20e%20meu%20e-mail%20é%20${encodedEmail}.%20Mensagem:%20${encodedMessage}`;
    
    // Abrir em nova aba
    window.open(whatsappURL, '_blank');
    
    // Resetar o formulário
    document.getElementById('contactForm').reset();
    return false;
}

// Função para assinar plano via WhatsApp
function assinarPlano(plano, preco) {
    const mensagem = `Olá! Gostaria de assinar o plano ${plano} por R$${preco}/mês. Poderia me enviar mais informações?`;
    const whatsappURL = `https://wa.me/5575988245757?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappURL, '_blank');
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    
    // Mostrar menu
    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }
    
    // Esconder menu
    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
    
    // Remover menu mobile ao clicar em um link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });
    
    // Scroll ativo para seções
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 50;
            const sectionId = section.getAttribute('id');
            
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }
    window.addEventListener('scroll', scrollActive);
    
    // Scroll Up
    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        if(this.scrollY >= 200) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    }
    window.addEventListener('scroll', scrollUp);
    
    // Scroll Reveal Animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        // reset: true
    });
    
    sr.reveal('.home__data, .home__img, .section__header, .feature__card, .pricing__card, .about__container, .contact__container');
    sr.reveal('.stat', {interval: 100});
    
    // Adicionar event listeners para os botões
    const contactButton = document.getElementById('contactForm').querySelector('button');
    if (contactButton) {
        contactButton.addEventListener('click', sendWhatsApp);
        console.log('Event listener adicionado ao botão de contato');
    }
    
    // Adicionar event listeners para os botões de planos
    const planoButtons = document.querySelectorAll('.plano-button');
    planoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planoTitle = this.closest('.pricing__card').querySelector('.pricing__title').textContent;
            const planoPreco = this.closest('.pricing__card').querySelector('.amount').textContent;
            console.log('Clique no plano: ' + planoTitle + ' - R$' + planoPreco);
            assinarPlano(planoTitle, planoPreco);
        });
    });
    console.log('Event listeners adicionados a ' + planoButtons.length + ' botões de planos');
});

// Inicializar Google Analytics
function gtag() {
    dataLayer.push(arguments);
}