import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './../store';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
