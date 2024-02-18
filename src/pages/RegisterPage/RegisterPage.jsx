import { useDispatch, useSelector } from 'react-redux';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { register } from '../../redux/auth/auth-operations';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';
import { Loader } from 'components/Loader/Loader';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const dispatch = useDispatch();

  const handleSignUp = data => {
    dispatch(register(data));
  };

  return (
    <main>
      {authLoading && <Loader />}
      <RegisterForm onSubmit={handleSignUp} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </main>
  );
};

export default RegisterPage;
