import React, { Component } from 'react'

class MyComponent extends Component {

constructor(props) {
  super(props)

  this.state = {
     name : 'SpiderTechnologie'
  }
  console.log('%c Je suis dans le constructeur ()' ,'color:red; background:yellow; font-size:15px')
}



  static getDerivedStateFromProps(props, state) {

    console.log('getDerivedStateFromProps lancée');
    // console.log('Je suis dans le constructeur ()')
    console.log(state)

    return null;
  }


  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('je suis dans le shouldComponentUpdate()')
  }
  
  
  render() {
    return (
      <div>
            hello world
      </div>
    )
  }
}

export default MyComponent
