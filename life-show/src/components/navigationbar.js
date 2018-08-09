import React, { Component } from 'react';
import '../styles/navigationbar.css'
class NavigationBar extends Component{
    render(){
        return(
            <header className="navigationBar">
                {this.props.children}
                <h3 className="title">{this.props.title}</h3>
            </header>
        )
    }
}
export default NavigationBar;