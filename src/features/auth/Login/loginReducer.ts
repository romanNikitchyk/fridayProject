import { Dispatch } from 'redux'
import { loginApi, LoginParamsType } from './loginApi'

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
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<LoginActionsType>) => {
  loginApi
    .login(data)
    .then((res) => {
      console.log(res)
      dispatch(setIsLoggedInAC(true))
    })

    .catch((error) => {
      alert(error)
    })
}

// types
export type LoginActionsType = ReturnType<typeof setIsLoggedInAC>
