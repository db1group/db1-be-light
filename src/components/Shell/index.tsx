import React from 'react';
import { useHistory } from 'react-router-dom';

import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

import { Content } from './styles';

const Shell: React.FC = ({ children }) => {
  const history = useHistory();

  return (
    <>
      <Sidebar />
      <Content>
        <Navbar />

        {children}
      </Content>
    </>
  );
}

export default Shell;
