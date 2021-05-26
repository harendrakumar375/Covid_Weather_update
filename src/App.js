import React from "react";
import Weather from "./Weather";
import Covid from "./Covid";
import Home from "./Home";
import Menu from "./Menu";

import {Route, Switch} from "react-router-dom";
const App=()=>{
  return (
      <>
      <Menu />
      <h1>Welcome</h1>
      <h2>▶️ Get latest update</h2>
      <Switch>
           
          
            <Route  exact path="/" component={Home}  />     
            <Route  exact path="/Weather" component={Weather} />
            <Route  exact path="/Covid" component={Covid} />
            
            
        </Switch>
      </>
  )

};

export default App;