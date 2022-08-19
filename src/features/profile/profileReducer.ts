export type SecondActionsType = any

const initialState = {}
export type SecondStateType = typeof initialState

export const profileReducer = (
  state: SecondStateType = initialState,
  action: SecondActionsType
): SecondStateType => {
  switch (action.type) {
    default: {
      return state
    }
  }
}
