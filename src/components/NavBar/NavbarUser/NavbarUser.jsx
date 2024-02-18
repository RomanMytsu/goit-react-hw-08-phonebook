import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';
import { StyledBtn, Wrap } from './navbaruser.styled';

const NavbarUser = () => {
  const { name } = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Wrap>
      <p>Welcome, {name}</p>
      <StyledBtn onClick={handleLogout}>LogOut</StyledBtn>
    </Wrap>
  );
};

export default NavbarUser;
