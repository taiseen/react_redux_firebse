// 18-Jun-2021

import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectReducer,
});

export default rootReducer;