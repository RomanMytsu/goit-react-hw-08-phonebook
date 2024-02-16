import { useSelector } from 'react-redux';

import NavbarMenu from '../NavBar/NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { selectAuthIsLogin } from '../../redux/auth/auth-selectors';

const NavBar = () => {
  const isLogin = useSelector(selectAuthIsLogin);
  return (
    <div>
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </div>
  );
};

export default NavBar;
