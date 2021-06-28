import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// 18-Jun-2021
import { createStore, applyMiddleware, compose } from 'redux'; // 1 | 6 | 11
import rootReducer from './store/reducers/rootReducer'; // 2
import { Provider } from 'react-redux'; // 4 | binding layer of redux with react
import thunk from 'redux-thunk'; // 7
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'; // 9
import { ReactReduxFirebaseProvider, reactReduxFirebase, getFirebase } from 'react-redux-firebase'; // 9
import firebase from './config/FireBaseConfig';
// import firebase from 'firebase/app'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    // reduxFirestore(FireBaseConfig),
    // reactReduxFirebase(FireBaseConfig)
  )); // 3 | 8 | 10

const rrfProps = {
  firebase,
  config: firebase,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <React.StrictMode>

    {/* 5 | binding layer of redux with react */}
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>

  </React.StrictMode>
  , document.getElementById('root'));