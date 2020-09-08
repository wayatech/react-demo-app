import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'todomvc-app-css/index.css'

import Main from './components/Main'
import reducer from './reducers'

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default App
