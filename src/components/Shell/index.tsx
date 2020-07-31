import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

import { Content } from './styles';

const Shell: React.FC = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loginPaths = [
      `${process.env.PUBLIC_URL}/`,
      `${process.env.PUBLIC_URL}/login`,
    ];

    const isLogin = loginPaths.includes(history.location.pathname);

    setIsLogin(isLogin);
  }, [history, location]);

  return (
    <>
      {!isLogin && <Sidebar />}
      <Content>
        {!isLogin && <Navbar />}

        {children}
      </Content>
    </>
  );
};

export default Shell;
