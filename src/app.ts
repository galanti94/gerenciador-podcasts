import * as http from 'http';

import {
    getListEpisodes,
    getFilterEpisodes
} from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { Method } from './utils/http-methods';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const [baseUrl, _] = request.url?.split('?') ?? ["", ""];

    if (request.method === Method.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if (request.method === Method.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
}