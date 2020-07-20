import React from 'react';

import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

import { Content } from './styles';

const Shell: React.FC = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Content>
        <Navbar />

        {children}
      </Content>
    </>
  );
};

export default Shell;
