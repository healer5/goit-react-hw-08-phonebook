import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { UserMenuStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyled>
      <p>
        Welcome, <span>{user.name}</span>
      </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuStyled>
  );
};