import { SpotifyWebApi } from 'spotify-web-api-ts';
import { VITE_CLIENT_ID, VITE_REDIRECT_URI } from '../env';

export const spotifyApi = new SpotifyWebApi({
  clientId: VITE_CLIENT_ID,
  redirectUri: VITE_REDIRECT_URI,
});
