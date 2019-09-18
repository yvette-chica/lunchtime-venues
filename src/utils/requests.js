import axios from 'axios';
import { clientId, clientSecret } from './apiKeys';

const baseUrl = 'https://api.foursquare.com/v2/venues';

export function getVenues(address) {
    return axios.get(`${baseUrl}/explore`, {
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

export function getVenueLinks(venueId) {
    return axios.get(`${baseUrl}/${venueId}/links`);
}
