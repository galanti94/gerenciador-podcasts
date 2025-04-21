import { IncomingMessage } from "http";

import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/http-status-code";

export const serviceFilterEpisodes = async (request: IncomingMessage): Promise<FilterPodcastModel> => {
    let responseFormat: FilterPodcastModel = {
        statusCode: StatusCode.NO_CONTENT,
        body: []
    };

    const [_, podcastName] = request.url?.split('?p=') ?? ["", ""];
    const data = await repositoryPodcast(podcastName);

    if (data.length) {
        responseFormat.statusCode = StatusCode.OK;
        responseFormat.body = data;
    }

    return responseFormat;
};