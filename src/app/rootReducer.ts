import {authReducer} from '../features/auth/authReducer';
import {profileReducer} from '../features/profile/profileReducer';
import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
    first: authReducer,
    second: profileReducer
})