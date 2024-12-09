import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../auth_config.json';

export const Auth0ProviderWithConfig = ({ children }) => {
  const navigate = useNavigate();
  const origin = window.location.origin;

  const onRedirectCallback = (appState) => {
    // Handle the redirect after login
    if (appState && appState.returnTo) {
      navigate(appState.returnTo);
    } else {
      // Default redirect to dashboard
      navigate('/dashboard');
    }
  };

  return (
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      authorizationParams={{
        redirect_uri: `${origin}/callback`,
        scope: 'openid profile email'
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};