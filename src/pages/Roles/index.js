import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchRounded from '@material-ui/icons/SearchRounded';

import roles from './roles.json';
import ResponsibilityCard from '../../components/ResponsibilityCard';

const mobile = window.matchMedia('(max-width: 600px)').matches;

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

const InputFilter = withStyles({
  root: {
    width: mobile ? '100%' : '35%',
  },
})(TextField);

export default function Roles() {
  const [expanded, setExpanded] = React.useState('');
  const [name, setName] = React.useState('');
  const [roleList, setRoleList] = React.useState(roles);

  const handleFilter = (event) => {
    const description = (event.target.value || '').toUpperCase();
    setName(event.target.value);
    const filteredRoles = roles.filter((role) => {
      return role.role.toUpperCase().includes(description);
    });

    setRoleList(filteredRoles);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <InputFilter
        color="secondary"
        id="standard-name"
        label="Filtrar papéis"
        value={name}
        onChange={handleFilter}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchRounded />
            </InputAdornment>
          ),
        }}
      />
      {roleList.map((role) => (
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
