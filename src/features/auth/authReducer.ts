export type FirstActionsType = any

const initialState = {}
export type FirstStateType = typeof initialState

export const authReducer = (
  state: FirstStateType = initialState,
  action: FirstActionsType
): FirstStateType => {
  switch (action.type) {
    default: {
      return state
    }
  }
}
