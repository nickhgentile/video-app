import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './../store';
import '../styles/globals.css';
import { Auth0Provider } from "@auth0/auth0-react";
const auth0Props = {
  domain: "fandog.us.auth0.com",
  clientId: "qUbFlopxiIrHpCKPkg8ZR8wGJVzF4gPg",
  redirectUri: "http://localhost:3000"
}


function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={auth0Props.domain}
      clientId={auth0Props.clientId}
      redirectUri={auth0Props.redirectUri}
    >

    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
    </Auth0Provider>
  );
}

export default App;
