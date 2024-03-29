const { VITE_SPOTIFY_CLIENT_ID, VITE_SPOTIFY_REDIRECT_URI } = import.meta.env;

if (typeof VITE_SPOTIFY_CLIENT_ID !== "string") {
  throw new Error("Missing env variable: VITE_SPOTIFY_CLIENT_ID");
}

if (typeof VITE_SPOTIFY_REDIRECT_URI !== "string") {
  throw new Error("Missing env variable: VITE_SPOTIFY_REDIRECT_URI");
}

export const env = {
  spotify: {
    clientId: VITE_SPOTIFY_CLIENT_ID,
    redirectUri: VITE_SPOTIFY_REDIRECT_URI,
  },
};
