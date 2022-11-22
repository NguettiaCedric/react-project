import React, { Component } from 'react'

class SimpleComponent extends Component {
  render() {

    console.log('%c render du composant enfant simple !','color:white')

    return (
      <div>
            Bonjour
      </div>
    )
  }
}

export default SimpleComponent
