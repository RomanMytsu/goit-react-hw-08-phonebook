import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../redux/auth/auth-operations';
import {
  selectAuthLoading,
  selectAuthError,
  selectAuthIsLogin,
} from '../redux/auth/auth-selectors';
import { Loader } from 'components/Loader/Loader';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const isLogin = useSelector(selectAuthIsLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <h1>Log In</h1>
      {authLoading && <Loader />}
      <LoginForm onSubmit={handleLogin} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </>
  );
};

export default LoginPage;
