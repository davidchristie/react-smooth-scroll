import { createStore } from 'redux'

import reducer from './reducers'

const enhancer = () => {
  const extension = window.__REDUX_DEVTOOLS_EXTENSION__
  return extension && extension()
}

export default createStore(reducer, enhancer())
