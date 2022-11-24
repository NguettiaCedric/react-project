import React, { Component } from 'react';
import handleClicks from './HandleClicks';
import reactjs from "../reactjs.png";


class Reactjs extends Component {

  /* state = {
    bg : "",
  }

  handleClick = () => {

    this.setState({
      bg : 'bg-success'
    })

  } */

  render() {
    
    const { clickHandler, backGround} = this.props;
    
    return (
      // <div className={`col ${this.state.bg}` }>  /* Sans le HOC */
      <div className={`col ${backGround}` }> {/* Avec le HOC */}
        {/* <img onClick={this.handleClick} src={reactjs}  alt='React js' height='80' style={{padding:'10px'}}/> <br /> */}
        <img onClick={clickHandler} src={reactjs}  alt='React js' height='80' style={{padding:'10px'}}/> <br />
      </div>
    )
  }
}

export default handleClicks(Reactjs)


