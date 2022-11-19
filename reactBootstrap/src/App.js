import React, { Component} from 'react';
import Resultat from './components/game';
import './App.css';


class App extends Component {
 
  render() {
    return (
      <div className='App'>
        
            <Resultat/>
            
        {/* <div class="alert alert-success" role="alert">
        </div>

        <button className="btn btn-primary mt-1">Changer le state</button> */}
        
      </div>
    )
  }

}

export default App;
