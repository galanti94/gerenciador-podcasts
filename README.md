# 🎧 PodcastModel Menager

## Descrição

Um app no estilo Netflix para centralizar episódios de podcasts em vídeo, organizando-os por categorias como saúde, fitness, mentalidade e humor. A proposta é oferecer uma experiência rápida e intuitiva para encontrar o podcast ideal conforme o interesse do usuário.

## Domínio

🎙️ **Podcasts em vídeo**  
📺 Centralização e categorização de episódios

## Funcionalidades

- 🔍 Listagem de episódios de podcasts por categoria
- 🗂️ Filtro por nome de podcast
- 🎯 Categorias disponíveis: `saúde`, `fitness`, `mentalidade`, `humor`

## Endpoints

### `GET /episodes`
Retorna a lista de episódios disponíveis.

### `GET /episodes/filter?name=<nome>`
Retorna episódios filtrados pelo nome do podcast.

#### Exemplo de resposta:
```json
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
        "url": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "categories": ["saúde", "bodybuilder"]
    }
]
```

## Estrutura do Projeto

```
.
├── src
│   ├── app.ts                  # Entrada principal do servidor
│   ├── controllers
│   │   └── podcasts-controller.ts # Lógica de listagem e filtragem
│   ├── routes
│   │   └── routes.ts           # Definição das rotas da API
│   └── utils
│       └── http-methods.ts     # Enum de métodos HTTP
```

## Tecnologias Utilizadas

- TypeScript
- Node.js (sem frameworks externos)
- HTTP nativo

## Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/galanti94/gerenciador-podcasts.git

# Entre na pasta
cd gerenciador-podcasts

# Instale as dependências
npm install

# Inicie o servidor
npm run start:dev
```

## Autor

Guilherme Roncaratti Galanti  
[LinkedIn](https://www.linkedin.com/in/guilherme-galanti/) • [GitHub](https://github.com/galanti94)