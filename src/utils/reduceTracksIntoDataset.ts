import { type CalendarDatum } from "@nivo/calendar";
import dayjs from "dayjs";
import { type Track } from "spotify-web-api-ts/types/types/SpotifyObjects";

export function reduceTracksIntoDataset(tracks: Track[]) {
  const dataset = tracks
    .reduce(
      (a, c) => {
        const date = dayjs(c.album.release_date);

        const year = date.format("YYYY");
        const day = date.format("YYYY-MM-DD");
        const series = a.find((x) => x.year === year);

        if (!series) {
          a.push({ year, count: 1, data: [{ day, value: 1 }] });
          return a;
        }

        series.count += 1;

        const datapoint = series.data.find((x) => x.day === day);

        if (!datapoint) {
          series.data.push({ day, value: 1 });
          return a;
        }

        datapoint.value += 1;

        return a;
      },
      [] as { year: string; count: number; data: CalendarDatum[] }[],
    )
    .sort((a, b) => b.count - a.count);

  return dataset;
}
