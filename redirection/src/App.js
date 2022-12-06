import Menu from "./Components/Menu";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Docs from "./Components/Docs";
import Tutoriel from "./Components/Tutoriels";
import Community from "./Components/Community";
import Profile from "./Components/Profile";
import ErrorPage from "./Components/ErrorPage";
import "./App.css";
import React from "react";

class App extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
       underConst : {
        Docs : false,
        Tutoriel : true,
        Community : false,
       }
    }
  }
  

  render(){

    return (
      <BrowserRouter className="App">
        <Menu />
    
        <Switch>
          <Route exact path="/" component={Docs} />
          <Route path="/tutoriel" component={Tutoriel} />
          <Route path="/community" component={Community} />

          
          {/* <Route path="/tutoriel"  render={() => (
              this.state.underConst.Tutoriel ? (<Redirect to="/" />) : (< Tutoriel/>)
          )}/> */}

          <Route path="/users/:profileId" component={Profile} />
          
          <Route component={ErrorPage} />
        </Switch>
  
        {/* <Docs />
        <Tutoriel />
        <Community />  */}
      </BrowserRouter>
    );
  }
}

export default App;
