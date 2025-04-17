# Podcast Menager

### Descrição
Um app estilo Netflix para centralizar episódios de podcastas com filtro de categoria

### Domínio
Podcasts em vídeos

### Feature
- Listar episódios de podcasts em categorias
    - [saúde, fitness, mentalidade, humor]
- Filtrar por nome de podcasts

## Como

#### Feature:
Listar episódios de podcasts em categorias

### Como vou implementar:
GET: retorna lista de episódios

Response:
```js
[
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q",
        url: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saúde", "bodybuilder"]
    },
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q",
        url: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saúde", "bodybuilder"]
    },
]
```