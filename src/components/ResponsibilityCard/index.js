import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 275,
    height: 140,
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
