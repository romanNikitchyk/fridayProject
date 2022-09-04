import { instance } from '../../api/api'

export type CardsParamsType = {
  cardAnswer?: string
  cardQuestion?: string
  cardsPack_id: string
  min?: number
  max?: number
  sortCards?: number
  page?: number
  pageCount?: number
}
export type CardsResponseType = {
  cards: CardsType[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
}
export type CardsType = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  shots: number
  user_id: string
  created: string
  updated: string
  _id: string
}
export const cardsAPI = {
  getCards: (params: CardsParamsType) => {
    return instance.get<CardsResponseType>('/cards/card', { params })
  },
}
