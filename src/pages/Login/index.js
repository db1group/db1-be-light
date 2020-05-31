import React from 'react';
import MicrosoftLogin from 'react-microsoft-login';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  const CLIENT_ID = 'c3fe5059-0d49-4286-97d2-f8a084961cff';
  const TENANT_URL =
    'https://login.microsoftonline.com/ea47001a-3428-40f3-8ea1-86bdb1a3bc84/';

  const authHandler = (err, { authResponseWithAccessToken }) => {
    const { name, userName } = authResponseWithAccessToken.account;

    localStorage.setItem('userData', JSON.stringify({ name, userName }));

    history.push('/db1-be-light/main');
  };

  const openLogin = (element) => {
    if (!element) {
      return;
    }
    element.click();
  };

  return (
    <MicrosoftLogin
      clientId={CLIENT_ID}
      tenantUrl={TENANT_URL}
      authCallback={authHandler}
    >
      <p ref={openLogin} />
    </MicrosoftLogin>
  );
};
