import { combineReducers } from 'redux'
import mealTracker from './mealTracker'

const mealApp = combineReducers({
  mealTracker
})

export default mealApp