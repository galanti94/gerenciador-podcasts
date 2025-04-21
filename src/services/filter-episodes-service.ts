import { IncomingMessage } from "http";

import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/http-status-code";

export const serviceFilterEpisodes = async (request: IncomingMessage): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
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