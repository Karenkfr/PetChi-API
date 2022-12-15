# Projeto Final {reprograma} | Karen Ferraz Ribeiro
# PetChi - API de cadastro de cliente para uma estética animal


![Petchi](https://user-images.githubusercontent.com/101227284/207957374-29d52852-5f2c-4b53-8d8a-d5f6d6fb1893.png)

O projeto **PetChi API** desenvolvido por **Karen Ribeiro** é uma API que realiza um CRUD e armazena os dados no banco de dados MongoAtlas.

<br>

## **A {reprograma}** 

<br>



<p align="center">
    <img width="300" src="https://user-images.githubusercontent.com/109122922/207765814-7970ee64-9d4a-4353-9694-614f3f310b4d.jpg" alt="Logo Reprograma">
</p>

A **{reprograma}** é uma iniciativa de impacto social que foca em ensinar programação para mulheres cis e trans que não têm recursos e/ou oportunidades para aprender a programar.


<br>

## 💬 **Objetivo do projeto e problema encontrado**

Chirlei Ferraz é uma mulher empreendedora do ramo pet, que utiliza todos os seus controles de registros do seus negócios em papel e caneta. Para não perder mais nenhum registro e trazer tecnologia ao negócio, a PetChi API veio para resolver seus problemas! Assim fica mais fácil guardar informações de seus clientes, bem como agilizar sua agenda de trabalho.

A aplicação tem foco em registrar seus clientes ( e aqui é claro, os clientes são os pets! :dog: ) além de organizar os tipos de procedimentos estéticos (como banho e tosa), classificando pela espécie, porte e raça.

PetChi API trás a possibilidade de organização e registros, auxiliando a empreendedora e melhor gerenciar o seu negócio.


<br>

### ✔️ **Esse projeto para a Reprograma é capaz de:**

- C - Criar uma novo cliente;
- R - Listar todos os clientes registrados no banco de dados;
- U - Atualizar os dados dos clientes e seus procedimentos estéticos, além do preço do serviço prestado;
- D - Deletar um cliente ou procedimento;

<br>

### 🛣️ **Rotas e Retornos** 

<br>

| Método         | Rota           | Retorno                      | Status       |
| :---           |     :---       |     :---                     | :---         | 
**CLIENTES**
| GET     | /todos         | Lista todos os clientes      | 200 - OK      |
| GET     | /cliente/:id   | Filtra cliente por ID        | 200 - OK      |
| POST    | /login         | Faz a autenticação do Login  | 200 - OK      |
| POST    | /novo          | Adiciona um novo cliente     | 201 - CREATED |
| PATCH   | cliente/:id    | Atualiza os dados do cliente | 200 - OK      |
| DELETE  | /:id           | Deleta um cliente            | 200 - OK      |


<br>

### 📚 **Documentação da API**
[Swagger](https://petchi-api.onrender.com/minha-rota-de-documentacao/)
 
<br>

### 🏗️ **Outras funcionalidades ainda em desenvolvimento - que não constam nesse projeto no momento:**

A ideia é que a aplicação ganhasse novas funcionalidades como pagamentos via app e criação de perfil dos Pets.

<br>

No futuro, essa aplicação terá as seguintes abas:

- **Perfil dos Pets**
    - Criação de um perfil (junto ao FrontEnd) dos Pets com suas fotos e dados mais detalhados para auxiliar no tipo de serviço para cada cliente

<br>


- **Perfil dos donos**
    - O perfil dos pets poderá ser vinculado ao perfil dos donos, onde haverá dados de contato, endereço, tempo de serviço, entre outros dados importantes para a empresa

<br>


🎯 **Desafios:**

Nos dias de hoje, é muito comum que apareçam animais que foram abandonados, maltratados ou se perderam dos seus donos. Para isso, a plataforma irá conter acesso a um banco de dados onde há informações de locais que disponibilizam animais para adoção, facilitando que as pessoas possam ter acesso rápido a um novo pet em adoção através da recomendação da esteticista.

<br>

🚫 **Denuncias:**

Assim que notado algum tipo de maus tratos no animal, a esteticista terá contato direto com número do IBAMA através de seus e-mails e números de telefone.

<br>

## :clap: **Agradecimentos:**

<br>

Quero agradecer ao projeto {reprograma} que fez a minha vida mudar completamente! o nível de aprendizado que tive foi muito além do esperado, o programa conta com professoras que possuem uma bagagem de conhecimento imensa, o ambiente é acolhedor e toda equipe é muito prestativa e nos auxilia no que precisarmos :purple_heart:
<br>
Agradeço também as minhas colegas de classe que muito me ajudaram em todo o curso! eu nunca mais vou esquecer da corrente do bem que criamos na turma, onde uma não soltou a mão da outra, onde nos mantemos unidas o curso inteiro. Obrigada, gurias! :purple_heart: 
<br>
Deus. Ah sim, vai ter agradecimento a ele também! agradeço a Deus por ter virado minha vida de ponta cabeça para que eu pudesse me tornar uma desenvolvedora. Sou grata pela minha nova profissão, por amar meu trabalho e por ter me destinado uma carreira que é a minha cara :purple_heart:
<br>
O conhecimento e a bagagem que adquiri em 4 meses do curso foi fundamental para a criação desse projeto.
<br>
A {reprograma} tem como objetivo reprogramar o mundo e diminuir a desigualdade de gênero na tecnologia, pra mim, a reprograma foi capaz de reprogramar a minha vida.
<br>
Agradeço do fundo do meu ❤️ a todas as pessoas envolvidas na iniciativa,sempre acreditei que a união pudesse mudar o mundo e a reprograma me mostrou na prática como isso é capaz. 

<br>
<br>

<center height="200px">

![](https://media.tenor.com/gC2ceUvRQEMAAAAC/who-run-the-world-girls-beyonce.gif)

</center>
<br>


### Esse projeto está em constante atualização, sinta-se a vontade para voltar sempre que desejar!

Obrigada 💕👩🏻‍💻

<br>

<h2> The future
<br>
is female
<br>
<u>coders</u>.
</h2>
