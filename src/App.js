import React, { Component } from 'react';
import './App.css';
import firebase from'firebase'

class App extends Component {
//function
addTodo(ev) {
//add firebase  after import
let refRoot= firebase.database().ref('/todo/')
refRoot.push({todo : this.refs.todo.value})

//prevent refresh of page
ev.preventDefault()
console.log(this.refs.todo.value)
this.refs.todo.value = ""
}

  render() {
    return (
      <div className="App">
        <h1> Welcome to React To-Do App</h1>
        <form onSubmit={this.addTodo.bind(this)}>
          <input type="text" ref="todo" placeholder="Add your Todo" autoFocus/>
          <button> Add Todo </button>
        </form>
      </div>
    );
  }
}

export default App;
