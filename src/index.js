import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 18-Jun-2021
import { createStore, applyMiddleware } from 'redux' // 1 | 7
import rootReducer from './store/reducers/rootReducer'; // 2
import { Provider } from 'react-redux'; // 4 | binding layer of redux with react
import thunk from 'redux-thunk'; // 6

const store = createStore(rootReducer, applyMiddleware(thunk)); // 3 | 8

ReactDOM.render(
  <React.StrictMode>

    {/* 5 | binding layer of redux with react */}
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
  , document.getElementById('root'));