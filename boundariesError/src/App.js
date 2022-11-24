import React, { Component } from "react";
import Reactjs from "./components/Reactjs";
import Vuejs from "./components/Vuejs";
import Laravel from "./components/Laravel";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1 className="m-3">Cliquez sur les Langages</h1>

        <div className="row">
          <ErrorBoundary>
            <Reactjs />
          </ErrorBoundary>

          <ErrorBoundary>
            <Vuejs />
          </ErrorBoundary>

          <ErrorBoundary>
            <Laravel />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
