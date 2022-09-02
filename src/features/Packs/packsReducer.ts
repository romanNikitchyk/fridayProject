import { packsAPI, PacksParamsType, PacksResponseType } from './packsApi'
import { AppThunk } from '../../app/store'
import { setAppIsInitAC } from '../auth/authReducer'

const initialState: PacksResponseType = {
  cardPacks: [],
  page: 1, // Текущая страница
  pageCount: 0, // Колод на странице
  cardPacksTotalCount: 0, // количество колод
  minCardsCount: 0, // фильтрация
  maxCardsCount: 0, // фильтрация
  params: {},
}

export const packsReducer = (
  state: PacksResponseType = initialState,
  action: PacksActionsType
): PacksResponseType => {
  switch (action.type) {
    case 'PACKS/SET-PACKS':
      return { ...state, ...action.payload }
    case 'PACKS/SET-PARAMS':
      return { ...state, params: action.payload }
    default:
      return state
  }
}
//ACTIONS
export const setPacksAC = (data: PacksResponseType) =>
  ({ type: 'PACKS/SET-PACKS', payload: data } as const)
export const setParamsAC = (data: PacksParamsType) =>
  ({
    type: 'PACKS/SET-PARAMS',
    payload: data,
  } as const)
//THUNKS
export const getPacksTC = (): AppThunk => async (dispatch, getState) => {
  dispatch(setAppIsInitAC(false))
  const params: PacksParamsType = getState().packs.params
  try {
    const res = await packsAPI.getPacks(params)
    dispatch(setPacksAC(res.data))
  } catch (error) {
    alert(error)
  } finally {
    dispatch(setAppIsInitAC(true))
  }
}
//TYPES
export type PacksActionsType = SetPacksAC | SetParamsAC
export type SetPacksAC = ReturnType<typeof setPacksAC>
export type SetParamsAC = ReturnType<typeof setParamsAC>
