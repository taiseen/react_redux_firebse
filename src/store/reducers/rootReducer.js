// 18-Jun-2021 | 26-Jun-2021
import authReducer from './authReducer'; // 1
import projectReducer from './projectReducer'; // 1
import { combineReducers } from 'redux'; // 2
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({ // 3
    firebase: firebaseReducer,
    auth: authReducer, // 4
    project: projectReducer, // 4

});

export default rootReducer;