A aplicação é um trabalho acadêmico de construção e interação de software. Onde, uma tela login é apresentada para verificação de usuário autorizado. Este, deverá estar previamente cadastrado no banco MongoDb. Se não, não será autorizada sua entrada. Se sim, o usuário é direcionado para uma página contendo um formulário de cadastro de funcionários. Ao cadastrar o funcionário, é possível visualizar o cadastro no banco MySql. O Insomnia é usado para testes do banco MongoDb. É necessário conhecimento em tecnologias como 
HTML/CSS/JavaScript, python, flask, Node.js, MySql e MongoDB.

PASSOS:

INSTALANDO PACOTE EXPRESS NA PASTA RAIZ (Baixa os arquivos Node modules e package-lock.json)
npm install express --save

BAIXAR Nodemon para salvar alterações e salvar sem precisar ficar parando o servidor
npm install nodemon -D

AUTENTICAR O BANCO NO server.js
 OBS: COPIAR O COLAR O LINK usuário DO BANCO MongoDB

PRIMEIRO RODAR O SERVIDOR DA APLICAÇÃO FLASK
Entrar no arquivo app.py e digitar no terminal: python app.py

RODAR O SERVIDOR NODE.JS Entrar na pasta server.js:
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
/terminal/dividir terminal

PODE SER QUE SEJA NECESSÁRIO BAIXAR O CORS:
npm install cors

Instale as dependências do projeto
Navegue até a pasta do projeto no terminal e execute o comando npm install para instalar as dependências listadas no arquivo package.json

Dificuldades:
Minha maior dificuldade foi descobrir como seria a interligação entre os bancos. No caso, o funcionamento pleno da página login. 

------------------------------------------------------
