PASSOS:

INSTALANDO PACOTE EXPRESS NA PASTA RAIZ. Baixa os arquivos Node modules e package-lock.json
npm install express --save


BAIXAR Nodemon para salvar alterações e salvar sem precisar ficar parando o servidor
npm install nodemon -D

AUTENTICAR O BANCO NO server.js
 OBS: COPIAR O COLAR O LINK DO BANCO MongoDB

PRIMEIRO RODAR O SERVIDOR DA APLICAÇÃO FLASK
Entrar no arquivo app.py e digitar no terminal: python app.py

RODAR O SERVIDOR NODE.JS. Entrar na pasta server.js:
No terminal: npm run dev

PARAR SERVIDOR:
Ctrl+c

Endereço da página de login:
http://localhost:3001/login.html

LOGIN NO INSOMNIA:
testa se o login existe no banco mongodB 
método: POST 
endereço: http://localhost:3001/api/entrar

PARA LISTAR USUÁRIOS NO INSOMNIA:
http://localhost:3001/api/users

COMO DIVIDIR O TERMINAL PARA RODAR DOIS SERVIDORES:
3 pontinhos/terminal/dividir terminal


Dificuldades:
Minha maior dificuldade foi descobrir como seria a interligação entre os bancos. No caso, o funcionamento pleno da página login. 

------------------------------------------------------
