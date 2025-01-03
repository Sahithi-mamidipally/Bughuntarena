import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
import config from "./auth_config.json";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  authorizationParams: {
    redirect_uri: `${window.location.origin}`,
    audience: config.audience
  },
  onRedirectCallback
};

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>
);

serviceWorker.unregister();