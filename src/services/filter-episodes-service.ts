import { IncomingMessage } from "http";

import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (request: IncomingMessage) => {
    const [_, podcastName] = request.url?.split('?p=') ?? ["", ""];
    const data = await repositoryPodcast(podcastName);
    return data;
};