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
    const summaryItem = (type, total, goal) => {
      return <div className='SummaryItem'>{type}: {total}/{goal}.</div>
    }

    let selectedDate = new Date(this.props.selectedDate)
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

        selectedMeals.forEach((meal) => {
          num_veg += parseInt(meal.Vegetable, 10)
          num_protein += parseInt(meal.Protein, 10)
          num_fat += parseInt(meal.Fat, 10)
          num_carb += parseInt(meal.Carb, 10)
          num_drink += parseInt(meal.Drink, 10)
        })
        return <div id='Summaries'>
                 {summaryItem('Meals',num_meals,6)}
                 {summaryItem('Vegetable',num_veg,6)}
                 {summaryItem('Protein',num_protein,3)}
                 {summaryItem('Fat',num_fat,2)}
                 {summaryItem('Carb',num_carb,2)}
                 {summaryItem('Drink',num_drink,8)}
               </div>
      } else {
        return 'No meals yet'
      }
    }

    return(
      <div id='Summary'>
        <div className='title'>Daily Summary</div>
        {summary()}
      </div>
    )
  }
}
