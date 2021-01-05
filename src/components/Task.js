import React, { Component } from 'react';
import './../css/Task.css';

class Task extends Component{
    constructor(){
        super()
        this.state = {
            index: ''
        }
        this.removeTask =this.removeTask.bind(this)
    }

    changeCard(e){
        this.setState({
            index: parseInt(e.target.id)
        })
        console.log("removing...", this.state.index)

    }

    removeTask(e){
        this.setState({
            index: parseInt(e.target.id)
        })
        this.props.onRemove(this.state.index)
        console.log("removing...", this.state.index)
                 
    }

    render(){
        return ( 
            <section className="tasks-container">
            {
                this.props.data.map((todo, i)=>{
                    return (
                            <div className="card" key={i}>
                                <div className="tittle-task">
                                    <h3>{todo.tittle}</h3>
                                    <p className={todo.priority}>{todo.priority}</p>
                                </div>
                                <div className="info-container">
                                    <p className="description">{todo.description}</p>
                                </div>
                                <p className="responsible">{todo.responsible}</p>
                                <button 
                                className="remove" 
                                id={i}
                                onClick={this.removeTask}
                                onMouseOver={this.changeCard.bind(this)}
                                >
                                    Delete
                                </button>
                            </div>
                    )
                })
            }
            </section>
        )
    }
}

export default Task;