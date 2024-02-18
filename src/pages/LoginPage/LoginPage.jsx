import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../redux/auth/auth-operations';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';
import { Loader } from 'components/Loader/Loader';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <>
      {authLoading && <Loader />}
      <LoginForm onSubmit={handleLogin} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </>
  );
};

export default LoginPage;
