import { Track } from 'spotify-web-api-ts/types/types/SpotifyObjects';
import { spotifyApi } from './spotifyApi';

export const getAllSavedTracks = async () => {
  const tracks: Track[] = [];

  const initialPage = await spotifyApi.library.getSavedTracks({ limit: 50 });

  initialPage.items.forEach((item) => tracks.push(item.track));

  if (!initialPage.next) {
    return tracks;
  }

  /**
   * Spotify responds with a maximum of 50 tracks per page.
   * Loop over the next pages until all tracks are retrieved.
   */
  let next = initialPage.next;
  let complete = false;

  while (!complete) {
    const nextUrl = new URL(next);
    const nextSearchParams = new URLSearchParams(nextUrl.search);
    const offset = Number(nextSearchParams.get('offset'));
    const limit = Number(nextSearchParams.get('limit'));

    const nextPage = await spotifyApi.library.getSavedTracks({ offset, limit });

    nextPage.items.forEach((item) => tracks.push(item.track));

    if (nextPage.next) {
      next = nextPage.next;
    } else {
      complete = true;
    }
  }

  return tracks;
};
