import React, { Component } from 'react';
import '../css/Meals.css'

export default class Meals extends Component {
  constructor(props) {
    super(props)
    this.toggleAddMeal = this.toggleAddMeal.bind(this)
    this.state = {
      addingMeal: false
    }
  }

  toggleAddMeal() {
    this.setState({addingMeal: !this.state.addingMeal})
  }

  render() {
    let selectedDate = new Date(this.props.selectedDate)
    const date_minified = `${selectedDate.getDate()} ${selectedDate.getMonth() + 1} ${selectedDate.getFullYear()}`
    const all_meals = this.props.meals
    const selectedMeals = all_meals[date_minified] ? all_meals[date_minified] : null

    const meals = () => {
      if (selectedMeals !== null) {
        let items = selectedMeals.map((meal) => {
          return (
            <Meal key={selectedMeals.indexOf(meal)} 
                  meal={meal} />
          )
        })
        return items
      } else {
        return null
      }
    }

    const addMeal = () => {
      if (this.state.addingMeal) {
        return (
          <AddMealForm exit={this.toggleAddMeal} 
                       submit={this.props.onSubmit} 
                       selectedDate={this.props.selectedDate}/>
        )
      } else {
        return <AddMeal onClick={this.toggleAddMeal} />
      }
    }

    return(
      <div id='Meals'>
        <div className='title'>Meals</div>
        <div className='items'>
          {meals()}
          {addMeal()}
        </div>
      </div>
    )
  }
}



class Meal extends Component {
  render() {
    const name = () => {
      let name = this.props.meal.Name
      if (name === '') { name = 'Meal' }
      return name
    }
    // servings
    const servingTypes = ['Vegetable','Protein','Fat','Carb','Drink']
    const servings = servingTypes.map((type) => {
      let attained = this.props.meal[type]
      if (attained > 0) {
        return <div className='serving' key={type}>
                <div className='serving-name'>
                  {type}
                </div>
                <div className='serving-number'>
                  {this.props.meal[type]}
                </div>
              </div>   
      } else {
        return null
      }

    })

    return(
      <div className='Meal'>
        <div className='name-container'>
          {name()}
        </div>
        <div className='meal-attributes'>
          <div id='meal-img-container'>
            <i className="material-icons">add_a_photo</i>
          </div>
          <div className='servings-container'>
            {servings}
          </div>
        </div>
      </div>
    )
  }
}



class AddMeal extends Component {
  render() {
    return(
      <div id='AddMeal' onClick={this.props.onClick}>
        <div>Add New Meal</div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <i className="material-icons">add_circle_outline</i>
        </div>
      </div>
    )
  }
}








class AddMealForm extends Component {
  constructor(props) {
    super(props)
    this.submitMeal = this.submitMeal.bind(this)
    this.updateState = this.updateState.bind(this)
    this.state = {
      date: this.props.selectedDate,
      formValues: {
        Name: '',
        Vegetable: 0,
        Protein: 0,
        Fat: 0,
        Carb: 0,
        Drink: 0
      }
    }
  }

  updateState(event) {
    let key = event.target.id
    if (key === '') {
      key = 'Name'
    }
    let value = event.target.value
    let formValues = this.state.formValues
    formValues[key] = value
    this.setState({formValues: formValues})
  }

  submitMeal() {
    this.props.submit(this.state)
    this.props.exit()
  }

  render() {
    // servings
    const servingTypes = ['Vegetable','Protein','Fat','Carb','Drink']
    const servings = servingTypes.map((type) => {
      return (
        <div className='serving' key={type}>
          <div className='serving-name'>
            {type}
          </div>
          <div className='serving-number'>
            <input id={type}
                   name={type} 
                   type='number' 
                   placeholder='0'
                   min='0' 
                   onChange={this.updateState} />
          </div>
        </div>
      )
    })

    // full form
    return(
      <div id='AddMealForm'>
        <div className='name-container'>
          <input className='name' list='name' placeholder='Name' onChange={this.updateState}/>
          <datalist id='name'>
            <option value='Breakfast'/>
            <option value='Lunch'/>
            <option value='Dinner'/>
            <option value='Snack'/>
          </datalist>
        </div>
        <div className='meal-attributes'>
          <div id='meal-img-container'>
            <i className="material-icons">add_a_photo</i>
          </div>
          <div className='servings-container'>
            {servings}
          </div>
        </div>
        <div id='exit'>
          <i className="material-icons" onClick={this.props.exit}>close</i>
        </div>
        <div id='submit' onClick={this.submitMeal}>Submit</div>
      </div>
    )
  }
}