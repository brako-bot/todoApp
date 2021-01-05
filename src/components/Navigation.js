import React, {Component} from 'react';
import './../css/Navigation.css';

class Navigation extends Component{
    render(){
        return (
          <div className="navigation-absolute">
            <nav className="navbar">
              <p className="tittle">{this.props.tittle}</p>
              <p className="ntasks">{this.props.ntareas}</p>
            </nav>
          </div>
        )
    }
}

export default Navigation;