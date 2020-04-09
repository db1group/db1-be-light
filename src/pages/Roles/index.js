import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Grid, Typography } from '@material-ui/core';

import roles from './roles.json';
import ResponsibilityCard from '../../components/ResponsibilityCard';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
    margin: '20px 0',
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

const Lane = withStyles({
  root: {
    background: '#f1f1f1',
    borderRadius: '10px',
    padding: 15,
    marginTop: 20,
  },
})(Grid);

export default function Roles() {
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
            {role.responsibilities.map((resp) => (
              <Lane key={resp.id}>
                <Typography variant="h6" component="h2">
                  {resp.groupName}
                </Typography>

                {resp.descriptions.map((desc) => (
                  <ResponsibilityCard key={Math.random()} description={desc} />
                ))}
              </Lane>
            ))}

            {!role.notResponsibilities.length ? (
              ''
            ) : (
              <Lane>
                <Typography variant="h6" component="h2">
                  Não responsabilidades:
                </Typography>
                {role.notResponsibilities.map((desc) => (
                  <ResponsibilityCard key={Math.random()} description={desc} />
                ))}
              </Lane>
            )}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </>
  );
}
