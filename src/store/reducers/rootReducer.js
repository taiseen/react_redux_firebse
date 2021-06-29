// 18-Jun-2021 | 26-Jun-2021

import authReducer from './authReducer'; 
import projectReducer from './projectReducer'; 
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({ 

    auth: authReducer, 
    project: projectReducer,
    firestore: firestoreReducer,
    firebaseAuth: firebaseReducer

});

export default rootReducer;