# Escopo / MVP - doc-organizer

## Objetivo
O MVP do doc-organizer é uma aplicação web local que permite criar, visualizar e editar arquivos de documentação de projetos de software dentro da pasta `/docs`, além de exibir o progresso baseado nesses arquivos.

---

## Funcionalidades do MVP

### 1. Inicialização do projeto
- Criar a pasta `/docs`
- Gerar arquivos padrão de documentação:
  - 01-project-vision.md
  - 02-scope-mvp.md
  - 03-requirements.md
  - 04-architecture.md
  - 05-backlog.md

---

### 2. Interface web (dashboard)
- Mostrar lista de documentos existentes
- Mostrar status de cada documento:
  - vazio: arquivo sem conteúdo
  - em andamento: conteúdo parcial
  - completo: conteúdo preenchido

---

### 3. Editor de documentos
- Abrir documentos no navegador
- Editar conteúdo em uma área de texto simples
- Salvar alterações diretamente no arquivo `.md`

---

### 4. Progresso da documentação
- Mostrar progresso geral dos documentos com base nos arquivos existentes na pasta `/docs`

---

## Fora do escopo (MVP)
- login ou autenticação
- banco de dados
- colaboração em tempo real
- IA ou geração automática de conteúdo
- integração com GitHub/GitLab
- diagramas automáticos
- múltiplos projetos
- Progresso do projeto completo (não será implementado no MVP, apenas o progresso da documentação)

---

## Fluxo do usuário
1. usuário abre o sistema local no navegador
2. acessa o dashboard
3. inicializa o projeto (cria `/docs`)
4. abre um documento
5. edita o conteúdo
6. salva o arquivo
7. vê o progresso atualizado
