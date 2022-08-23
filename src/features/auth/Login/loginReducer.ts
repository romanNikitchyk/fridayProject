import { loginApi, LoginParamsType } from './loginApi'
import { setProfileUserAC } from '../../profile/profileReducer'
import { AppThunk } from '../../../app/store'

const initialState = {
  isLoggedIn: false,
}
type InitialStateType = typeof initialState

export const loginReducer = (
  state: InitialStateType = initialState,
  action: LoginActionsType
): InitialStateType => {
  switch (action.type) {
    case 'login/SET-IS-LOGGED-IN':
      return { ...state, isLoggedIn: action.value }
    default:
      return state
  }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
  ({ type: 'login/SET-IS-LOGGED-IN', value } as const)

// thunks
export const loginTC =
  (data: LoginParamsType): AppThunk =>
  async (dispatch) => {
    try {
      let res = await loginApi.login(data)

      console.log(res)
      dispatch(setIsLoggedInAC(true))
      dispatch(setProfileUserAC(res.data))
    } catch (error) {
      alert(error)
    }
  }

// types
export type LoginActionsType = ReturnType<typeof setIsLoggedInAC>
