/*
===========================================
NAIARA NAIANJO - TAROT E ORÁCULOS
Arquivo JavaScript Principal
===========================================
*/

// Configurações globais
const CONFIG = {
    whatsappNumber: '5511999999999',
    animationDuration: 800,
    particleCount: 60,
    testimonialAutoPlay: true,
    testimonialInterval: 5000
};

// Estado da aplicação
const state = {
    currentTestimonial: 0,
    testimonialTimer: null,
    isLoading: true,
    formSubmitting: false
};

// Utilitários
const utils = {
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Format phone number
    formatPhone(phone) {
        const cleaned = phone.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return phone;
    },

    // Generate random number
    random(min, max) {
        return Math.random() * (max - min) + min;
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Loading Screen
const loadingScreen = {
    init() {
        const loading = document.getElementById('loading');
        if (loading) {
            // Simulate loading time
            setTimeout(() => {
                loading.classList.add('hidden');
                state.isLoading = false;
                this.onLoadComplete();
            }, 1500);
        }
    },

    onLoadComplete() {
        // Initialize other components after loading
        particles.init();
        animations.init();
        typewriter.init();
        floatingElements.start();
        console.log('🔮 Site carregado com sucesso! Bem-vindo ao mundo místico de Naiara Naianjo ✨');
    }
};

// Particles System
const particles = {
    container: null,
    particles: [],

    init() {
        this.container = document.getElementById('particles');
        if (!this.container) return;

        this.createParticles();
        this.animate();
    },

    createParticles() {
        for (let i = 0; i < CONFIG.particleCount; i++) {
            this.createParticle();
        }
    },

    createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        particle.style.left = utils.random(0, 100) + '%';
        particle.style.top = utils.random(0, 100) + '%';
        
        // Random animation delay and duration
        particle.style.animationDelay = utils.random(0, 6) + 's';
        particle.style.animationDuration = utils.random(4, 8) + 's';
        
        // Random size
        const size = utils.random(1, 4);
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random opacity
        particle.style.opacity = utils.random(0.3, 0.8);

        this.container.appendChild(particle);
        this.particles.push(particle);
    },

    animate() {
        this.particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            if (rect.top > window.innerHeight) {
                particle.style.top = '-10px';
                particle.style.left = utils.random(0, 100) + '%';
            }
        });

        requestAnimationFrame(() => this.animate());
    }
};

// Navigation
const navigation = {
    init() {
        this.setupSmoothScrolling();
        this.setupMobileMenu();
        this.setupScrollEffects();
    },

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    setupMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        if (mobileMenu && navLinks) {
            mobileMenu.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                mobileMenu.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            });

            // Close menu when clicking on a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                });
            });
        }
    },

    setupScrollEffects() {
        const header = document.querySelector('header');
        let lastScrollTop = 0;

        window.addEventListener('scroll', utils.throttle(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Hide/show header on scroll
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;

            // Change header background opacity
            if (scrollTop > 50) {
                header.style.background = 'rgba(26, 26, 46, 0.98)';
            } else {
                header.style.background = 'rgba(26, 26, 46, 0.95)';
            }
        }, 100));
    }
};

// Animations
const animations = {
    init() {
        this.setupIntersectionObserver();
        this.setupParallax();
        this.setupScrollProgress();
    },

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Animate service cards with stagger
        document.querySelectorAll('.service-card').forEach((card, index) => {
            card.style.animationDelay = (index * 0.1) + 's';
            observer.observe(card);
        });
    },

    setupParallax() {
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', utils.throttle(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.3;
                hero.style.transform = `translateY(${rate}px)`;
            }, 10));
        }
    },

    setupScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.classList.add('scroll-progress');
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', utils.throttle(() => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        }, 10));
    }
};

// Typewriter Effect
const typewriter = {
    init() {
        const heroText = document.querySelector('.hero-description');
        if (heroText) {
            const originalText = heroText.textContent;
            setTimeout(() => {
                this.typeText(heroText, originalText, 30);
            }, 2000);
        }
    },

    typeText(element, text, speed = 50) {
        element.innerHTML = '';
        let i = 0;
        
        const type = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        
        type();
    }
};

