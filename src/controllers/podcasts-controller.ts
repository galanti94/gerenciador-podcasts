import { IncomingMessage, ServerResponse } from 'http'

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(
        JSON.stringify({
            podcastName: "flow",
            episode: "CBUM - Flow #319",
            cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q",
            url: "https://www.youtube.com/watch?v=pQSuQmUfS30",
            categories: ["saúde", "bodybuilder"]
        })
    );
};