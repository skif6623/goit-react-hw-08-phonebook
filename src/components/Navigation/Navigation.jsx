import { useAuth } from 'hooks';
import { StyledNav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {!isLoggedIn ? (
        <StyledNav to="/">PhoneBook</StyledNav>
      ) : (
        <StyledNav to="/contacts">Contacts</StyledNav>
      )}
    </nav>
  );
};
