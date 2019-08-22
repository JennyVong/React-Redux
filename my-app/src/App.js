import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './addninja';


class App extends Component {
  state = {
    ninjas: [
      {name: 'yoshi', age: 30, belt: 'green', id: 1},
      {name: 'bowser', age: 20, belt: 'yellow', id: 2},
      {name: 'mario', age: 25, belt: 'red', id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  };
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  };
  render() {
  return (
    <div className="App">
      <h1>My first React App!</h1>
      <p>Welcome! :)</p>
      <Ninjas deleteNinja = {this.deleteNinja} ninjas = {this.state.ninjas} />
      <AddNinja addNinja = {this.addNinja}/>
    </div>
    );
  }
}

export default App;
