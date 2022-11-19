import React, { Component} from 'react';
import './App.css';
import Form from './Form';


class App extends Component {
 
  render() {
    return (
      <div className='App'>
        <Form heard={true} />
      </div>
    )
  }

}

export default App;
