import { IncomingMessage, ServerResponse } from 'http'

import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/http-status-code';
import { ContentType } from '../utils/content-type';
import { FilterPodcastModel } from '../models/filter-podcast-model';

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content = await serviceListEpisodes();
    response.writeHead(StatusCode.OK, {'Content-Type': ContentType.JSON});
    response.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content: FilterPodcastModel = await serviceFilterEpisodes(request);

    response.writeHead(content.statusCode, {'Content-Type': ContentType.JSON});
    response.end(JSON.stringify(content.body));
}