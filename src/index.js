import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// 18-Jun-2021
import { createStore, applyMiddleware } from 'redux'; // 1 | 6 | 11
import rootReducer from './store/reducers/rootReducer'; // 2
import { Provider, useSelector } from 'react-redux'; // 4 | binding layer of redux with react
import thunk from 'redux-thunk'; // 7
import { createFirestoreInstance, getFirestore } from 'redux-firestore'; // 9
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'; // 9
import firebase from './config/FireBaseConfig';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument({
      getFirebase,
      getFirestore
    }))
); // 3 | 8 | 10

// react-redux-firebase config 
// sync for firebase + firestore
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}
// firebaseReducer | Enhancer বর্ধনশীল, উন্নত করা
const rrfProps = {

  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
  attachAuthIsReady: true,
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebaseAuth.auth)
  if (!isLoaded(auth)) return <div className="red-text center">Loading Screen...</div>;
  return children
}

ReactDOM.render(
  <React.StrictMode>

    {/* 5 | binding layer of redux with react */}
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>

  </React.StrictMode>
  , document.getElementById('root'));
