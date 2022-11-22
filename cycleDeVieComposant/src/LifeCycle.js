import React, { Component } from 'react';
// import ChildComponent from './ChildComponent';

class LifeCycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Toto',
         setp : 1,     
        }

        console.log(`Etape ${this.state.setp} :  je suis dans le constructor()` )
    }

    componentDidMount = () => {
       console.log(`Etape ${this.state.setp} :  je suis dans le componentDidMount()` )

       this.setState({

        name:this.props.name,
        setp : this.state.setp + 1

       })
       console.log(this.setState.setp)
       console.log(`Etape ${this.state.setp} :  je suis dans le  setState componentDidMount()` )
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log(`Etape ${this.state.setp} :  je suis dans le  componentDidUpdate` )
        console.log(prevState);
        console.log(this.state);
        // console.log(prevProps);
        // console.log(this.prevProps);
    }

    componentWillUnmount() {

        console.log("je suis dans le componentWillUnmount() ")
    }
    
    
    
    
  render() {

    console.log(`Etape ${this.state.setp} : je suis dans le render()` )

    return (
        
      <div className='borderBox'>
        {
        console.log(`Etape ${this.state.setp} : Mise a jour du DOM` )

        }
        <p>Changement : {this.state.setp}</p>
        <p>Nom : {this.state.name}</p>

        {/* <ChildComponent />  */}
      </div>
    )
  }
}

export default LifeCycle;
