import React from "react";
import About from "./About";
import Contact from "./Contact";
import Data from "./Data";
import Menu from "./Menu";

import {Route, Switch} from "react-router-dom";
const Router=()=>{
  return (
      <>
      <Menu />
      <Switch>
            <Route  exact path="/About" component={About} />
            <Route  exact path="/Contact" component={Contact} />
            <Route  component={Data}  />
            
        </Switch>
      </>
  )

};

export default Router;