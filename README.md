# Automação Comercial WhatsApp - Documentação

Este projeto é uma aplicação web Flask para automação comercial via WhatsApp, permitindo envio de formulários de contato e contratação de planos diretamente para o WhatsApp.

## Requisitos

- Python 3.6 ou superior
- Flask
- Gunicorn (para produção)

## Estrutura do Projeto

```
automacao-comercial-flask/
├── app/
│   ├── __init__.py
│   ├── routes.py
│   ├── static/
│   │   ├── css/
│   │   └── js/
│   └── templates/
│       └── index.html
├── venv/
├── app.py
├── requirements.txt
└── README.md
```

## Instalação Local

1. Clone o repositório
2. Crie um ambiente virtual:
   ```
   python -m venv venv
   ```
3. Ative o ambiente virtual:
   - Windows: `venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`
4. Instale as dependências:
   ```
   pip install -r requirements.txt
   ```
5. Execute a aplicação:
   ```
   python app.py
   ```
6. Acesse http://localhost:5000 no navegador

## Hospedagem Gratuita

### Opção 1: Render (Recomendado)

1. Crie uma conta em [render.com](https://render.com/)
2. Clique em "New" e selecione "Web Service"
3. Conecte ao seu repositório GitHub ou faça upload do código
4. Configure o serviço:
   - Nome: escolha um nome para seu serviço
   - Runtime: Python 3
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
5. Clique em "Create Web Service"

### Opção 2: PythonAnywhere

1. Crie uma conta em [pythonanywhere.com](https://www.pythonanywhere.com/)
2. Vá para a seção "Web" e clique em "Add a new web app"
3. Escolha "Flask" e a versão mais recente do Python
4. Configure o caminho para o arquivo WSGI:
   - Edite o arquivo WSGI gerado
   - Substitua o conteúdo pelo seguinte:
   ```python
   import sys
   path = '/home/seuusuario/automacao-comercial-flask'
   if path not in sys.path:
       sys.path.append(path)
   
   from app import app as application
   ```
5. Faça upload dos arquivos do projeto via FTP ou Git
6. Reinicie a aplicação

### Opção 3: Heroku

1. Crie uma conta em [heroku.com](https://www.heroku.com/)
2. Instale o Heroku CLI
3. Adicione um arquivo `Procfile` na raiz do projeto com o conteúdo:
   ```
   web: gunicorn app:app
   ```
4. Inicialize um repositório Git (se ainda não existir):
   ```
   git init
   git add .
   git commit -m "Primeira versão"
   ```
5. Crie e implante no Heroku:
   ```
   heroku create nome-do-seu-app
   git push heroku master
   ```

## Personalização

Para personalizar o site:

1. Edite os arquivos HTML em `app/templates/`
2. Modifique os estilos CSS em `app/static/css/`
3. Atualize os scripts JS em `app/static/js/`
4. Altere as rotas e lógica de negócios em `app/routes.py`

## Suporte

Para dúvidas ou problemas, entre em contato com:
- Email: cleitonneri04@hotmail.com
- WhatsApp: (75) 98824-5757
