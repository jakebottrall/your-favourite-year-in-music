import { SpotifyWebApi } from 'spotify-web-api-ts';

const { VITE_CLIENT_ID, VITE_REDIRECT_URI } = import.meta.env;

export const spotifyApi = new SpotifyWebApi({
  clientId: VITE_CLIENT_ID,
  redirectUri: VITE_REDIRECT_URI,
});
