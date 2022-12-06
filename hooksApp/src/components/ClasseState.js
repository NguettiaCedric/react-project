import React, { Component } from 'react'

export class ClasseState extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           counter: 0,
        }
      }

     /*  addOne = () => {
        this.setState({
           counter : this.state.counter + 1
        })
      } */

    //   ou prendre la valeur deja existante

    addOne = () => {
        this.setState(prevState => {
            return {
                counter : prevState.counter + 1,
            }
        })
    }
      
    render() {

    return (
        <div> 
            <p>Class State : {this.state.counter}</p>
            <button className='btn btn-primary' onClick={this.addOne}>State dans Class</button>
        </div>
    )
    }
}

export default ClasseState
