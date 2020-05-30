import React from 'react';
import {
  withStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Grid, Card, Typography } from '@material-ui/core';

import Header from './components/Header';
import logo from './assets/logo.png';
import light from './assets/light_v2.png';

const mobile = window.matchMedia('(max-width: 600px)').matches;

const styles = () => ({
  root: {
    padding: mobile ? '130px 0' : '130px 50px',
    zIndex: 999,
    position: 'absolute',
  },
  title: {
    textAlign: 'center',
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
    padding: 25,
  },
  logoDb1: {
    margin: '0 auto',
    paddingTop: 30,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#006D99',
    },
    secondary: {
      main: '#00335E',
    },
  },
});

const App = ({ classes }) => (
  <ThemeProvider theme={theme}>
    <Header>
      <Typography className={classes.title} variant="h4" component="h3">
        <img
          src={light}
          alt="Logo BD1 Be Light"
          width="200"
          className={classes.lightLogo}
        />{' '}
      </Typography>
    </Header>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Grid container />
        </Card>
      </Grid>
      <img src={logo} alt="Logo DB1" width="150" className={classes.logoDb1} />
    </Grid>
  </ThemeProvider>
);

export default withStyles(styles)(App);
