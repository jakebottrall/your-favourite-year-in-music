import { FaSpotify } from 'react-icons/fa';
import { useRedirect } from '../hooks/useRedirect';
import { spotifyApi } from '../services/spotifyApi';

const url = spotifyApi.getTemporaryAuthorizationUrl({
  show_dialog: true,
  scope: ['user-library-read'],
});

export interface LoginProps {
  isAuthed?: boolean;
}

export const Login = (props: LoginProps) => {
  const { isAuthed } = props;

  useRedirect(!!isAuthed, '/');

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='mb-10'>
        <h1 className='mb-1 text-center text-5xl font-light'>Your Favourite Year In Music</h1>
      </div>
      <a
        className='flex items-center justify-center border-2 border-white p-2 text-xl transition-all hover:border-green-400 hover:text-green-400'
        href={url}
      >
        Login with Spotify
        <FaSpotify className='pl-2' size={30} />
      </a>
    </div>
  );
};
