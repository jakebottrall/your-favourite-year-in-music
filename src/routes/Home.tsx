import { CalendarDatum } from '@nivo/calendar';
import { useEffect, useState } from 'react';
import { CalendarChart } from '../components/CalendarChart';
import { Loading } from '../components/Loading';
import { useRedirect } from '../hooks/useRedirect';
import { getAllSavedTracks } from '../services/getAllSavedTracks';
import { reduceTracksIntoDataset } from '../utils/reduceTracksIntoDataset';

export interface HomeProps {
  isAuthed?: boolean;
  onError: () => void;
}

export const Home = (props: HomeProps) => {
  const { isAuthed, onError } = props;

  const [favouriteYear, setFavouriteYear] = useState<string>('1994');
  const [favouriteYearCount, setFavouriteYearCount] = useState<number>(0);

  const [calendarData, setCalendarData] = useState<CalendarDatum[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useRedirect(!isAuthed, '/login');

  useEffect(() => {
    const getStats = async () => {
      try {
        const tracks = await getAllSavedTracks();
        const dataset = reduceTracksIntoDataset(tracks);

        setFavouriteYear(dataset[0].year);
        setFavouriteYearCount(dataset[0].count);

        const topThreeYears = dataset.slice(0, 3);

        const calendarDataset = topThreeYears
          .reduce((a, c) => [...a, ...c.data], [] as CalendarDatum[])
          .sort((a, b) => new Date(b.day).valueOf() - new Date(a.day).valueOf());

        setCalendarData(calendarDataset);
      } catch (error) {
        onError();
      } finally {
        setIsLoading(false);
      }
    };

    getStats();
  }, [onError]);

  if (isLoading) {
    return <Loading isLoading />;
  }

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='mb-10'>
        <h1 className='text-5xl font-light mb-1'>
          Your Favourite Year In Music was {favouriteYear}
        </h1>
        <p className='text-xl font-light mb-1 text-center'>
          You liked {favouriteYearCount} song{favouriteYearCount > 1 ? 's' : ''} in {favouriteYear}.
        </p>
      </div>
      <h2 className='text-3xl font-light mb-1'>Your Top 3 Years</h2>
      <CalendarChart data={calendarData} />
    </div>
  );
};
