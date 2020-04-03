import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Grid, Typography, Divider } from '@material-ui/core';
import roles from './roles.json';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
    marginBottom: '20px',
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexDirection: 'column',
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {roles.map((role) => (
        <ExpansionPanel
          key={role.id}
          square
          expanded={expanded === `panel_${role.id}`}
          onChange={handleChange(`panel_${role.id}`)}
        >
          <ExpansionPanelSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>{role.role}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="h6" component="h2">
              Responsabilidades:
            </Typography>

            <Divider />

            {role.responsibilities.map((resp) => (
              <Grid>
                <Typography variant="h6" component="h3">
                  {resp.groupName}
                </Typography>

                <ul>
                  {resp.descriptions.map((desc, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </Grid>
            ))}

            <Typography variant="h6" component="h2">
              Não Responsabilidades:
            </Typography>

            <Divider />

            <ul>
              {role.notResponsibilities.map((desc, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </>
  );
}
