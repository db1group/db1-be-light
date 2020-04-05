import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography } from '@material-ui/core';

import Header from './components/Header';
import Container from './components/Container';

const styles = () => ({
  root: {
    padding: '130px 50px',
    zIndex: 999,
    position: 'absolute',
  },
  title: {
    color: '#fff',
    padding: '50px',
  },
  card: {
    display: 'flex',
    minHeight: 'calc(100vh - 100px)',
  },
});

const App = ({ classes }) => (
  <div>
    <Header>
      <Typography className={classes.title} variant="h4" component="h3">
        #DB1 Be Light
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
  </div>
);

export default withStyles(styles)(App);
