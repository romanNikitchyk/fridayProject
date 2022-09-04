import { instance } from '../../api/api'

export type PacksParamsType = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string
  page?: number
  pageCount?: number
  user_id?: string
  cardPacksTotalCount?: number
}
export type ActionParamTYPE = {
  packName?: string
  minCardsCount?: number
  maxCardsCount?: number
  sortPacks?: string
  page?: number
  pageCount?: number
  user_id?: string
  cardPacksTotalCount?: number
}
export type StateType = {
  cardPacks: CardsPacksType[]
  page: number
  pageCount: number
  cardPacksTotalCount: number
  packName: string
  user_id: string
  valueOfSearchInput: string
  maxCardsCount: number
  minCardsCount: number
  min: number
  max: number
}
export type PacksResponseType = {
  cardPacks: CardsPacksType[]
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  page: number
  pageCount: number
  token: string
}
export type CardsPacksType = {
  _id: string
  user_id: string
  user_name: string
  private: false
  name: string
  path: string
  grade: number
  shots: number
  deckCover: string
  cardsCount: number
  type: string
  rating: number
  created: string
  updated: string
  more_id: string
  __v: number
}
export const packsAPI = {
  getPacks: (params: PacksParamsType) => {
    return instance.get<PacksResponseType>('cards/pack', { params })
  },
}
