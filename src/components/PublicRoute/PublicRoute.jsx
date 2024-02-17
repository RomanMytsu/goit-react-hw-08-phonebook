import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import {
  selectAuthIsLogin,
  selectAuthToken,
} from '../../redux/auth/auth-selectors';
import { Loader } from 'components/Loader/Loader';

export const PublicRouter = () => {
  const isLogin = useSelector(selectAuthIsLogin);
  const token = useSelector(selectAuthToken);

  if (!isLogin && token) {
    return <Loader />;
  }
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};
