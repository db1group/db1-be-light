import React, { ChangeEvent } from 'react';
import { Typography, InputProps, ValueLabelProps } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchRounded from '@material-ui/icons/SearchRounded';

import roles from './roles.json';
import Shell from '../../components/_Shell';
import ResponsibilityCard from '../../components/ResponsibilityCard';

import {
  Lane,
  InputFilter,
  Title,
} from './styles';

import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'

const Roles: React.FC = () => {
  const [expanded, setExpanded] = React.useState('');
  const [name, setName] = React.useState('');
  const [roleList, setRoleList] = React.useState(roles);

  const handleFilter = (value: string) => {

    const description = (value || '').toUpperCase();
    setName(value);
    const filteredRoles = roles.filter((role) => {
      return role.role.toUpperCase().includes(description);
    });

    setRoleList(filteredRoles);
  };

  const handleChange = (panel: string) => (event: ChangeEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : '');
  };

  return (
    <>
      <InputFilter
        color="secondary"
        id="standard-name"
        label="Filtrar papéis"
        value={name}
        onChange={(event) => {handleFilter(event.target.value)}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchRounded />
            </InputAdornment>
          ),
        }}
      />
      {roleList.map((role) => (
        <Accordion
          key={role.id}
          square
          expanded={expanded === `panel_${role.id}`}
          onChange={() => {handleChange(`panel_${role.id}`)}}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>{role.role}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            {role.responsibilities.map((resp) => (
              <Lane key={resp.id}>
                <Title variant="h6">
                  {resp.groupName}
                </Title>

                {/* {resp.descriptions.map((desc: string) => (
                  <ResponsibilityCard key={Math.random()} description={desc} />
                ))} */}
              </Lane>
            ))}

            {/* {role.notResponsibilities.length && (
              <Lane>
                <Title variant="h6" component="h2">
                  Responsabilidades de outros papéis:
                </Title>
                {role.notResponsibilities.map((desc) => (
                  <ResponsibilityCard key={Math.random()} description={desc} />
                ))}
              </Lane>
            )} */}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export default Roles;
