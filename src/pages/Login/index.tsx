import React, { useState } from 'react';
import MicrosoftLogin from 'react-microsoft-login';
import { AuthError } from 'msal';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { login } from '../../services/auth';
import { setUserData } from '../../services/user-data';
import RoleDialog from '../../components/RoleDialog';

const Login: React.FC = () => {
  const history = useHistory();
  const CLIENT_ID = 'c3fe5059-0d49-4286-97d2-f8a084961cff';
  const TENANT_URL =
    'https://login.microsoftonline.com/ea47001a-3428-40f3-8ea1-86bdb1a3bc84';
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('');

  const authHandler = async (error?: AuthError, auth?: any) => {
    if (!auth) {
      return;
    }

    const { name, userName } = auth.authResponseWithAccessToken.account;

    if (name && userName) {
      const { data } = await api.post('/sessions', { email: userName });

      login(data.token);
      setUserData({ name, email: userName });

      const user = await api.get(`/users/email/${userName}`);

      if (!user) {
        setUserName(name);
        setOpen(true);
        return;
      }

      //history.push('/db1-be-light/main');
    }
  };

  const openLogin = (element: HTMLParagraphElement) => {
    if (!element) {
      return;
    }
    element.click();
  };

  return (
    <>
      <MicrosoftLogin
        clientId={CLIENT_ID}
        tenantUrl={TENANT_URL}
        authCallback={authHandler}
      >
        <p ref={openLogin} />
      </MicrosoftLogin>

      <RoleDialog isOpen={open} userName={userName} />
    </>
  );
};

export default Login;
