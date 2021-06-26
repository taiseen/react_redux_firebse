import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 18-Jun-2021
import { createStore, applyMiddleware } from 'redux' // 1 | 6
import rootReducer from './store/reducers/rootReducer'; // 2
import { Provider } from 'react-redux'; // 4
import thunk from 'redux-thunk'; // 8

const store = createStore(rootReducer, applyMiddleware(thunk)); // 3 | 7 | 9

ReactDOM.render(
  <React.StrictMode>

    {/* 5 | binding layer of redux with react */}
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
  , document.getElementById('root'));