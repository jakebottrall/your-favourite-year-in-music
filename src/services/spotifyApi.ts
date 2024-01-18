import { SpotifyWebApi } from "spotify-web-api-ts";
import { env } from "../env";

export const spotifyApi = new SpotifyWebApi({
  clientId: env.VITE_CLIENT_ID,
  redirectUri: env.VITE_REDIRECT_URI,
});
