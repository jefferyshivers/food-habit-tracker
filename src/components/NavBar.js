import React, { Component } from 'react';
import { connect } from 'react-redux' 
import { PropTypes } from 'prop-types'
import '../css/NavBar.css'


class DateDiv extends Component {
  render() {
    return(
      <div id='selected-date'>{String(this.props.selectedDate)}</div>
    )
  }
}



class NavBar extends Component {
  render() {
    return(
      <div id='NavBar'>
        <div className='inner'>

          <div id='left' onClick={this.props.onDateDown}>
            <i className="material-icons">keyboard_arrow_left</i>
          </div>

          <DateDiv selectedDate={this.props.selectedDate} />

          <div id='right' onClick={this.props.onDateUp}>
            <i className="material-icons">keyboard_arrow_right</i>
          </div>

        </div>
      </div>
    )
  }
}



NavBar.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  onDateUp: PropTypes.func.isRequired,
  onDateDown: PropTypes.func.isRequired
}

function getCurrentDate(state) {
  return new Date(state)
}
const mapStateToProps = (state) => {
  return {
    selectedDate: getCurrentDate(state.mealTracker.selectedDate)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDateUp: () => {
      dispatch({ type: 'CHANGE_DATE', direction: 1})
    },
    onDateDown: () => {
      dispatch({ type: 'CHANGE_DATE', direction: -1})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)