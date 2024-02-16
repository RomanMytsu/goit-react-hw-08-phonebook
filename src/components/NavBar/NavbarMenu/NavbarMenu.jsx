import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectAuthIsLogin } from '../../../redux/auth/auth-selectors';
import { menuItems } from './menuItems';

const NavMenu = () => {
  const isLogin = useSelector(selectAuthIsLogin);

  const filteredMenuItems = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;

  const elements = filteredMenuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to}>{text}</NavLink>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default NavMenu;
