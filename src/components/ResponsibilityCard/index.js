import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const mobile = window.matchMedia('(max-width: 600px)').matches;

const styles = {
  card: {
    width: mobile ? '100%' : 275,
    height: mobile ? 'auto' : 140,
    display: 'inline-block',
    overflow: 'auto',
    margin: '15px 15px 0 0 ',
  },
};

function ResponsibilityCard(props) {
  const { classes, description } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="p">{description}</Typography>
      </CardContent>
    </Card>
  );
}

ResponsibilityCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResponsibilityCard);
