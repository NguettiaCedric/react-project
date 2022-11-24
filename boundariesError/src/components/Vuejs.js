import React, { Component } from "react";
import handleClicks from './HandleClicks';
import vuejs from "../vuejs.png";

class Vuejs extends Component {

  /* state = {
    bg : "",
  }

  handleClick = () => {

    this.setState({
      bg : 'bg-danger'
    })

  } */

  render() {


    const { clickHandler, backGround} = this.props;

   /*  if (this.state.bg === 'bg-danger') {
        throw new Error();
    } */
    
    return (
      // <div className={`col ${this.state.bg}` }>  /* Sans le HOC */ 
      <div className={`col ${backGround}` }> {/* Avec le HOC */}
        {/* <img onClick={this.handleClick} src={vuejs} alt="Vue js" height='80' style={{padding:'10px'}} /> <br /> */}
        <img onClick={clickHandler} src={vuejs} alt="Vue js" height='80' style={{padding:'10px'}} /> <br />
      </div>
    );
  }
}

export default handleClicks(Vuejs);
