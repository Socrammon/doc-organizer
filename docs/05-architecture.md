# Architecture - doc-organizer

## Objetivo
Definir a estrutura técnica e o funcionamento interno do doc-organizer, incluindo frontend, backend e manipulação dos arquivos de documentação.

---

# 1. Visão geral do sistema

O doc-organizer é uma aplicação web local composta por:

- Backend (Node.js + Express)
- Frontend (HTML, CSS, JavaScript puro)
- Sistema de arquivos (Markdown e YAML)

O sistema roda localmente dentro de um repositório de projeto e gerencia a documentação dentro da pasta `/docs`.

---

# 2. Arquitetura geral

O sistema segue uma arquitetura simples em três camadas:

## 2.1 Frontend
Responsável pela interface do usuário.

Funções:
- exibir dashboard
- listar documentos
- abrir editor
- enviar requisições para o backend

---

## 2.2 Backend (API local)
Responsável pela lógica do sistema.

Funções:
- criar estrutura `/docs`
- ler arquivos Markdown
- salvar alterações nos arquivos
- calcular progresso da documentação
- fornecer dados para o frontend

---

## 2.3 Sistema de arquivos
Camada de persistência simples.

- arquivos `.md` armazenam a documentação
- não há banco de dados
- o filesystem é a fonte de verdade

---

# 3. Fluxo de dados

1. Usuário acessa a interface web
2. Frontend faz requisição ao backend
3. Backend lê/escreve arquivos na pasta `/docs`
4. Backend retorna dados estruturados ao frontend
5. Interface atualiza a visualização

---

# 4. Estrutura de pastas (futura)
doc-organizer/
├── docs/
│ ├── 01-project-vision.md
│ ├── 02-scope-mvp.md
│ ├── 03-requirements.md
│ ├── 04-methodology.md
│ ├── 05-architecture.md
│ └── 05-backlog.md
│
├── server/
│ ├── index.js
│ ├── routes/
│ ├── services/
│ └── utils/
│
├── public/
│ ├── index.html
│ ├── style.css
│ └── app.js
│
├── package.json
└── README.md

---

# 5. Responsabilidades principais

## Backend
- gerenciar arquivos Markdown
- expor API local
- calcular status dos documentos

## Frontend
- consumir API
- renderizar documentos
- permitir edição

## Sistema de arquivos
- armazenar tudo em `.md`
- servir como banco de dados simples

---

# 6. Decisões arquiteturais

- Não será utilizado banco de dados no MVP
- O sistema será local (localhost)
- A persistência será feita via arquivos Markdown
- A arquitetura será simples e modular para facilitar evolução futura

---

# 7. Evolução futura

Possíveis melhorias futuras:
- suporte a múltiplos projetos
- modo LAN (multiusuário)
- versionamento de documentos
- banco de dados opcional para escala