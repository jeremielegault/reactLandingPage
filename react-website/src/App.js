import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={"/ContactUs"} component={ContactUs}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
