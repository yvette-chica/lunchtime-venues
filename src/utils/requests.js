import axios from 'axios';
import { clientId, clientSecret } from './apiKeys';

const baseUrl = 'https://api.foursquare.com/v2/venues/explore';

export function getVenues(address) {
    return axios.get(`${baseUrl}`, {
        params: {
            near: address,
            client_id: clientId,
            client_secret: clientSecret,
            query: 'lunch',
            v: 20190724,
            limit: 6,
        }
    });
}
