import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';

const NavbarUser = () => {
  const { name } = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      Hello:{name}
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
};

export default NavbarUser;
