import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Tab, Tabs, Paper } from '@material-ui/core';

export const Header = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, #282b2c, #006d99, #282b2c);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const LogoDb1 = styled.img`
  position: absolute;
  padding-top: 30px;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

export const StyledTab = withStyles({
  root: {
    height: '60px',
  },
})(Tab);

export const StyledTabs = withStyles({
  root: {
    borderRadius: '4px',
  },
})(Tabs);

export const StyledPaper = withStyles({
  root: {
    borderRadius: '4px',
  },
})(Paper);

export const ContainerBox = withStyles({
  root: {
    background: '#FFFFFF',
    position: 'absolute',
    left: 0,
    margin: '100px 50px 0 50px;',
    borderRadius: '4px',
  },
})(Grid);
