import React, { Component } from 'react';
import '../css/NavBar.css'

export default class NavBar extends Component {

  render() {
    const today = this.props.selectedDate
    const date = `${today.getDate()} ${today.getMonth() + 1} ${today.getFullYear()}`

    return(
      <div id='NavBar'>
        <div className='inner'>

          <div id='left' onClick={this.props.dayLeft}>
            <i className="material-icons">keyboard_arrow_left</i>
          </div>

          <div id='selected-date' onClick={this.toggleCalendar}>{date}</div>

          <div id='right' onClick={this.props.dayRight}>
            <i className="material-icons">keyboard_arrow_right</i>
          </div>

        </div>
      </div>
    );
  }
}


