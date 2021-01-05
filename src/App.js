import React, { Component } from 'react';
import './css/App.css';

//MY COMPONENTS
import Navigation from './components/Navigation.js';
import Task from './components/Task';
import FormTask from './components/FormTask';

import { todos } from './todos.json';
console.log(todos)

// function App() {
//   return (
//     <div className="App">
//         <Navigation tittle="nombre de la empresa"/>
//         <Navigation tittle="titulo del blog"/>

//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super();
    this.state = {
      title: 'Gestor de tareas',
      todos, //este es el todo que importamos antes
    }
    this.handleAddtask = this.handleAddtask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  handleAddtask(todo){
    this.setState({
      todos: [...this.state.todos, todo],
      numeroTareas: todos.length
    })
  }

  removeTask(index){
      console.log(index)
      this.setState({
        //filter crea un nuevo arreglo con los elementos que no cumplan la condicion
        todos: this.state.todos.filter((element,i) => {
            return i !== index;
        })
      })
  }

  render(){

    return (
      <div className="App">
        <Navigation tittle={this.state.title} ntareas={this.state.todos.length}/>
        <div className="app-container">
          <FormTask className="div-form" onAddTask={this.handleAddtask}/>
          <Task data={this.state.todos} className="div-tasks" onRemove={this.removeTask}/>
        </div>
      </div>
    );
  }
}

export default App;
