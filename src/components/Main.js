import React, { Component } from 'react';

class Main extends Component {
    render() {
        
        let classes = this.props.imgName + " porfolio-img" ;

        return(
            <div>
                <h2>{ this.props.title }</h2>
                <div className={ classes } ></div>
                <p>{ this.props.description }</p>
            </div>
        )
    }
}

export default Main;
