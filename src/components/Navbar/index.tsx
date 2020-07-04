import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

import { NavbarButton } from './styles';
import { strict } from 'assert';

const useStyles = makeStyles(_ =>
  createStyles({
    margin: {
      color: '#7f817e',
    },
  }),
);

const Navbar: React.FC = () => {
  const classes = useStyles();
  const pathname = 'main';

  const handleRoute = (route: string) => {
  }

  return (
    <>
      <NavbarButton
        className={!pathname.includes('main') ? classes.margin : ''}
        onClick={() => handleRoute('/main')}
        >
        Meus dados
      </NavbarButton>

      <NavbarButton
        className={!pathname.includes('roles') ? classes.margin : ''}
        onClick={() => handleRoute('/roles')}
        >
        Papéis e responsabilidades
      </NavbarButton>
    </>
  );
};

export default Navbar;
