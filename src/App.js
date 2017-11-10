import React, { Component } from 'react';
import AppNav from "./components/AppNav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
          <AppNav />
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
          </Switch>
       </div>
      </BrowserRouter>
    );
  }
}
export default App;
