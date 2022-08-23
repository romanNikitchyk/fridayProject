import { profileReducer } from '../features/profile/profileReducer'
import { combineReducers } from 'redux'
import { registerReducer } from '../features/auth/Register/registerReducer'

export const rootReducer = combineReducers({
  register: registerReducer,
  profile: profileReducer,
})
