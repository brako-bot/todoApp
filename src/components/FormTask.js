import React, { Component } from 'react';
import './../css/FormTask.css';

class FormTask extends Component{
    constructor(){
        super()
        this.state = {
            tittle: '',
            descrption: '',
            responsible: '',
            priority: 'low'
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const { value, name } = e.target;
        this.setState({
            [name]: value
            
        })
        console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTask(this.state);
        console.log(this.state)
        
    }

    render(){
        return (
            <div className="form-container">
                <form className="form" onSubmit={this.handleSubmit}>
                        <input 
                        type="text"
                        name="tittle"
                        onChange={this.handleInput}
                        className="input-for-user"
                        placeholder="Task Tittle"
                        />

                        <input 
                        type="text"
                        name="responsible"
                        onChange={this.handleInput}
                        className="input-for-user"
                        placeholder="Responsible"
                        />

                        <textarea 
                        type="text"
                        name="description"
                        onChange={this.handleInput}
                        className="input-for-user"
                        placeholder="Description"
                        />

                        <select
                        type="text"
                        name="priority"
                        onChange={this.handleInput}
                        className="input-for-user"
                        placeholder="Task Tittle"
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                        
                        <button className="button input-for-user">Create Task</button>
                </form>
            </div>
        )
    }
}

export default FormTask;