import React, { Component } from 'react';
import vuejs from './vuejs.png'
import countHits from './countHits';
class Vuejs extends Component {


  /* state = {
      hits : 0,
  }


  addOne = () => {
    this.setState(prevState => {

      return {
        hits : prevState.hits + 1,
      }
    })
  } */


  // addOne = () => {
  //   this.setState({
  //     hits : this.state.hits + 1,
  //   })
  // }

  render() {
    const {name, addHitOne, hocState, life} = this.props;

    const lifeValue = life > 0 ? (<td>{ life } %</td>): (<td> <span className='badge bg-danger'> Mort</span> </td>);

    const button = life > 0 ? (<button onClick={addHitOne} className='btn btn-success m-3'>{name} frappe</button>) : (<button className='btn btn-danger m-3' disabled> Mort </button>);
    
    return (
      <div className='col'>

        <img src={vuejs}  alt="vue js" height='70'/>

          <br />

          { button }
          {/* <button onClick={addHitOne} className='btn btn-success m-3'> {name}  frappe</button> */}
          {/* <button onClick={this.addOne} className='btn btn-success m-3'> {name}  frappe</button> */}


          <table className='table table-striped'>

            <thead>
              <tr>                
                <th scope="col">Coups</th>
                <th scope="col">Vie</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                  <td>{hocState.hits}</td>
                  { lifeValue }
                  {/* <td>{life} %</td> */}
                  {/* <td>{this.state.hits}</td> */}
              </tr>
            </tbody>
          </table>
        
      </div>
    )
  }
}

export default countHits(Vuejs, 10);
