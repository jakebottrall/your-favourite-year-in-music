import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Callback } from './routes/Callback';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { spotifyApi } from './services/spotifyApi';

const accessToken = localStorage.getItem('access_token');

if (accessToken) {
  spotifyApi.setAccessToken(accessToken);
}

export const App = () => {
  const [isAuthed, setIsAuthed] = useState(!!accessToken);

  const handleError = () => {
    localStorage.clear();
    setIsAuthed(false);
  };

  return (
    <div className='h-screen w-screen bg-black text-white'>
      <Routes>
        <Route path='/' element={<Home isAuthed={isAuthed} onError={handleError} />} />
        <Route path='/login' element={<Login isAuthed={isAuthed} />} />
        <Route path='/callback' element={<Callback onAuth={() => setIsAuthed(true)} />} />
      </Routes>
    </div>
  );
};
