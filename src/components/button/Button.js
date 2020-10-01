import React from 'react'
import "./Button.css"
class Button extends React.Component {
    state = {  }
    render() { 
        return ( <button className="Button" >{this.props.text}</button> );
    }
}

export default Button;