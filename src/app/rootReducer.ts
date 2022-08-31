import { profileReducer } from '../features/Profile/profileReducer'
import { combineReducers } from 'redux'
import { registerReducer } from '../features/auth/Register/registerReducer'
import { loginReducer } from '../features/auth/Login/loginReducer'
import { authReducer } from '../features/auth/authReducer'
import { packsReducer } from '../features/Packs/packsReducer'

export const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  profile: profileReducer,
  auth: authReducer,
  packs: packsReducer,
})
