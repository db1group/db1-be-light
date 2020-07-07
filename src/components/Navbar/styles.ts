import styled from 'styled-components';

import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

export const NavbarButton = withStyles({
  root: {
    textTransform: 'none',
    fontSize: 30,
    marginRight: 20
  },
})(Button);

export const Nav = styled.nav`
  position: fixed;
  background: #F7F9FB;
  width: 100%;
`;
