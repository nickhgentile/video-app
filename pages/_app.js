import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './../store';
import '../styles/globals.css';
// import { Auth0Provider } from '@auth0/auth0-react';

function App({ Component, pageProps }) {
  return (
    // <Auth0Provider
    //   domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    //   clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
    //   redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI}
    // >

    // </Auth0Provider>
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
