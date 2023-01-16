import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { useRedirect } from '../hooks/useRedirect';
import { getAllSavedTracks } from '../services/getAllSavedTracks';

export interface HomeProps {
  isAuthed?: boolean;
  onError: () => void;
}

export const Home = (props: HomeProps) => {
  const { isAuthed, onError } = props;

  const [favouriteYear, setFavouriteYear] = useState<string>('1994');
  const [favouriteYearCount, setFavouriteYearCount] = useState<number>(0);

  const [isLoading, setIsLoading] = useState(true);

  useRedirect(!isAuthed, '/login');

  useEffect(() => {
    const getStats = async () => {
      try {
        const tracks = await getAllSavedTracks();

        const stats = tracks.reduce(
          (a, c) => {
            const year = c.album.release_date.split('-')[0];
            const count = (a.years.get(year) || 0) + 1;

            if (count > a.favouriteYearCount) {
              a.favouriteYear = year;
              a.favouriteYearCount = count;
            }

            a.years.set(year, count);

            return a;
          },
          { years: new Map<string, number>(), favouriteYear: '', favouriteYearCount: 0 },
        );

        setFavouriteYear(stats.favouriteYear);
        setFavouriteYearCount(stats.favouriteYearCount);
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
          You have liked {favouriteYearCount} song{favouriteYearCount > 1 ? 's' : ''} from this
          year.
        </p>
      </div>
    </div>
  );
};
