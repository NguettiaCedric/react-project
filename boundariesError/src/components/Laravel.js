import React, { Component } from 'react';
import handleClicks from './HandleClicks';
import laravel from "../laravel.png";

class Laravel extends Component {

 /*  state = {
    bg : "",
  }

  handleClick = () => {

    this.setState({
      bg : 'bg-success'
    })

  }
 */
  render() {

    const { clickHandler, backGround} = this.props;

    return (
       // <div className={`col ${this.state.bg}` }>  /* Sans le HOC */
      <div className={`col ${backGround}` }> {/* Avec le HOC */}
        {/* <img  onClick={this.handleClick}  src={laravel} alt="Laravel" height='80' style={{padding:'10px'}} /> <br /> */}
        <img  onClick={clickHandler}  src={laravel} alt="Laravel" height='80' style={{padding:'10px'}} /> <br />
      </div>
    )
  }
}

export default handleClicks(Laravel);
