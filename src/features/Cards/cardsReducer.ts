import { cardsAPI, CardsParamsType, CardsResponseType } from './cardsApi'
import { AppThunk } from '../../app/store'
import { setAppIsInitAC } from '../auth/authReducer'
import { AxiosError } from 'axios'
import { errorHandler } from '../../common/utils/errorHandler'

const initialState: CardsResponseType = {
  cards: [],
  cardsTotalCount: 0,
  maxGrade: 0,
  minGrade: 0,
  page: 1,
  pageCount: 4,
  packUserId: 'id',
}

export const cardsReducer = (
  state: CardsResponseType = initialState,
  action: CardsActionsType
): CardsResponseType => {
  switch (action.type) {
    case 'CARDS/GET-CARDS':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
//ACTIONS
export const getCardsAC = (data: CardsResponseType) =>
  ({ type: 'CARDS/GET-CARDS', payload: data } as const)

//THUNKS
export const getCardsTC =
  ({ ...params }: CardsParamsType): AppThunk =>
  async (dispatch) => {
    dispatch(setAppIsInitAC(false))
    try {
      const res = await cardsAPI.getCards(params)
      console.log(res)
      dispatch(getCardsAC(res.data))
    } catch (error) {
      errorHandler(error as AxiosError | Error, dispatch)
    } finally {
      dispatch(setAppIsInitAC(true))
    }
  }

//TYPES
export type CardsActionsType = getCardsACType

export type getCardsACType = ReturnType<typeof getCardsAC>
