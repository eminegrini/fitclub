import { applyMiddleware, createStore } from 'redux'
import rootReducer from './redux/modules'
import thunk from 'redux-thunk'

export default function configureStore() {
  const enhancer = applyMiddleware(thunk)


  const store = createStore(rootReducer, enhancer)

  return store
}