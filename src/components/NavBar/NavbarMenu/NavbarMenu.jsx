import { useSelector } from 'react-redux';

import { selectAuthIsLogin } from '../../../redux/auth/auth-selectors';
import { menuItems } from './menuItems';
import { MenuLink, MenuList } from './navbar-menu.styled';

const NavMenu = () => {
  const isLogin = useSelector(selectAuthIsLogin);

  const filteredMenuItems = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;

  const elements = filteredMenuItems.map(({ id, to, text }) => (
    <li key={id}>
      <MenuLink to={to}>{text}</MenuLink>
    </li>
  ));

  return <MenuList>{elements}</MenuList>;
};

export default NavMenu;
