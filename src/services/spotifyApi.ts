import { SpotifyWebApi } from "spotify-web-api-ts";
import { env } from "../env";

export const spotifyApi = new SpotifyWebApi({
  clientId: env.spotify.clientId,
  redirectUri: env.spotify.redirectUri,
});
