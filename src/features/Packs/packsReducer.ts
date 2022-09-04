import { packsAPI, PacksParamsType, StateType } from './packsApi'
import { AppThunk } from '../../app/store'
import { setAppIsInitAC } from '../auth/authReducer'

const initialState: StateType = {
  cardPacks: [],
  page: 1, // Текущая страница
  pageCount: 5, // Колод на странице
  cardPacksTotalCount: 0, // количество колод
  maxCardsCount: 0,
  minCardsCount: 0,
  packName: '', // имя колоды для сортировки по имени
  user_id: '',
  valueOfSearchInput: '',
  min: 0,
  max: 0,
}

export const packsReducer = (
  state: StateType = initialState,
  action: PacksActionsType
): StateType => {
  switch (action.type) {
    case 'PACKS/SET-PACKS':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
//ACTIONS
export const setPacksAC = (data: PacksParamsType) => {
  console.log(data)
  return { type: 'PACKS/SET-PACKS', payload: data }
}

//THUNKS
export const getPacksTC = (): AppThunk => async (dispatch, getState) => {
  dispatch(setAppIsInitAC(false))
  const { page, pageCount, packName, min, max, user_id } = getState().packs
  console.log('min, max', min, max)
  try {
    const res = await packsAPI.getPacks({
      page,
      pageCount,
      packName,
      min,
      max,
      user_id,
    })

    dispatch(setPacksAC(res.data))
  } catch (error) {
    alert(error)
  }
}

//TYPES
export type PacksActionsType = SetPacksAC

export type SetPacksAC = ReturnType<typeof setPacksAC>
