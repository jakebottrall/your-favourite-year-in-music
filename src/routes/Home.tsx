import { type CalendarDatum } from '@nivo/calendar';
import { useEffect, useState } from 'react';
import { CalendarChart } from '../components/CalendarChart';
import { Loading } from '../components/Loading';
import { getAllSavedTracks } from '../services/getAllSavedTracks';
import { reduceTracksIntoDataset } from '../utils/reduceTracksIntoDataset';

export interface HomeProps {
  onError: () => void;
}

export const Home = (props: HomeProps) => {
  const { onError } = props;

  const [favouriteYear, setFavouriteYear] = useState('1994');
  const [favouriteYearCount, setFavouriteYearCount] = useState<number>(0);

  const [calendarData, setCalendarData] = useState<CalendarDatum[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getStats = async () => {
      try {
        const tracks = await getAllSavedTracks();
        const dataset = reduceTracksIntoDataset(tracks);

        setFavouriteYear(dataset[0]?.year ?? '1994');
        setFavouriteYearCount(dataset[0]?.count ?? 0);

        const topYear = dataset.slice(0, 1);

        const calendarDataset = topYear
          .reduce((a, c) => [...a, ...c.data], [] as CalendarDatum[])
          .sort((a, b) => new Date(b.day).valueOf() - new Date(a.day).valueOf());

        setCalendarData(calendarDataset);
      } catch (error) {
        onError();
      } finally {
        setIsLoading(false);
      }
    };

    void getStats();
  }, [onError]);

  if (isLoading) {
    return <Loading isLoading />;
  }

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='mb-10'>
        <h1 className='my-5 text-center text-5xl font-light'>
          Your Favourite Year In Music was {favouriteYear}
        </h1>
        <p className='mb-1 text-center text-xl font-light'>
          You liked {favouriteYearCount} song{favouriteYearCount > 1 ? 's' : ''} released in{' '}
          {favouriteYear}.
        </p>
      </div>
      <CalendarChart data={calendarData} />
    </div>
  );
};
