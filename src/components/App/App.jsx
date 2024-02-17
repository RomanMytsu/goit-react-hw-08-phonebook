import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AppRoutes from './AppRoutes';
import { refreshUser } from '../../redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <AppRoutes />
    </div>
  );
};
