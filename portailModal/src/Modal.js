import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {

    constructor(props) {
      super(props)
    
      this.popUpContainer = document.createElement('div');

      document.body.appendChild(this.popUpContainer);
    }

    componentWillUnmount = () => {
        document.body.removeChild(this.popUpContainer);
    }
    
    

  render() {


    return ReactDOM.createPortal (

      <div className='modal'  onClick={this.props.close} >
        <div>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem loremv vv  loremlorem lorem loremlorem lorem lorem</p>
            <button  onClick={this.props.close} >Fermer</button>
            {/* <button  onClick={this.props.close} >Fermer</button> */}
        </div>
      </div>,

        this.popUpContainer 

    //   document.getElementById('second-root')

    )
  }
}

export default Modal
