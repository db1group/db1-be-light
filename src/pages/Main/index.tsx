import React from 'react';

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

import { Content, Box } from './styles';

const Main: React.FC = ({ children }) => {
  return (
    <Content>
      <p>Papel: Desenvolvedor(a)</p>
      <br></br>
      <p>Responsabilidades:</p>
      <br></br>
      <div>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>
      <br></br>
      <p>Não responsabilidades:</p>
      <br></br>
      <div>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>
    </Content>
  );
}

export default Main;
