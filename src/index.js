//  This file handles creating the redux store and passing it to our App container.
import { AppRegistry, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, authRehydrate } from 'redux-persist'

// Import the reducer and create a store
import { reducer } from './src/notesListRedux'

// Add the autoRehydrate middleware to your redux store
const store = createStore(reducer, undefined, autoRehydrate())

// Enable persistence
persistStore(store)

// Import the App container component
import App from './App'

// Pass the store into the Provider
const AppwithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('notes', () => AppWithStore)
