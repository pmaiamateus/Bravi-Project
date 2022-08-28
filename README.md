# Bem vindos ao Projeto de cadastro de contatos para a empresa Bravi

Este projeto foi desenvolvido e destinado para uma vaga de emprego na empresa Bravi para demonstrar conhecimentos de programação e desenvolvimento web.

A proposta é desenvolver uma aplicação que armazena e atualiza cadastros de contatos em uma agenda de forma rápida e dinâmica.

---

## Sobre este repositório

Este repositório é o projeto por inteiro, sendo que dentro dele existe a parte do desafio dos suportes balanceados, a parte de back-end e a parte de front-end, tratando tanto da parte cadastrar e atualizar o cadastro, verificando os dados antes de postá-los no banco, quanto a parte de front-end de forma interativa e rápida que possui um formulário para colocar os dados do contato e a comunicação adequada com o banco.

Obs.: Caso tenha algum problema com a comunicação com o banco de dados, o arquivo que trabalha os dados do banco é Bravi-Project/back-end/.env (entendo que é um problema usar um .env para um projeto desse tipo, porém como não houve um deploy da aplicação para colocar essas variáveis, esse é o método que vi no curso da Trybe para contornar essa situação).

Sendo assim, foram requisitos do projeto:

### . Requisitos técnicos:

1. Desafio dos suportes balanceados feito em Typescript
2. Front-end em React.
3. Back-end em NodeJS, com MySQL e sequelize (API REST).

### . Funcionalidades:

1. Cadastrar e deletar contatos.
2. Atualizar e editar contatos.
3. Cada cadastro é unico com a chave nome
5. Arquiteturas em camadas.

## Como Instalar:

### Pré-requisitos:

1. MySql2 configurado (sei usar MongoDB para banco de dados não sql, mas preferi usar o sequelize pois acho bem simples de usar)
2. NPM
3. gitHub
4. VSCode ou algum programa similar

### Instalação

1. abra um terminal na pasta que deseja clonar o repositório (pode ser feito usando o botão direito do mouse).
2. copie os comandos:

   . git clone https://github.com/pmaiamateus/Bravi-Project.git

   . cd Bravi-project/

   . npm install

3. Para testar o desafio dos suportes balanceados:

   . abra a pasta desafio1

   . rode o código do arquivo

   . para testar outros casos, basta mudar ou adicionar um novo stringToTest (lembrando que ao adicionar um novo, é necessário chamar a função no fim do arquivo com a nova constante)

4. Para iniciar e usar o back-end (API):

   . entre no terminal na pasta inicial do projeto (Bravi-project)
   
   . cd back-end

   . npm install
   
   . coloque os dados do seu banco de dados *usuário* e *senha* no arquivo .env da pasta back-end

   . npm run db:reset

   . npm start

A partir desse ponto, o banco de dados está ativo, para testá-lo sem o front-end é necessário uma extensao como o thunderClient ou um programa como o insomnia. Vale lembrar também que os dados para o banco de dados são mandados no body da requisição em formato JSON.

5. Para iniciar o front-end (páginas visuais do app)

   . entre no terminal na pasta incial do projeto (Bravi-project) (use cd .. caso esteja na pasta do back-end)

   . cd front-end

   . npm install

   . npm start

Lembrando que para que a comunicação com o servidor seja feita do site, é necessário que, em outra instância de terminal, o passo 4 de iniciar o back-end seja feito.

6. Para rodar os testes do desafio 1, coloque os comandos no terminal:

   . vá até a pasta inicial do projeto
   
   . cd desafio1/
   
   . npm install
   
   . npm run test
   
7. Para rodar os testes unitários do back-end, coloque os comandos no terminal:

   . vá até a pasta inicial do projeto
   
   . cd back-end/
   
   . npm install (apenas se ainda não usou esse comando ao avaliar ou usar o banco de dados, caso tenha usado não fará efeito nenhum)
   
   . npm run test

## Como utilizar:

A aplicação possui a rota '/contacts' para os cadastros no back-end, que funcionam da seguinte forma:
* `/` `POST` armazena um novo contato, a chave que difere contatos e deve ser única é a chave "nome";
* `/` `PUT` atualiza um contato, a chave que difere contatos para serem atualizados e deve ser informada é a chave "nome";
* `/` `GET` recebe todos os contatos do banco (usado na página inicial do app);
* `/` `DELETE` deleta um contato do banco de dados diferindo pela chave "nome" que deve ser informada

## Como foi desenvolvido:

Para começar, fiz o passo do desafio 1 em uma pasta específica para ele, usando typescript para desenvolvê-lo. Como explicado nas observações no inicio do arquivo, o typescript não tem boa interação com o terminal (pelo menos não aprendi bem como pegar dados do terminal no curso da Trybe, mas ficaria feliz de aprender caso alguém conheça). Para resolver o problema, usei os testes no código, colocando as constantes com as strings a serem testadas e chamando a função no fim do arquivo (tentei criar uma página web para melhor interação com o usuário, porém surgiram muitos bugs que no limite do tempo não consegui resolver, então deixei nesse formato, peço desculpas por esse incômodo). Também criei testes para esse desafio para mostrar algum conhecimento em testes.

Em seguida, trabalhei todo o back-end pois acredito ser mais fácil de trabalhar o front-end sem fazer mocks, ou fazer os minimos possíveis. Fiz todo o back-end de maneira REST respeitando todos os princípios SOLID, modulando e tornando cada arquivo com apenas uma responsabilidade e com o princípio Open-Closed, segregando ao máximo toda a interface, e usando o princípio de inversão de dependências quando possível. Usar esses métodos é sempre bom, pois ajuda muito a resolver bugs e encontrar possíveis problemas no código. No final do tempo de teste, fiz alguns testes unitários das funçoẽs de pegar todos os contatos do banco de dados e de criar um novo contato no banco de dados. Queria ter feito mais testes, porém não deu tempo.

Com o back-end todo feito, fiz as páginas e toda a estrutura necessária do front-end, desde a configuração até as paginas, componentes e acesso à API, de forma a ser o mais performático que conheço e num código mais limpo possível. O layout das páginas foi feito em forma de aplicativo de celular, uma vez que esse tipo de aplicação é mais comum para esses aparelhos.

Queria ter feito mais testes para toda a aplicação em front e back end, pois entendo bem a necessidade de testes para garantir a integridade do código, evitar bugs e manter um código limpo principalmente quando se usa o método TDD, porém com a falta de tempo decidi fazer os requisitos do projeto. Tenho alguns projetos da trybe feitos com boa cobertura de testes, como esse que fiz para um treinamento na Trybe e está público no meu repositório, caso queriam ver mais sobre mim nesse ponto. Link: https://github.com/pmaiamateus/Ebyrt-project

### Tecnologias:

Para este projeto, foram utilizados NodeJS com javascript, typescript e react.

### Banco de dados:

O banco de dados foi conforme o pedido no teste, porém deixei apenas os campos informados no texto pois adicionar mais campos ou não é meramente repetição de código, então deixar mais código e com a mesma complexidade não acho que agregaria muito ao projeto.

### Próximos passos:

. Melhorar CSS e estilização nas páginas

. Fazer mais testes para garantir a integridade do código

### Contatos:

https://www.linkedin.com/in/pmaiamateus/

https://github.com/pmaiamateus

email: pmaiamateus@gmail.com

telefone: (11) 954563519
