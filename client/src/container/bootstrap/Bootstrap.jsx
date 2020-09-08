import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Master from "../../pages/Master";
import Detail from "../../pages/Detail";
import NotFound from "../../pages/NotFound";
import Header from "../header/Header";

export default function Bootstrap() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path="/items/:id">
            <Detail />
          </Route>
          <Route path="/items">
            <Master />
          </Route>
          <Route path="/:id">
            <NotFound />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}
