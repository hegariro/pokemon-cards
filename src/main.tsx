import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';

import App from './App/App';
import { rootReducer } from './reducers/root.reducer';
import { logger } from './middlewares/pokemons';
import './index.css';

const composeEnhancers = compose(applyMiddleware(thunk, logger));

const store = createStore<any, any>(rootReducer, composeEnhancers);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
