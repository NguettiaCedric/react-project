import React, { Component, Fragment } from 'react'

class AddHits extends Component {

    state = {
        hits : 0,
        frontEnd : {
            reactjs : true,
            vuejs : true,
        }
    }
  
  
    addOne = () => {
      this.setState(prevState => {
  
        return {
          hits : prevState.hits + 1,
        }
      })
    }
    
  render() {
    return (
      < Fragment>
            {this.props.render(this.state.hits , this.addOne, this.state.frontEnd)}
      </ Fragment>
    )
  }
}

export default AddHits;
