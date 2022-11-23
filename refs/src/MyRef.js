import React, { Component } from 'react'



class MyRef extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         value : '',
      }

        this.myTitle = React.createRef();
        this.myInput = React.createRef();
        console.log(this.myTitle);  
    }


   /*  changeValue = (event) => {
        console.log(event.target.value)
        this.setState({
            value : event.target.value,
        })
    } */


    // Cette fonction s execute au moment du montage 
    /* componentDidMount = () => {
      this.myInput.current.focus()
    } */

    addFocus = () =>{
      this.myInput.current.focus();
    }
    

    // Cette fonction s execute lorsqu il y a eu une modification 
    // componentDidUpdate = (prevProps, prevState) => {
    //   this.myTitle.current.style.color = 'red';
    // }


    /* handleClick = () => {
      console.log(this.myInput.current.value)
    }
  */

    
    

  render() {

    return (
      <div>
        {/* <h1 ref={this.myTitle}>Valeur : {this.state.value} </h1> */}
        {/* <input ref={this.myInput} onChange={this.changeValue} type='text' value={this.state.value}  />         */}

        <input ref={this.myInput}  type='text'/>
        {/* <button onClick={this.handleClick}>Valider</button> */}
      
      </div>
    )
  }
}

export default MyRef
