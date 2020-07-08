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
  background: #f7f9fb;
  width: 100%;
  height: 85px;
  top: 0;
  opacity: 1;
  z-index: 999;
  padding: 15px 10px;
`;
