# 🔮 Naiara Naianjo - Site de Tarot e Oráculos

Site profissional para consultas de Tarot e Oráculos da Naiara Naianjo, desenvolvido com foco em experiência do usuário, performance e conversão.

## ✨ Características Principais

### 🎨 Design Moderno
- **Visual místico** com paleta dourada e azul escura
- **Animações suaves** e efeitos de transição
- **Responsivo** para todos os dispositivos
- **Glassmorphism** e efeitos de blur moderno

### ⚡ Performance Otimizada
- **Carregamento rápido** com otimizações de imagem
- **Código minificado** e comprimido
- **Lazy loading** para recursos não críticos
- **SEO otimizado** com meta tags completas

### 🔧 Funcionalidades Avançadas
- **Formulário inteligente** com validação em tempo real
- **Integração WhatsApp** automática
- **Slider de depoimentos** com navegação touch
- **Partículas animadas** para atmosfera mística
- **Menu mobile** responsivo

## 📁 Estrutura do Projeto

```
naiara-tarot-site/
├── 📄 index.html              # Página principal
├── 📁 css/
│   └── 📄 style.css          # Estilos principais
├── 📁 js/
│   └── 📄 script.js          # JavaScript funcional
├── 📁 images/
│   ├── 🖼️ logo.png           # Logo da Naiara
│   ├── 🖼️ hero-bg.jpg        # Imagem de fundo do hero
│   ├── 🖼️ about-photo.jpg    # Foto da Naiara
│   ├── 🖼️ tarot-cards.jpg    # Imagens de cartas
│   ├── 🖼️ crystal-ball.jpg   # Bola de cristal
│   └── 🖼️ favicon.ico        # Ícone do site
├── 📄 README.md              # Esta documentação
└── 📄 .gitignore             # Arquivos ignorados pelo Git
```

## 🚀 Como Usar

### 1. Clone o Repositório
```bash
git clone https://github.com/Dexterrpk/Inaiara-site.git
cd Inaiara-site
```

### 2. Personalize as Configurações
Edite o arquivo `js/script.js` para configurar:
```javascript
const CONFIG = {
    whatsappNumber: '5511999999999', // Seu número do WhatsApp
    animationDuration: 800,
    particleCount: 60,
    testimonialAutoPlay: true,
    testimonialInterval: 5000
};
```

### 3. Adicione suas Imagens
Substitua as imagens na pasta `images/` pelas suas:
- `logo.png` - Logo da Naiara (recomendado: 200x200px)
- `hero-bg.jpg` - Imagem de fundo (recomendado: 1920x1080px)
- `about-photo.jpg` - Foto da Naiara (recomendado: 600x600px)
- `favicon.ico` - Ícone do site (32x32px)

### 4. Atualize as Informações
No arquivo `index.html`, personalize:
- Dados de contato (telefone, email, endereço)
- Preços dos serviços
- Depoimentos
- Textos da seção "Sobre"

### 5. Deploy
Faça upload dos arquivos para seu servidor ou use serviços como:
- **Netlify** (recomendado para projetos estáticos)
- **Vercel**
- **GitHub Pages**
- **Hostinger**
- **GoDaddy**

## 📱 Seções do Site

### 🏠 Página Inicial (Hero)
- Apresentação impactante
- Estatísticas de credibilidade
- Call-to-action principal
- Animações de entrada

### 🛍️ Serviços
- **6 tipos de consulta** diferentes
- Preços claramente definidos
- Descrições detalhadas
- Botões de ação direta

### 👤 Sobre
- História da Naiara
- Especializações
- Certificações
- Foto profissional

### 💬 Depoimentos
- Slider automático
- Navegação por toque
- Avaliações com estrelas
- Dados dos clientes

### 📞 Contato
- Formulário inteligente
- Integração WhatsApp
- Informações de contato
- Horários de atendimento

## 🎯 Otimizações de Conversão

### 📈 Elementos que Aumentam Vendas
- **Prova social** com depoimentos reais
- **Urgência** com botões de ação claros
- **Confiança** com certificações e estatísticas
- **Facilidade** com WhatsApp integrado

### 🔍 SEO Otimizado
- Meta tags completas
- Structured data (Schema.org)
- Otimização de imagens
- URLs amigáveis
- Carregamento rápido

### 📱 Mobile-First
- Design responsivo
- Touch-friendly
- Navegação intuitiva
- Performance otimizada

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com Flexbox/Grid
- **JavaScript ES6+** - Funcionalidades interativas
- **Responsive Design** - Mobile-first approach

### Recursos Externos
- **Google Fonts** - Tipografia elegante
- **Font Awesome** - Ícones vetoriais
- **Intersection Observer** - Animações de scroll
- **Local Storage** - Persistência de dados

## 🔧 Configurações Avançadas

### Personalizar Cores
No arquivo `css/style.css`, modifique as variáveis:
```css
:root {
    --primary-color: #ffd700;    /* Dourado principal */
    --secondary-color: #ffeb3b;  /* Dourado secundário */
    --dark-blue: #1a1a2e;       /* Azul escuro */
    --text-light: #f5f5f5;      /* Texto claro */
}
```

### Adicionar Novos Serviços
No arquivo `index.html`, adicione um novo card:
```html
<div class="service-card">
    <div class="service-icon">🌟</div>
    <h3>Novo Serviço</h3>
    <p>Descrição do serviço...</p>
    <div class="service-price">R$ 99,00</div>
    <a href="#contact" class="service-btn">Agendar Agora</a>
</div>
```

### Modificar Depoimentos
Edite a seção de depoimentos no HTML:
```html
<div class="testimonial-card">
    <div class="stars">⭐⭐⭐⭐⭐</div>
    <p class="testimonial-text">"Seu depoimento aqui..."</p>
    <div class="testimonial-author">
        <strong>Nome do Cliente</strong>
        <span>Profissão - Cidade</span>
    </div>
</div>
```

## 📊 Analytics e Monitoramento

### Google Analytics
Adicione seu código de tracking no `<head>` do HTML:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Facebook Pixel
Para campanhas de anúncios no Facebook:
```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🚀 Performance Tips

### Otimização de Imagens
- Use formatos modernos (WebP, AVIF)
- Comprima as imagens (TinyPNG, Squoosh)
- Implemente lazy loading
- Use dimensões adequadas

### Minificação
- Minifique CSS e JavaScript
- Use ferramentas como UglifyJS
- Comprima com Gzip no servidor

### Cache do Navegador
Configure headers de cache no servidor:
```
Cache-Control: max-age=31536000
```

## 🔒 Segurança

### Headers de Segurança
Configure no servidor:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

### HTTPS
- Sempre use HTTPS em produção
- Configure certificado SSL
- Redirecione HTTP para HTTPS

## 📞 Suporte

### Documentação Adicional
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### Comunidade
- [Stack Overflow](https://stackoverflow.com/)
- [GitHub Discussions](https://github.com/features/discussions)
- [Reddit r/webdev](https://reddit.com/r/webdev)

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🎉 Créditos

Desenvolvido com ❤️ para Naiara Naianjo

**Recursos utilizados:**
- Ícones: Emojis nativos
- Fontes: Google Fonts
- Inspiração: Comunidade de designers místicos
- Testes: Clientes beta da Naiara

---

**🔮 Que a magia das cartas guie seu sucesso online! ✨**