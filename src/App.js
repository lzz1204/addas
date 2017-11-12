import React, { Component } from 'react';
import ConNav from "./containers/ConNav";
import Home from "./pages/Home";
import ConLogin from "./containers/ConLogin";
import ConSignup from "./containers/ConSignup";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import "whatwg-fetch";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
          <ConNav />
          <Switch>
            <Route exact path="/login" component={ConLogin}/>
            <Route exact path="/signup" component={ConSignup}/>
            <Route exact path="/" component={Home}/>
          </Switch>
       </div>
      </BrowserRouter>
    );
  }
}
export default App;
