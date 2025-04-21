import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/http-status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
        statusCode: StatusCode.NO_CONTENT,
        body: []
    };

    const data = await repositoryPodcast();

    if (data.length) {
        responseFormat.statusCode = StatusCode.OK;
        responseFormat.body = data;
    }

    return responseFormat;
};