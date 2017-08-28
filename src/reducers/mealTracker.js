
const mealTracker = (state = {}, action) => {
  switch (action.type) {

    case 'SUBMIT':
      let submit_date = new Date(state.selectedDate)
      let meals = state.meals
      let meal = action.meal

      let servings = 0
      let vals = meal.formValues
      let val_keys = Object.keys(vals)

      val_keys.forEach(function(key) {
        if (key !== 'Name') {
          servings += parseInt(vals[key], 10)
        }
      })

      // if it isn't empty, submit new meal
      if (servings > 0) {
        let date_min = `${submit_date.getDate()} ${submit_date.getMonth() + 1} ${submit_date.getFullYear()}`

        if (Object.keys(meals).includes(date_min)) {
          meals[date_min].push(meal.formValues)
        } else {
          meals[date_min] = [meal.formValues]
        }

        const state_with_new_meals = Object.assign({}, state, {meals: meals})
        return state_with_new_meals  
      } else {
        return state
      }

    case 'CHANGE_DATE':
      let date = new Date(state.selectedDate)
      let direction = action.direction

      date.setDate(date.getDate() + direction)

      const newState = Object.assign({}, state, {selectedDate: date})
      return newState

    default:
      return state
  }
}

export default mealTracker