import React from 'react';
import { connect } from 'react-redux' 
import { PropTypes } from 'prop-types'
import Meals from './Meals'
import Summary from './Summary'
import '../css/Main.css'


const MainContainer = ({ selectedDate, meals, onSubmit }) => {
  return(
    <div id='Main'>
      <Summary selectedDate={selectedDate} meals={meals}/>
      <Meals selectedDate={selectedDate} meals={meals} onSubmit={(meal) => onSubmit(meal)}/>
    </div>
  )
}

MainContainer.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  meals: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  let date = new Date(state.mealTracker.selectedDate)

  return {
    meals: state,
    selectedDate: date
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (meal) => dispatch({ type: 'SUBMIT', meal: meal })
  }
}

let Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
export default Main


