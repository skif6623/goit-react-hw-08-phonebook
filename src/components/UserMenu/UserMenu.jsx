import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box } from 'components/Box';
import { StyledIcon, StyledUserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center" gridGap={10}>
      <StyledUserName>Welcome {user.name}</StyledUserName>
      <StyledIcon size={32} onClick={() => dispatch(logOut())} />
    </Box>
  );
};
