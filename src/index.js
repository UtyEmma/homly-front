import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter, useHistory} from 'react-router-dom';
import { Provider } from 'react-redux'
import { store, persistor, history } from './providers/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Preloader from 'components/preloader/preloader';
import { ConnectedRouter } from 'connected-react-router'; 
import SimpleReactLightbox from 'simple-react-lightbox';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<Preloader />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <SimpleReactLightbox>
            <App />
          </SimpleReactLightbox>
        </ConnectedRouter>
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
