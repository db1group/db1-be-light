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

const styles = () => ({
  root: {
    padding: '130px 50px',
    zIndex: 999,
    position: 'absolute',
  },
  title: {
    color: '#fefefe',
    padding: '50px',
  },
  titleSpan: {
    position: 'absolute',
    top: '65px',
    left: '260px',
    fontSize: '1.6rem',
  },
  card: {
    display: 'flex',
    minHeight: 'calc(100vh - 100px)',
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
        <img src={logo} alt="Logo DB1" width="200" /> <span className={classes.titleSpan}>#BeLight</span>
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
    </Grid>
  </ThemeProvider>
);

export default withStyles(styles)(App);
