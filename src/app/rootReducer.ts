import { profileReducer } from '../features/profile/profileReducer'
import { combineReducers } from 'redux'
import { loginReducer } from '../features/auth/Login/loginReducer'

export const rootReducer = combineReducers({
  login: loginReducer,
  profile: profileReducer,
})
