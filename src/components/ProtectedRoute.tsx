import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthed: boolean;
}

export const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { isAuthed } = props;

  if (!isAuthed) {
    return <Navigate to='/login' />;
  }

  return <Outlet />;
};
