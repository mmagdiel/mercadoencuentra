import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Master from "../../pages/Master";
import Detail from "../../pages/Detail";
import NotFound from "../../pages/NotFound";

export default function Bootstrap() {
  return (
    <Router>
      <Switch>
        <Route path="/items/:id">
          <Detail />
        </Route>
        <Route path="/items?search=">
          <Master />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
