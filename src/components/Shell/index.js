import React, { useState, useEffect } from 'react';
import { CardContent } from '@material-ui/core';

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
  const [value, setValue] = useState(0);
  const [route, setRoute] = useState('/');
  const routes = ['/roles'];

  useEffect(() => {
    if (activeRoute) {
      setValue(+activeRoute);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setRoute(routes[newValue]);

    // window.location.assign(route);
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
            <StyledTab color="secondary" label="Meus Dados" />
            <StyledTab color="secondary" label="Papéis e Responsabilidades" />
          </StyledTabs>
        </StyledPaper>

        <CardContent>{children}</CardContent>
        <LogoDb1 src={logoDB1Img} alt="Logo DB1" width="150" />
      </ContainerBox>
    </>
  );
};

export default Shell;
