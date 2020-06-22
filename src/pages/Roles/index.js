import React from 'react';
import { Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchRounded from '@material-ui/icons/SearchRounded';

import roles from './roles.json';
import Shell from '../../components/Shell';
import ResponsibilityCard from '../../components/ResponsibilityCard';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Lane,
  InputFilter,
  Title,
} from './styles';

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
    <Shell activeRoute="roles">
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
                <Title variant="h6" component="h2">
                  {resp.groupName}
                </Title>

                {resp.descriptions.map((desc) => (
                  <ResponsibilityCard key={Math.random()} description={desc} />
                ))}
              </Lane>
            ))}

            {role.notResponsibilities.length && (
              <Lane>
                <Title variant="h6" component="h2">
                  Responsabilidades de outros papéis:
                </Title>
                {role.notResponsibilities.map((desc) => (
                  <ResponsibilityCard key={Math.random()} description={desc} />
                ))}
              </Lane>
            )}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Shell>
  );
}
