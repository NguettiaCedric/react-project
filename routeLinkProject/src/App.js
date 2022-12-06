import Menu from "./Components/Menu";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Docs from "./Components/Docs";
import Tutoriel from "./Components/Tutoriels";
import Community from "./Components/Community";
import ErrorPage from "./Components/ErrorPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter className="App">
      <Menu />

      <Switch>
        <Route exact path="/" component={Docs} />
        {/* <Route path="/tutoriel" component={Tutoriel} /> */}

        {/* <Route path="/tutoriel" render={ () => ()} /> */}

        <Route  path="/community/" component={Community} />
        <Route component={ErrorPage} />
        
      </Switch>

      {/* <Docs />
      <Tutoriel />
      <Community />  */}
      
    </BrowserRouter>
  );
}

export default App;
