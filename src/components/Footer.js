import React, { Component } from 'react';

class Footer extends Component {
  render() {

    let classes = this.props.imgName + " portfolio-img" ;

    return(
      <div>
        <h2>{ this.props.title }</h2>
        <div className={ classes } ></div>
        <p>{ this.props.description }</p>
      </div>
    )
  }
}

export default Footer;