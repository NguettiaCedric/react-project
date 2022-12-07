import React, { Component } from "react"
import ProfileData from "./ProfileData";
import profile from "../prof.png";

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.info.name}</h1>
          {/* {  console.log(this.props.info.name)} */}
        <img src={profile} alt="Drico" height={80}  className="mb-3" />
       
        <ProfileData  welcome={this.props.info} />
      </div>
    )
  }
}

export default Profile
