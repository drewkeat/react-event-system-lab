// Code EyesOnMe Component Here
import React, { Component } from "react";

export default class EyesOnMe extends Component {

    hasFocus = () => {
        console.log('Good!')
    }

    notFocus = () => {
        console.log('Hey! Eyes on me!')
    }

  render() {
    return (
        <button onFocus={this.hasFocus} onBlur={this.notFocus}>Pay Attention</button>
    )
  }
}
