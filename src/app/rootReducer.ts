import { authReducer } from '../features/auth/authReducer'
import { profileReducer } from '../features/profile/profileReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  login: authReducer,
  profile: profileReducer,
})
