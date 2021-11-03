import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Confirmation from "./Components/Confirmation";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/contactus">
            <ContactUs />
          </Route>
          <Route exact path="/confirmation">
            <Confirmation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
