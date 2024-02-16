import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { register } from '../redux/auth/auth-operations';
import {
  selectAuthLoading,
  selectAuthError,
  selectAuthIsLogin,
} from '../redux/auth/auth-selectors';
import { Loader } from 'components/Loader/Loader';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const isLogin = useSelector(selectAuthIsLogin);
  const dispatch = useDispatch();

  const handleSignUp = data => {
    dispatch(register(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <main>
      <h1>Please Sing Up</h1>
      {authLoading && <Loader />}
      <RegisterForm onSubmit={handleSignUp} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </main>
  );
};

export default RegisterPage;
