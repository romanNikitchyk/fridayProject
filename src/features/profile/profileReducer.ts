import { userAPI } from '../../api/api'
import { Dispatch } from 'redux'

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
  //error: string
}
const initialState = {
  _id: null as null | string,
  email: undefined as undefined | string,
  name: undefined as undefined | string,
  avatar: undefined as undefined | string,
  publicCardPacksCount: null as null | number,
  created: null as null | Date,
  updated: null as null | Date,
  isAdmin: null as null | boolean,
  verified: null as null | boolean,
  rememberMe: null as null | boolean,
  //error: null as null | string,
}

export type ProfileStateType = typeof initialState

export const profileReducer = (
  state: ProfileStateType = initialState,
  action: ProfileActionsType
): ProfileStateType => {
  switch (action.type) {
    case 'PROFILE/SET-PROFILE-USER':
      return action.userData
    case 'PROFILE/RESET-PROFILE-USER-DATA':
      return {
        _id: null,
        email: undefined,
        name: undefined,
        avatar: undefined,
        publicCardPacksCount: null,
        created: null,
        updated: null,
        isAdmin: null,
        verified: null,
        rememberMe: null,
      }
    default: {
      return state
    }
  }
}
export const setProfileUserAC = (userData: UserDataType) =>
  ({ type: 'PROFILE/SET-PROFILE-USER', userData } as const)
const resetProfileUserDataAC = () => ({ type: 'PROFILE/RESET-PROFILE-USER-DATA' } as const)

//Thunk
export const getuser = () => {
  return (dispatch: ThunkDispatch) => {
    userAPI
      .getUsers({
        email: 'nya-admin@nya.nya',
        password: '1qazxcvBG',
        rememberMe: false,
      })
      .then((res) => {
        console.log(res)
        dispatch(setProfileUserAC(res.data))
      })
  }
}
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
