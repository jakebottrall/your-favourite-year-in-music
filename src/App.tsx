import { Route, Routes } from 'react-router-dom';
import { Callback } from './routes/Callback';
import { Home } from './routes/Home';
import { Login } from './routes/Login';

export const App = () => {
  return (
    <div className='h-screen w-screen bg-black text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/callback' element={<Callback />} />
      </Routes>
    </div>
  );
};
