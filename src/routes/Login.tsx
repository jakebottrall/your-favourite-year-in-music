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
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='mb-10'>
        <h1 className='text-5xl font-light mb-1 text-center'>Your Favourite Year In Music</h1>
      </div>
      <a
        className='flex justify-center items-center border-2 border-white p-2 text-xl hover:text-green-400 hover:border-green-400 transition-all'
        href={url}
      >
        Login with Spotify
        <FaSpotify className='pl-2' size={30} />
      </a>
    </div>
  );
};
