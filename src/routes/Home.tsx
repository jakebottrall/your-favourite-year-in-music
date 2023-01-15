import { useRedirect } from '../hooks/useRedirect';

export interface HomeProps {
  isAuthed?: boolean;
}

export const Home = (props: HomeProps) => {
  const { isAuthed } = props;

  useRedirect(!isAuthed, '/login');

  return <div>Home</div>;
};
