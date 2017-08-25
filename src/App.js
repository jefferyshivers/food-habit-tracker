import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar'
import Main from './components/Main'



let today = new Date()

class App extends Component {
  constructor(props) {
    super(props)
    this.dayLeft = this.dayLeft.bind(this)
    this.dayRight = this.dayRight.bind(this)
    this.state = {
      today: today,
      selectedDate: today
    }
  }

  dayLeft() {
    let date = this.state.selectedDate
    date.setDate(date.getDate() - 1)
    this.setState({selectedDate: date})
  }
  dayRight() {
    let date = this.state.selectedDate
    date.setDate(date.getDate() + 1)
    this.setState({selectedDate: date})
  }

  render() {
    return (
      <div id='App'>
        <NavBar selectedDate={this.state.selectedDate} dayLeft={this.dayLeft} dayRight={this.dayRight}/>
        <Main selectedDate={this.state.selectedDate}/>
      </div>
    );
  }
}

export default App;
