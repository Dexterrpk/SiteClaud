from flask import Blueprint, render_template, request, redirect, url_for, flash
import urllib.parse

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/enviar-contato', methods=['POST'])
def enviar_contato():
    if request.method == 'POST':
        nome = request.form.get('name', '')
        email = request.form.get('email', '')
        mensagem = request.form.get('message', '')
        
        # Construir URL do WhatsApp com os dados do formulário
        texto_whatsapp = f"Olá, meu nome é {nome} e meu e-mail é {email}. Mensagem: {mensagem}"
        url_whatsapp = f"https://wa.me/5575988245757?text={urllib.parse.quote(texto_whatsapp)}"
        
        return redirect(url_whatsapp)
    
    return redirect(url_for('main.index'))

@main.route('/assinar-plano/<plano>/<preco>', methods=['GET'])
def assinar_plano(plano, preco):
    # Construir URL do WhatsApp com os dados do plano
    texto_whatsapp = f"Olá! Gostaria de assinar o plano {plano} por R${preco}/mês. Poderia me enviar mais informações?"
    url_whatsapp = f"https://wa.me/5575988245757?text={urllib.parse.quote(texto_whatsapp)}"
    
    return redirect(url_whatsapp)
