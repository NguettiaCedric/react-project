import React, { Component } from 'react'



class ClassCount extends Component {
    
    constructor(props) {
        super(props)
      
        this.state = {
           count : 0,
        }
      }
      
  
    componentDidMount = () => {
        document.title = `Vous avez clique ${this.state.count} fois`
        console.log('je suis dans CDM')
    }

    componentDidUpdate = (prevProps, prevState) => {
        document.title = `Vous avez clique ${this.state.count}`
    }
    
    
    render() {
        return (
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={() => this.setState({ count : this.state.count + 1})}>Cliquer</button>
        </div>
        )
    }
}

export default ClassCount