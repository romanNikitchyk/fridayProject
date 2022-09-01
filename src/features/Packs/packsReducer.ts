import { packsAPI, PacksParamsType, PacksResponseType } from './packsApi'
import { AppThunk } from '../../app/store'
import { setAppIsInitAC } from '../auth/authReducer'

const initialState: PacksResponseType = {
  cardPacks: [],
  page: 1,
  pageCount: 0,
  cardPacksTotalCount: 0,
  minCardsCount: 0,
  maxCardsCount: 0,
}

export const packsReducer = (
  state: PacksResponseType = initialState,
  action: PacksActionsType
): PacksResponseType => {
  switch (action.type) {
    case 'PACKS/SET-PACKS':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const setPacksAC = (data: PacksResponseType) =>
  ({ type: 'PACKS/SET-PACKS', payload: data } as const)

export const getPacksTC =
  (params: PacksParamsType): AppThunk =>
  async (dispatch) => {
    dispatch(setAppIsInitAC(false))
    try {
      const res = await packsAPI.getPacks(params)
      console.log(res)
      dispatch(setPacksAC(res.data))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setAppIsInitAC(true))
    }
  }
export type PacksActionsType = ReturnType<typeof setPacksAC>
