import { AuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <AuthLink style={{ marginRight: '20px' }} to="/register">
        Register
      </AuthLink>
      <AuthLink to="/">Log In</AuthLink>
    </div>
  );
};
