import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 12px;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  background-color: #1976d2;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: white;
    color: #1565c0;
  }
  &.active {
    background-color: white;
    color: #1565c0;
  }
`;
