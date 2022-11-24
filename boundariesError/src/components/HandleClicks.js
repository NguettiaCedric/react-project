import React, { Component } from "react";

const handleClicks = (WrapperComponent) => {
  class HandleClicks extends Component {
    state = {
      bg: "",
    };

    handleClick = () => {
      if (WrapperComponent.name === "Vuejs") {
        this.setState({
          bg: "bg-danger",
        });
      } else {
        this.setState({
          bg: "bg-success",
        });
      }
    };

    render() {
      if (this.state.bg === "bg-danger") {
        throw new Error();
      }

      return (
        <WrapperComponent
          clickHandler={this.handleClick}
          backGround={this.state.bg}
        />
      );
    }
  }

  return HandleClicks;
};

export default handleClicks;
