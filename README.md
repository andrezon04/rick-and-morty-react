<div align="center">

# Rick and Morty

Personagens de uma API pública em uma interface React.

  <img alt="React 19" src="https://img.shields.io/badge/React%2019-1a1b27?style=flat-square" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-1a1b27?style=flat-square" />
  <img alt="Axios" src="https://img.shields.io/badge/Axios-1a1b27?style=flat-square" />
  <img alt="Vite 8" src="https://img.shields.io/badge/Vite%208-1a1b27?style=flat-square" />

**Projeto de estudo**

</div>

---

Interface web de estudo que consulta a API pública de Rick and Morty e apresenta os personagens em cartões.

## Funcionalidades implementadas

- Consulta à primeira página do endpoint de personagens.
- Exibição de imagem, nome, espécie, status e origem.
- Interface organizada em componentes React, com estilos em CSS.

## Tecnologias

React 19, JavaScript, Axios, CSS e Vite 8.

## Como executar

Pré-requisitos: Node.js compatível com o Vite 8 (20.19+ ou 22.12+) e npm.

```bash
git clone https://github.com/andrezon04/react-rickmorty-api.git
cd react-rickmorty-api
npm ci
npm run dev
```

Abra o endereço informado pelo Vite no terminal.

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Iniciar o servidor de desenvolvimento. |
| `npm run build` | Gerar a versão de produção em `dist/`. |
| `npm run preview` | Visualizar localmente a versão gerada. |
| `npm run lint` | Executar a análise estática configurada no projeto. |

## Organização

- `src/components/`: cartões, seções, cabeçalho, rodapé e links.
- `src/assets/`: imagens e ícones.
- `src/App.jsx`: composição da página.
- `src/index.css`: estilos globais.

## Estado do projeto

Projeto de estudo. A consulta atual exibe a primeira página da API; busca, filtros e paginação ainda não estão implementados. O tratamento de falhas de rede atualmente registra o erro no console.

Próximos passos: apresentar estados de carregamento e erro, adicionar paginação e ampliar a acessibilidade dos cartões.

## Fonte dos dados

[Rick and Morty API](https://rickandmortyapi.com/). Os personagens e as imagens pertencem aos respectivos titulares.
