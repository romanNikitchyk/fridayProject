import { userAPI } from '../../api/api'
import { Dispatch } from 'redux'
import { ResponseType } from '../auth/Login/loginApi'

export type ProfileActionsType = setProfileUserACType | resetProfileUserDataACType
export type UserDataType = {
  _id: string
  email: string
  name: string
  avatar: string
  publicCardPacksCount: number
  created: Date
  updated: Date
  isAdmin: boolean
  verified: boolean
  rememberMe: boolean
}
const initialState: ResponseType = {
  _id: '',
  email: '',
  name: '',
  avatar: '',
  publicCardPacksCount: 0,
  created: null,
  updated: null,
  isAdmin: false,
  verified: false,
  rememberMe: false,
}

export type ProfileStateType = typeof initialState

export const profileReducer = (
  state: ResponseType = initialState,
  action: ProfileActionsType
): ProfileStateType => {
  switch (action.type) {
    case 'PROFILE/SET-PROFILE-USER':
      return action.userData
    case 'PROFILE/RESET-PROFILE-USER-DATA':
      return {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,
        created: null,
        updated: null,
        isAdmin: false,
        verified: false,
        rememberMe: false,
      }
    default: {
      return state
    }
  }
}
export const setProfileUserAC = (userData: ResponseType) =>
  ({ type: 'PROFILE/SET-PROFILE-USER', userData } as const)
const resetProfileUserDataAC = () => ({ type: 'PROFILE/RESET-PROFILE-USER-DATA' } as const)

//Thunk

export const logOut = () => {
  return (dispatch: ThunkDispatch) => {
    userAPI.logOut().finally(() => {
      dispatch(resetProfileUserDataAC())
    })
  }
}

export type setProfileUserACType = ReturnType<typeof setProfileUserAC>
export type resetProfileUserDataACType = ReturnType<typeof resetProfileUserDataAC>
export type ThunkDispatch = Dispatch<ProfileActionsType>
