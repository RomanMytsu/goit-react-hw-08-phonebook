import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../../redux/auth/auth-selectors';

const NavbarUser = () => {
  const { name } = useSelector(selectAuthUser);
  return (
    <div>
      {name}
      <button>LogOut</button>
    </div>
  );
};

export default NavbarUser;
