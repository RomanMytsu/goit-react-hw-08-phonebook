import { useSelector } from 'react-redux';

import NavbarMenu from '../NavBar/NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { selectAuthIsLogin } from '../../redux/auth/auth-selectors';
import { Header } from './navbar.styled';

const NavBar = () => {
  const isLogin = useSelector(selectAuthIsLogin);
  return (
    <Header>
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </Header>
  );
};

export default NavBar;
