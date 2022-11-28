import React, { Component } from 'react';
import reactjs from './reactjs.png'



class Reactjs extends Component {

/* 
  state = {
      hits : 0,
      frontEnd : true,
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

    const { hits, addOne, name} = this.props;

    return (
      <div className='col'>

        <img src={reactjs}  alt="react js" height='70'/>

          <br />

          <button onClick={addOne} className='btn btn-success m-3'>{name} Frappe </button>

          <table className='table table-striped'>

            <thead>
              
              <tr>
                <th scope="col">Coups</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                  <td>{hits}</td>
              </tr>
            </tbody>
          </table>
        
      </div>
    )
  }
}

export default Reactjs;
