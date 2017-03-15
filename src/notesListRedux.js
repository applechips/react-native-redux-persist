// Defines the action types, the reducer function, and actionCreators helper functions to create actions. Note that we also moved initialState into this file (redux allows you to either pass it into your store on creation, or return it from your reducer).

// The types of actions that you can dispatch to modify the state
export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE'
}

// Helper functions to dispatch actions, optionally with payloads
  // Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using `store.dispatch()`
export const actionCreators = {
  add: (item) => {
    return {type: types.ADD, payload: item}
  },
  remove: (index) => {
    return {type: types.REMOVE, payload: index}
  }
}

// Initial state of the store
const initialState = {
  notes: [],
}

// Functions to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify the state object. State objects should be treated as immutable.
// - We set `state` to our `initialState` by default. Redux will call reducer() with no state on startup, and we are expected to return the initial state of the app in this case.
export const reducer = ( state = initialState, action ) => {
  const {notes} = state
  const {type, payload} = action
}
