import React, {Component} from 'react'

const countHits = (WrappeComponent, power) => {


    class CountHits extends Component {


        state = {
            hits : 0,
        }
      
      
        addOne = () => {
          this.setState(prevState => {
      
            return {
              hits : prevState.hits + 1,
            }
          })
        }

        
        componentDidUpdate = (prevProps, prevState) => {
          if (this.state !== prevState) {
            const compName = WrappeComponent.name;
            this.props.reduceHandle(compName, power)
          } 
        }
        



        render(){

            console.log(this.props)

            return <WrappeComponent addHitOne={this.addOne} hocState={this.state} {...this.props} />
        }
    }

    return CountHits;
 
}

export default countHits
