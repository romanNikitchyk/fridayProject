import { AppThunk } from '../../app/store'
import { setProfileUserAC } from '../profile/profileReducer'
import { setIsLoggedInAC } from './Login/loginReducer'
import { userAPI } from '../../api/api'

const initialState: InitialStateType = {
  isInitialized: false,
}

export const authReducer = (
  state: InitialStateType = initialState,
  action: AuthReducerActionsType
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-ISINIT':
      return { ...state, isInitialized: action.isInitialized }
    default:
      return { ...state }
  }
}

export type InitialStateType = {
  isInitialized: boolean
}

export const setAppIsInitAC = (isInitialized: boolean) =>
  ({ type: 'APP/SET-ISINIT', isInitialized } as const)

export type AuthReducerActionsType = ReturnType<typeof setAppIsInitAC>

export const InitAppTC = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setAppIsInitAC(false))
      let res = await userAPI.me()
      console.log(res)
      dispatch(setIsLoggedInAC(true))
      dispatch(setProfileUserAC(res.data))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setAppIsInitAC(true))
    }
  }
}