// Testimonials Slider
const testimonials = {
    track: null,
    cards: [],
    dots: [],
    autoPlayTimer: null,

    init() {
        this.track = document.getElementById('testimonialsTrack');
        this.cards = document.querySelectorAll('.testimonial-card');
        
        if (!this.track || this.cards.length === 0) return;

        this.createDots();
        this.setupEventListeners();
        
        if (CONFIG.testimonialAutoPlay) {
            this.startAutoPlay();
        }
    },

    createDots() {
        const dotsContainer = document.querySelector('.slider-dots');
        if (!dotsContainer) return;

        this.cards.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => this.goToSlide(index));
            
            dotsContainer.appendChild(dot);
            this.dots.push(dot);
        });
    },

    setupEventListeners() {
        // Previous/Next buttons
        document.querySelectorAll('.slider-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const direction = btn.classList.contains('next') ? 1 : -1;
                this.changeSlide(direction);
            });
        });

        // Touch/swipe support
        let startX = 0;
        let startY = 0;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        this.track.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;

            // Only swipe if horizontal movement is greater than vertical
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                this.changeSlide(diffX > 0 ? 1 : -1);
            }
        });
    },

    changeSlide(direction) {
        state.currentTestimonial += direction;
        
        if (state.currentTestimonial >= this.cards.length) {
            state.currentTestimonial = 0;
        } else if (state.currentTestimonial < 0) {
            state.currentTestimonial = this.cards.length - 1;
        }
        
        this.updateSlider();
        this.resetAutoPlay();
    },

    goToSlide(index) {
        state.currentTestimonial = index;
        this.updateSlider();
        this.resetAutoPlay();
    },

    updateSlider() {
        const translateX = -state.currentTestimonial * 100;
        this.track.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === state.currentTestimonial);
        });
    },

    startAutoPlay() {
        this.autoPlayTimer = setInterval(() => {
            this.changeSlide(1);
        }, CONFIG.testimonialInterval);
    },

    resetAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.startAutoPlay();
        }
    }
};

