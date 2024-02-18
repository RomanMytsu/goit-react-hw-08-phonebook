
import { Block, Link } from './navbar-auth.styled';

const NavbarAuth = () => {
  return (
    <Block>
          <Link to="register">Register</Link> 
          |
      <Link to="login">Login</Link>
    </Block>
  );
};

export default NavbarAuth;
