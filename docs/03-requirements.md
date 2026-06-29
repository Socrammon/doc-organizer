# Requirements - doc-organizer

## Objetivo
Definir os requisitos funcionais e não funcionais do doc-organizer, descrevendo o que o sistema deve fazer e como ele deve se comportar.

---

# 1. Requisitos Funcionais

## RF01 - Inicialização do projeto
O sistema deve permitir a criação automática da estrutura base do projeto, incluindo a pasta `/docs` e arquivos padrão de documentação.

---

## RF02 - Criação de documentos padrão
O sistema deve gerar automaticamente os seguintes arquivos na pasta `/docs`:

- 01-project-vision.md
- 02-scope-mvp.md
- 03-requirements.md
- 04-methodology.md
- 05-architecture.md
- 06-backlog.md

---

## RF03 - Listagem de documentos
O sistema deve exibir no dashboard todos os arquivos de documentação disponíveis na pasta `/docs`.

---

## RF04 - Edição de documentos
O sistema deve permitir abrir arquivos `.md` no navegador e editar seu conteúdo.

---

## RF05 - Salvamento de documentos
O sistema deve permitir salvar as alterações feitas nos documentos diretamente no arquivo correspondente.

---

## RF06 - Status dos documentos
O sistema deve classificar os documentos com os seguintes estados:
- vazio
- em andamento
- completo

---

## RF07 - Progresso da documentação
O sistema deve exibir o progresso geral da documentação com base no estado dos arquivos da pasta `/docs`.

---

## RF08 - Manifesto do projeto (project.yaml)
O sistema deve criar e manter um arquivo `project.yaml` na pasta `/docs`, contendo metadados estruturados do projeto: nome, status, metodologia adotada, data de criação e stack tecnológica.

---

# 2. Requisitos Não Funcionais

## RNF01 - Execução local
O sistema deve rodar localmente sem necessidade de conexão com a internet.

---

## RNF02 - Performance
O sistema deve responder rapidamente às interações do usuário no dashboard e editor.

---

## RNF03 - Persistência de dados
As alterações feitas nos documentos devem ser salvas diretamente nos arquivos `.md`, sem uso de banco de dados. Os metadados estruturados do projeto devem ser salvos no arquivo `project.yaml`.

---

## RNF04 - Compatibilidade
O sistema deve funcionar em qualquer sistema operacional que suporte Node.js.

---

## RNF05 - Simplicidade de uso
O sistema deve ser simples de iniciar e utilizar, sem necessidade de configurações complexas.