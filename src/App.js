import React from "react";
import "./App.css";

//REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//COMPONENTS
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
