import React, { Component } from 'react';
import '../css/Summary.css'

export default class Summary extends Component {
  render() {
    // servings
    const goals = {
      Meals: 6,
      Vegetable: 6,
      Protein: 3,
      Fat: 2,
      Carb: 2,
      Drink: 8
    }

    const summary = (date, meals) => {
      // setup
      const selectedDate = date ? new Date(date) : new Date()
      const date_minified = `${selectedDate.getDate()} ${selectedDate.getMonth() + 1} ${selectedDate.getFullYear()}`
      const selectedMeals = meals[date_minified] ? meals[date_minified] : null

      // alternate: show progress if any made, otherwise don't
      if (selectedMeals !== null) {
        let attained = {
          Meals: selectedMeals.length,
          Vegetable: 0,
          Protein: 0,
          Fat: 0,
          Carb: 0,
          Drink: 0 
        }

        selectedMeals.forEach((meal) => {
          let serving_names = Object.keys(attained)
          serving_names.shift()
          serving_names.forEach((name) => {
            let val = parseInt(meal[name], 10)
            attained[name] += val
          })
        })

        let goal_names = Object.keys(goals)
        let summaries = goal_names.map((name) => {
          return <SummaryItem key={name} type={name} total={attained[name]} goal={goals[name]} />
        })
        return summaries
      } else {
        return 'No meals yet'
      }
    }

    return(
      <div id='Summary'>
        <div className='title'>Daily Summary</div>
        <div id='Summaries'>
          {summary(this.props.selectedDate, this.props.meals)}
        </div>
      </div>
    )
  }
}







class SummaryItem extends Component {

  render() {
    let goal = this.props.goal
    let goalArray = new Array(goal)
    let attained = this.props.total
    for (var g=0;g<goal;g++) {
      goalArray.push({num: g})
    }

    const progress_graphic = goalArray.map((g) => {
      let key = g + Math.random()
      let style = {}
      if (g['num'] < attained) {
        style = {background: 'rgb(100,200,255)'}
      }
      return <div key={key} className='progress-square' style={style}></div>
    })

    const progress_fraction = () => {
      let style = {marginLeft: '5px'}
      if (attained > goal) {
        style={marginLeft: '5px', color: 'rgb(200,50,50)'}
      }
      return <span style={style}> {this.props.total}/{this.props.goal}</span>
    }

    return(
      <div className='SummaryItem'>
       <div className='top'>
         {this.props.type}: {progress_fraction()}
       </div>
       <div className='bottom'>
         {progress_graphic}
       </div>
     </div>
    )
  }
}