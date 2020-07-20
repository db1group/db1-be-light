import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { NavbarButton, Nav } from './styles';

const useStyles = makeStyles((_) =>
  createStyles({
    active: {
      color: '#7f817e',
    },
  })
);

const Navbar: React.FC = () => {
  const classes = useStyles();
  const pathname = 'main';

  const handleRoute = (route: string) =>
    (window.location.href = `${process.env.PUBLIC_URL}/${route}`);

  return (
    <Nav>
      <NavbarButton
        className={!window.location.href.includes('main') ? classes.active : ''}
        onClick={() => handleRoute('main')}
      >
        Meus dados
      </NavbarButton>

      <NavbarButton
        className={
          !window.location.href.includes('roles') ? classes.active : ''
        }
        onClick={() => handleRoute('roles')}
      >
        Papéis e responsabilidades
      </NavbarButton>
    </Nav>
  );
};

export default Navbar;