// Contact Form
const contactForm = {
    form: null,
    fields: {},

    init() {
        this.form = document.getElementById('contactForm');
        if (!this.form) return;

        this.setupFields();
        this.setupValidation();
        this.setupSubmission();
    },

    setupFields() {
        this.fields = {
            name: this.form.querySelector('#name'),
            email: this.form.querySelector('#email'),
            phone: this.form.querySelector('#phone'),
            service: this.form.querySelector('#service'),
            message: this.form.querySelector('#message'),
            privacy: this.form.querySelector('#privacy')
        };

        // Phone number formatting
        if (this.fields.phone) {
            this.fields.phone.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 11) {
                    value = value.substring(0, 11);
                    e.target.value = utils.formatPhone(value);
                }
            });
        }
    },

    setupValidation() {
        Object.values(this.fields).forEach(field => {
            if (field) {
                field.addEventListener('blur', () => this.validateField(field));
                field.addEventListener('input', () => this.clearFieldError(field));
            }
        });
    },

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        const formGroup = field.closest('.form-group');
        let isValid = true;
        let errorMessage = '';

        // Clear previous errors
        this.clearFieldError(field);

        // Validation rules
        switch (fieldName) {
            case 'name':
                if (!value || value.length < 2) {
                    isValid = false;
                    errorMessage = 'Nome deve ter pelo menos 2 caracteres';
                }
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value || !emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Por favor, insira um e-mail válido';
                }
                break;

            case 'message':
                if (!value || value.length < 10) {
                    isValid = false;
                    errorMessage = 'Mensagem deve ter pelo menos 10 caracteres';
                }
                break;

            case 'privacy':
                if (!field.checked) {
                    isValid = false;
                    errorMessage = 'É necessário aceitar a política de privacidade';
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    },

    showFieldError(field, message) {
        const formGroup = field.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        
        formGroup.classList.remove('error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    },

    setupSubmission() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    },

    handleSubmit() {
        if (state.formSubmitting) return;

        // Validate all fields
        let isFormValid = true;
        Object.values(this.fields).forEach(field => {
            if (field && field.hasAttribute('required')) {
                if (!this.validateField(field)) {
                    isFormValid = false;
                }
            }
        });

        if (!isFormValid) {
            this.showFormError('Por favor, corrija os erros antes de enviar.');
            return;
        }

        this.submitForm();
    },

    async submitForm() {
        const submitBtn = this.form.querySelector('.submit-btn');
        const formData = new FormData(this.form);
        
        // Show loading state
        state.formSubmitting = true;
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        try {
            // Simulate form submission delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Create WhatsApp message
            const whatsappMessage = this.createWhatsAppMessage(formData);
            
            // Open WhatsApp
            const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');

            // Show success message
            this.showSuccess();
            this.form.reset();

        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            this.showFormError('Erro ao enviar mensagem. Tente novamente.');
        } finally {
            // Reset loading state
            state.formSubmitting = false;
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    },

    createWhatsAppMessage(formData) {
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');

        const serviceNames = {
            'tarot-completo': 'Tarot Completo - R$ 80',
            'consulta-rapida': 'Consulta Rápida - R$ 45',
            'oraculo-anjos': 'Oráculo dos Anjos - R$ 60',
            'tarot-amor': 'Tarot do Amor - R$ 70',
            'tarot-profissional': 'Tarot Profissional - R$ 75',
            'mapa-astral': 'Mapa Astral - R$ 120'
        };

        let whatsappMessage = `🔮 *Nova Consulta - Site*\n\n`;
        whatsappMessage += `👤 *Nome:* ${name}\n`;
        whatsappMessage += `📧 *E-mail:* ${email}\n`;
        
        if (phone) whatsappMessage += `📱 *Telefone:* ${phone}\n`;
        if (service) whatsappMessage += `✨ *Serviço:* ${serviceNames[service] || service}\n`;
        
        whatsappMessage += `\n💬 *Mensagem:*\n${message}\n\n`;
        whatsappMessage += `⏰ *Enviado em:* ${new Date().toLocaleString('pt-BR')}`;

        return whatsappMessage;
    },

    showSuccess() {
        const successElement = document.getElementById('formSuccess');
        if (successElement) {
            successElement.classList.add('show');
            setTimeout(() => {
                successElement.classList.remove('show');
            }, 5000);
        }
    },

    showFormError(message) {
        // Create or update error message
        let errorElement = this.form.querySelector('.form-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.classList.add('form-error');
            errorElement.style.cssText = `
                color: #f44336;
                background: rgba(244, 67, 54, 0.1);
                border: 1px solid #f44336;
                padding: 10px;
                border-radius: 5px;
                margin-bottom: 1rem;
                text-align: center;
            `;
            this.form.insertBefore(errorElement, this.form.firstChild);
        }
        
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        setTimeout(() => {
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        }, 5000);
    }
};

// Floating Elements
const floatingElements = {
    symbols: ['⭐', '✨', '🌟', '💫', '🔮', '🌙', '💎', '🪄'],
    interval: null,

    start() {
        this.interval = setInterval(() => {
            this.createElement();
        }, 4000);
    },

    createElement() {
        const symbol = this.symbols[Math.floor(Math.random() * this.symbols.length)];
        const element = document.createElement('div');
        
        element.textContent = symbol;
        element.classList.add('floating-element');
        element.style.left = utils.random(10, 90) + '%';
        element.style.fontSize = utils.random(15, 25) + 'px';
        element.style.color = `rgba(255, 215, 0, ${utils.random(0.3, 0.7)})`;
        
        document.body.appendChild(element);
        
        // Remove element after animation
        setTimeout(() => {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }, 8000);
    },

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
};

// Back to Top Button
const backToTop = {
    button: null,

    init() {
        this.button = document.getElementById('backToTop');
        if (!this.button) return;

        this.setupEventListeners();
        this.setupScrollListener();
    },

    setupEventListeners() {
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    },

    setupScrollListener() {
        window.addEventListener('scroll', utils.throttle(() => {
            if (window.pageYOffset > 300) {
                this.button.classList.add('show');
            } else {
                this.button.classList.remove('show');
            }
        }, 100));
    }
};

// Dynamic Greeting
const dynamicGreeting = {
    init() {
        this.updateGreeting();
        this.updateWhatsAppButton();
        
        // Update every hour
        setInterval(() => {
            this.updateGreeting();
        }, 3600000);
    },

    getGreeting() {
        const hour = new Date().getHours();
        
        if (hour < 6) return { text: 'Boa madrugada! 🌙', emoji: '🌙' };
        if (hour < 12) return { text: 'Bom dia! ☀️', emoji: '☀️' };
        if (hour < 18) return { text: 'Boa tarde! 🌤️', emoji: '🌤️' };
        return { text: 'Boa noite! 🌙', emoji: '🌙' };
    },

    updateGreeting() {
        const greeting = this.getGreeting();
        
        // Update page title
        document.title = `${greeting.emoji} ${document.title.split(' ').slice(1).join(' ')}`;
    },

    updateWhatsAppButton() {
        const whatsappBtn = document.querySelector('.whatsapp-btn');
        if (whatsappBtn) {
            const greeting = this.getGreeting();
            whatsappBtn.title = `${greeting.text} Clique para conversar no WhatsApp`;
        }
    }
};

// Service Cards Enhancement
const serviceCards = {
    init() {
        const cards = document.querySelectorAll('.service-card');
        
        cards.forEach((card, index) => {
            // Add staggered animation
            card.style.animationDelay = (index * 100) + 'ms';
            
            // Add hover effects
            card.addEventListener('mouseenter', () => this.onCardHover(card));
            card.addEventListener('mouseleave', () => this.onCardLeave(card));
            
            // Add click tracking
            const button = card.querySelector('.service-btn');
            if (button) {
                button.addEventListener('click', () => {
                    const serviceName = card.querySelector('h3').textContent;
                    this.trackServiceClick(serviceName);
                });
            }
        });
    },

    onCardHover(card) {
        const icon = card.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(10deg)';
        }
    },

    onCardLeave(card) {
        const icon = card.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    },

    trackServiceClick(serviceName) {
        console.log(`🔮 Interesse no serviço: ${serviceName}`);
        
        // You can add analytics tracking here
        // gtag('event', 'service_interest', { service_name: serviceName });
    }
};

