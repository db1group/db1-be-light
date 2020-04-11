import React from 'react';
import {
  withStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Grid, Card, Typography } from '@material-ui/core';

import Header from './components/Header';
import Container from './components/Container';
import logo from './assets/logo.png';
import light from './assets/light.png';

const mobile = window.matchMedia('(max-width: 600px)').matches;

const styles = () => ({
  root: {
    padding: mobile ? '130px 0' : '130px 50px',
    zIndex: 999,
    position: 'absolute',
  },
  title: {
    color: '#fefefe',
    padding: mobile ? '50px 15px' : '50px',
  },
  titleSpan: {
    fontSize: '2.3rem',
    fontWeight: 100,
  },
  card: {
    display: 'flex',
    minHeight: 'calc(100vh - 100px)',
  },
  lightLogo: {
    position: 'absolute',
    top: '16px',
    transform: 'rotate(19deg)',
  },
  logoDb1: {
    margin: '0 auto',
    paddingTop: 30,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0099B7',
    },
    secondary: {
      main: '#fff',
    },
  },
});

const App = ({ classes }) => (
  <ThemeProvider theme={theme}>
    <Header>
      <Typography className={classes.title} variant="h4" component="h3">
        <span className={classes.titleSpan}>#BeLight</span>
        <img
          src={light}
          alt="Logo BD1 Be Light"
          width="50"
          className={classes.lightLogo}
        />{' '}
      </Typography>
    </Header>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Grid container>
            <Container />
          </Grid>
        </Card>
      </Grid>
      <img src={logo} alt="Logo DB1" width="150" className={classes.logoDb1} />
    </Grid>
  </ThemeProvider>
);

export default withStyles(styles)(App);
