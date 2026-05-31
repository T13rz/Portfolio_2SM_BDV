# Portfólio 2º Semestre

Portfólio acadêmico com API REST em Node.js + Express integrada ao MySQL via Prisma ORM.

## Estrutura

```
Portfolio/
├── .env
├── index.html
├── package.json
├── css/
│   └── style.css
├── js/
│   ├── db.js
│   ├── server.js
│   └── script.js
├── prisma/
│   ├── schema.prisma
│   └── seed.js
└── img/
    ├── icone/perfil.jpg
    └── projetos/
```

## Requisitos

- Node.js 18 ou superior
- npm
- MySQL 8 ou superior

## Configuração inicial

1. Abra o arquivo `.env` e edite a connection string com seus dados do MySQL:

```
DATABASE_URL="mysql://root:suasenha@localhost:3306/portfolio"
```

2. Instale as dependências:

```bash
npm install
```

3. Crie as tabelas no banco via Prisma:

```bash
npm run migrate
```

4. Popule o banco com os dados iniciais:

```bash
npm run seed
```

## Como rodar

```bash
npm start
```

Acesse http://localhost:3000 no navegador.

Para desenvolvimento com reload automático:

```bash
npm run dev
```

Para abrir o Prisma Studio (interface visual do banco):

```bash
npm run studio
```

## Endpoints

| Método | Rota                    | O que faz                      |
|--------|-------------------------|--------------------------------|
| GET    | /P2S/apresentacao       | Retorna dados pessoais         |
| PUT    | /P2S/apresentacao       | Atualiza dados pessoais        |
| GET    | /P2S/formacao           | Lista formações                |
| POST   | /P2S/formacao           | Adiciona formação              |
| PUT    | /P2S/formacao/:id       | Edita formação por ID          |
| DELETE | /P2S/formacao/:id       | Remove formação por ID         |
| GET    | /P2S/cursos             | Lista cursos                   |
| POST   | /P2S/cursos             | Adiciona curso                 |
| PUT    | /P2S/cursos/:id         | Edita curso por ID             |
| DELETE | /P2S/cursos/:id         | Remove curso por ID            |
| GET    | /P2S/projetos           | Lista projetos                 |
| POST   | /P2S/projetos           | Adiciona projeto               |
| PUT    | /P2S/projetos/:id       | Edita projeto por ID           |
| DELETE | /P2S/projetos/:id       | Remove projeto por ID          |
| GET    | /P2S/experiencia        | Lista experiências             |
| POST   | /P2S/experiencia        | Adiciona experiência           |
| PUT    | /P2S/experiencia/:id    | Edita experiência por ID       |
| DELETE | /P2S/experiencia/:id    | Remove experiência por ID      |
| GET    | /P2S/competencias       | Retorna skills técnicas e soft |
| PUT    | /P2S/competencias       | Atualiza competências          |
| GET    | /P2S/links              | Lista links profissionais      |
| POST   | /P2S/links              | Adiciona link                  |
| PUT    | /P2S/links/:id          | Edita link por ID              |
| DELETE | /P2S/links/:id          | Remove link por ID             |

## Observações

Os dados ficam salvos no MySQL via Prisma. Reiniciar o servidor não apaga nada.

Para testar as rotas use Thunder Client, Postman ou Insomnia apontando para `http://localhost:3000`.

### GitHub Pages

Este projeto não é compatível com GitHub Pages pois o Pages não executa Node.js. Para rodar o projeto é necessário usar `npm start` localmente ou hospedar em uma plataforma como Railway ou Render.
