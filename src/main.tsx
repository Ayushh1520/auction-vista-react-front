import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain="dev-lmmsxa55mwaf5i0i.au.auth0.com"
const  clientId="EySaB38EXYRYVpR9eP8gvZc49ZRsAQIP"   // from Auth0 dashboard

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
