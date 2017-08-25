
const mealTracker = (state = {}, action) => {
  switch (action.type) {
    case 'SUBMIT':
      let meal = action.meal
      let date = meal.date
      if (date === undefined) {
        date = new Date()
      }
      let date_min = `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`

      if (Object.keys(state).includes(date_min)) {
        state[date_min].push(meal.formValues)
        return state
      } else {
        state[date_min] = [meal.formValues]
        return state
      }

    // case 'SELECT_DATE':
    //   state.selectedDate = action.date
    //   return state

    default:
      return state
  }
}

export default mealTracker