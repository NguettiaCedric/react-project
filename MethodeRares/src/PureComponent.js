import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    // NB le pureComponent possede sa propre methode shouldComponentUpdate, qu on n a pas le droit de modifier 


  render() {

    console.log('%c render du Purecomposant enfant simple!','color:green')

    return (
      <div>
        Bonjour PureComponent
      </div>
    )
  }
}

export default PureComp
