
let selectedDate = new Date()
const mealTracker = (state = { selectedDate: selectedDate }, action) => {

  switch (action.type) {

    case 'SUBMIT':
      let submit_date = new Date(state.selectedDate)
      let meal = action.meal

      let date_min = `${submit_date.getDate()} ${submit_date.getMonth() + 1} ${submit_date.getFullYear()}`

      if (Object.keys(state).includes(date_min)) {
        state[date_min].push(meal.formValues)
      } else {
        state[date_min] = [meal.formValues]
      }
      return state

    case 'CHANGE_DATE':
      let date = new Date(state.selectedDate)
      let direction = action.direction
      // change date
      date.setDate(date.getDate() + direction)
      // reassign
      const newState = Object.assign({}, state, {selectedDate: date})
      // return
      return newState

    default:
      return state
  }
}

export default mealTracker