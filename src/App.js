import React from "react";
import { FooterContainer } from "./containers/footer";
import { TermsOfCondition } from "./containers/TermsOfCondition";
import { PrivacyPolicy } from "./containers/PrivacyPolicy";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
        <Route path="/TermsOfCondition" component={TermsOfCondition} />
      </Switch>
      <FooterContainer />
    </Router>
  );
}

export default App;
