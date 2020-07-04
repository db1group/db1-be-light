import React, { useState, useEffect } from 'react';
import { CardContent } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import {
  Header,
  ContainerBox,
  LogoDb1,
  StyledTab,
  StyledTabs,
  StyledPaper,
} from './styles';
import lightImg from '../../assets/light_v2.png';
import logoDB1Img from '../../assets/logo.png';

const Shell = ({ children, activeRoute }) => {
  const history = useHistory();
  const [value, setValue] = useState('main');

  useEffect(() => {
    if (activeRoute) {
      setValue(activeRoute);
    }
  }, [activeRoute]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/db1-be-light/${newValue}`);
  };

  return (
    <>
      <Header>
        <img src={lightImg} alt="Logo BD1 Be Light" width="200" />{' '}
      </Header>
      <ContainerBox item xs={12}>
        <StyledPaper square>
          <StyledTabs
            color="secondary"
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
          >
            <StyledTab value="main" color="secondary" label="Meus Dados" />
            <StyledTab
              value="roles"
              color="secondary"
              label="Papéis e Responsabilidades"
            />
          </StyledTabs>
        </StyledPaper>

        <CardContent>{children}</CardContent>
        <LogoDb1 src={logoDB1Img} alt="Logo DB1" width="120" />
      </ContainerBox>
    </>
  );
};

export default Shell;
