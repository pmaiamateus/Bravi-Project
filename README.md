# Bem vindos ao Projeto de cadastro de clientes para a empresa Bravi

Este projeto foi desenvolvido e destinado para uma vaga de emprego na empresa Bravi para demonstrar conhecimentos de programação e desenvolvimento web.

A proposta é desenvolver uma aplicação que armazena e atualiza cadastros de contatos em uma agenda de forma rápida e dinâmica.

---

## Sobre este repositório

Este repositório é o projeto por inteiro, sendo que dentro dele existe a parte do desafio dos suportes balanceados, a parte de back-end e a parte de front-end, tratando tanto da parte cadastrar e atualizar o cadastro, verificando os dados antes de postá-los no banco, quanto a parte de front-end de forma interativa e rápida que possui um formulário para colocar os dados do contato e a comunicação adequada com o banco.

Obs.: Caso tenha algum problema com a comunicação com o banco de dados, o arquivo que trabalha os dados do banco é Ce3-project-Mateus-Maia/back-end/.env

Sendo assim, foram requisitos do projeto:

### . Requisitos técnicos:

1. Desafio feito em Typescript
2. Front-end em React.
3. Back-end em NodeJS, com MySQL e sequelize (API REST).

### . Funcionalidades:

1. Cadastrar contatos.
2. Atualizar e editar contatos.
3. Cada cadastro é unico com a chave nome
5. Arquiteturas em camadas.

## Como Instalar:

### Pré-requisitos:

1. MySql2 configurado
2. NPM
3. gitHub
4. VSCode ou algum programa similar

### Instalação

1. abra um terminal na pasta que deseja clonar o repositório (pode ser feito usando o botão direito do mouse).
2. copie os comandos:

   . git clone https://github.com/pmaiamateus/Ce3-project-Mateus-Maia.git

   . cd Ce3-project-Mateus-Maia

   . npm install
   
4. Caso queira apenas iniciar a aplicação, use "npm start" no terminal

   . abrir o link http://localhost:3000/
   
   . Para finalizar as aplicações use "killall node" no terminal

6. Caso queira ver logs no terminal, será necessário usar:

   . cd back-end

   . npm run db:reset

   . npm start (inicia o back-end da aplicação)

   . *Abrir outro terminal*

   . cd front-end

   . npm start (inicia a aplicação front end e já abre no navegador)
    

## Como utilizar:

A aplicação possui as rotas ('/user' e '/convenios') para os cadastros no back-end, que funcionam da seguinte forma:
* `/` `POST` armazena um novo cadastro (/user/post);
* `/` `PUT` atualiza um cadastro (/user/put);
* `/` `GET` recebe todos os convenios cadastrados, que coloquei alguns em seed para não ficar vazio na página(/convenios/get);

## Como foi desenvolvido:

Devido a problemas pessoais e por causa da rotina pesada essa semana na faculdade (faculdade no periodo noturno), eu consegui focar no projeto apenas no domingo e na segunda. Para não atrasar ainda mais o inicio do projeto, usei scripts e configurações de lint de outro projeto fullstack que fiz a fim de agilizar e poder entregar 100% do que foi pedido. Em seguida, trabalhei todo o back-end pois acredito ser mais fácil de trabalhar o front-end sem fazer mocks, ou fazer os minimos possíveis. Com o back todo feito, fiz as páginas e a estrutura toda necessária do front, desde a configuração até as paginas, componentes e acesso à API, de forma a ser o mais performático que conheço num código mais limpo possível.

Tentei fazer toda a estrutura componentizada conforme os princípios SOLID para que a apliação pudesse ser escalável, o que me ajudou muito a corrigir detalhes como não poder adicionar um cadastro sem cpf ou receber os dados da tabela convenios mais facilmente. 

Queria ter feito testes para toda a aplicação em front e back end, porém com a falta de tempo decidi fazer os requisitos do projeto. Para ver um projeto feito com testes feito por mim, tem o projeto feito para um teste na Trybe no repositório: https://github.com/pmaiamateus/Ebyrt-project

### Tecnologias:

Para este projeto, foram utilizados NodeJS com javascript, typescrypt e react.

### Banco de dados:

O banco de dados foi conforme o pedido, com todas as colunas adequadas, porém quase todos os dados ainda em string. Pela falta de tempo, foi difícil encontrar soluções viáveis para esse problema.

### Próximos passos:

. Organizar melhor os dados no banco, mudando os tipos de string para o adequado

. Colocar CSS e estilização nas páginas

. Fazer testes para garantir a integridade do código

### Contatos:

https://www.linkedin.com/in/pmaiamateus/

https://github.com/pmaiamateus

email: pmaiamateus@gmail.com

telefone: (11) 954563519
