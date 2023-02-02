import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
  display: inline-block;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  width: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[2]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.white};
  border-radius: ${p => p.theme.radii.sm};
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
  &.active {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.secondary};
  }
`;