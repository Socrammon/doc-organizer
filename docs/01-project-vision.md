# Visão do projeto

## Nome do projeto
doc-organizer

## Problema / motivação
Programadores em início de carreira (e em projetos pessoais em geral) raramente documentam seus projetos de forma estruturada. Quando documentam, usam ferramentas genéricas (Trello, Google Docs, Notion) que não foram feitas para o ciclo de vida de um projeto de software - concepção, requisitos, arquitetura, backlog — e que ficam **separadas do código**, desatualizando rápido e se perdendo. O principal ponto desse projeto não só é facilitar na documentação, mas ajudar no desenvolvimento de projetos e ser educacional para iniciantes que não sabem como funciona todo o processo correto/profissional de criar um projeto.

Esse projeto nasceu de uma necessidade real minha: a falta de uma ferramenta que guie o processo de documentação de um projeto de programação, do início ao fim, vivendo junto com o código.

## Objetivo do projeto
Criar uma ferramenta local, que roda dentro de qualquer repositório, capaz de guiar o desenvolvedor pelas etapas de documentação de um projeto de software (concepção, escopo, requisitos, metodologia, arquitetura, backlog), funcionando tanto como ferramenta de organização quanto como recurso educacional pra quem ainda não sabe como documentar profissionalmente.

## Público-alvo
- Desenvolvedores em início de carreira que precisam organizar projetos pessoais ou de portfólio.
- Estudantes de cursos técnicos e superiores de programação.
- Qualquer desenvolvedor que queira documentação leve, acoplada ao código, sem depender de ferramentas SaaS externas.

## Proposta de solução (resumo)
Um programa (CLI + servidor local) que:
1. Cria e organiza uma estrutura de pastas `/docs` dentro do repositório do projeto.
2. Guia o usuário por templates de documentos (visão, escopo, requisitos, etc.), salvando o conteúdo como arquivos `.md`/`.yaml`.
3. Sobe uma interface local no navegador, exibindo um dashboard com o progresso da documentação e do projeto.

## Diferenciais (por que não é só "outro Trello")
- **Vive dentro do repositório** — documentação versionada junto com o código, não em outro serviço.
- **Guia o processo**, não só renderiza Markdown pronto (diferente de ferramentas como MkDocs/Docusaurus).
- **Específico para o ciclo de vida de projetos de software** — não é um gerenciador de tarefas genérico.

## Fora de escopo (nesta primeira versão)
- Múltiplos modelos ágeis selecionáveis (Scrum, Kanban, etc.) — fica para uma versão futura.
- Colaboração multiusuário em tempo real.
- Integração direta com GitHub/GitLab (issues, PRs).
- Geração de site de documentação publicável (estilo Docusaurus).
- Avisos via notificação para celular para tarefas com data prevista.
- Criação automatizada de prompt sobre o projeto para facilitar possível uso de IA.
- Sistema de Diagramas.

## Stack tecnológica inicial
- Node.js + Express (servidor local)
- HTML/CSS/JS puro na interface (sem framework de front nesta fase)
- Arquivos `.md` e `.yaml` como armazenamento de dados (sem banco de dados)
