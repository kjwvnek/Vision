import { combineReducers } from 'redux'
import user from './user'
import popup from './popup'
import list from './list'

export default combineReducers({
  user,
  popup,
  list
})
