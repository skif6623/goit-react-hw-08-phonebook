import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';

import { AppBar, Toolbar, Box } from '@mui/material';

export const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar>
      <Toolbar>
        <Navigation />
        {isLoggedIn && <ContactsFilter />}
        <Box sx={{ ml: 'auto' }}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
      </Toolbar>
    </AppBar>
  );
};
