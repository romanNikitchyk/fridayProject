import { applyMiddleware, legacy_createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { rootReducer } from './rootReducer'
import { RegisterActionsType } from '../features/auth/Register/registerReducer'
import { ProfileActionsType } from '../features/profile/profileReducer'
import { LoginActionsType } from '../features/auth/Login/loginReducer'
import { AuthReducerActionsType } from '../features/auth/authReducer'

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

// ***** types ***** //
export type AppActionsType =
  | RegisterActionsType
  | ProfileActionsType
  | LoginActionsType
  | AuthReducerActionsType
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActionsType
>
