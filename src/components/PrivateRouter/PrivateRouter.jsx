import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import {
  selectAuthIsLogin,
  selectAuthToken,
} from '../../redux/auth/auth-selectors';
import { Loader } from 'components/Loader/Loader';

export const PrivateRouter = () => {
  const isLogin = useSelector(selectAuthIsLogin);
  const token = useSelector(selectAuthToken);

  if (!isLogin && token) {
    return <Loader />;
  }
  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
