import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

import { AppBar, Toolbar, Box } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from './AppBar.styled';
import SearchIcon from '@mui/icons-material/Search';

export const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar>
      <Toolbar>
        <Navigation />
        {isLoggedIn && (
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Find contacts by name"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        )}

        <Box sx={{ ml: 'auto' }}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
      </Toolbar>
    </AppBar>
  );
};