// Performance Monitor
const performance = {
    init() {
        this.monitorPageLoad();
        this.optimizeImages();
    },

    monitorPageLoad() {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`⚡ Página carregada em ${Math.round(loadTime)}ms`);
            
            // Log performance metrics
            if ('getEntriesByType' in performance) {
                const navigation = performance.getEntriesByType('navigation')[0];
                console.log(`📊 Performance:
                    - DNS Lookup: ${Math.round(navigation.domainLookupEnd - navigation.domainLookupStart)}ms
                    - Connect: ${Math.round(navigation.connectEnd - navigation.connectStart)}ms
                    - Response: ${Math.round(navigation.responseEnd - navigation.responseStart)}ms
                    - DOM Load: ${Math.round(navigation.loadEventStart - navigation.responseEnd)}ms
                `);
            }
        });
    },

    optimizeImages() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // Add loading="lazy" for better performance
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // Add error handling
            img.addEventListener('error', () => {
                console.warn(`⚠️ Erro ao carregar imagem: ${img.src}`);
                // You can add placeholder image here
            });
        });
    }
};

// Accessibility Enhancements
const accessibility = {
    init() {
        this.setupKeyboardNavigation();
        this.setupAriaLabels();
        this.setupFocusManagement();
    },

    setupKeyboardNavigation() {
        // ESC key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const navLinks = document.querySelector('.nav-links');
                const mobileMenu = document.querySelector('.mobile-menu');
                
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    },

    setupAriaLabels() {
        // Add missing aria-labels
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach(button => {
            const text = button.textContent.trim();
            if (text) {
                button.setAttribute('aria-label', text);
            }
        });
    },

    setupFocusManagement() {
        // Ensure focus is visible
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
};

// Error Handling
const errorHandler = {
    init() {
        window.addEventListener('error', (e) => {
            console.error('🚫 Erro JavaScript:', e.error);
            this.reportError(e.error);
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('🚫 Promise rejeitada:', e.reason);
            this.reportError(e.reason);
        });
    },

    reportError(error) {
        // You can implement error reporting to your analytics service
        // Example: Send to Google Analytics, Sentry, etc.
        console.log('📊 Erro reportado:', error.message);
    }
};

// Global Functions (for HTML onclick events)
window.changeSlide = (direction) => {
    testimonials.changeSlide(direction);
};

window.goToSlide = (index) => {
    testimonials.goToSlide(index);
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    loadingScreen.init();
    navigation.init();
    contactForm.init();
    testimonials.init();
    backToTop.init();
    
    // Enhancements
    serviceCards.init();
    dynamicGreeting.init();
    accessibility.init();
    performance.init();
    errorHandler.init();
});

// Initialize on window load
window.addEventListener('load', () => {
    // Additional initialization after all resources are loaded
    console.log('🌟 Todos os recursos carregados! Site pronto para uso.');
});

// Export for potential use in other scripts
window.NaiaraWebsite = {
    utils,
    navigation,
    testimonials,
    contactForm,
    particles,
    floatingElements
};.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    },

    clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');

    if (formGroup) {
        formGroup.classList.remove('error');
    }

    if (errorElement) {
        errorElement.textContent = '';
    }
}
