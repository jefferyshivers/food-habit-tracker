import React, { Component } from 'react';


export default class Summary extends Component {
  render() {
    // servings
    // const goals = {
    //   Meals: 6,
    //   Vegetable: 6,
    //   Protein: 3,
    //   Fat: 2,
    //   Carb: 2,
    //   Drink: 8
    // }


    let selectedDate = this.props.selectedDate
    if (selectedDate === undefined) {
      selectedDate = new Date()
    }
    const date_minified = `${selectedDate.getDate()} ${selectedDate.getMonth() + 1} ${selectedDate.getFullYear()}`
    const selectedMeals = this.props.meals.mealTracker[date_minified]

    const summary = () => {
      if (selectedMeals !== undefined) {
        let num_meals = selectedMeals.length
        let num_veg = 0
        let num_protein = 0
        let num_fat = 0
        let num_carb = 0
        let num_drink = 0

        let items = selectedMeals.map((meal) => {
          num_veg += meal.Vegetable
          num_protein += meal.Protein
          num_fat += meal.Fat
          num_carb += meal.Carb
          num_drink += meal.Drink
          return null
        })
        return num_meals
      } else {
        return 'No meals yets'
      }
    }


    // const summary = goals.map((type) => {
    //   return <div className='serving' key={type}>
    //           <div className='serving-name'>
    //             {type}
    //           </div>
    //           <div className='serving-number'>
    //             {this.props.meal[type]}
    //           </div>
    //         </div>
    // })

    return(
      <div id='Summary'>
        <div className='title'>Daily Summary</div>
        {summary()}
      </div>
    )
  }
}
