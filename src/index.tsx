import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/common/store';
import Routes from './routes';

import * as serviceWorker from './serviceWorker';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
