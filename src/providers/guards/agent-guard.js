import React from "react";
import { Redirect, Route } from "react-router-dom";

function AgentRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const user = localStorage.getItem('user')
  const type = localStorage.getItem('type');
  const agent = JSON.parse(user);
  let auth = false;

  if(isAuthenticated && type){ auth = true; }

  return (
    <Route
      {...restOfProps}
      render={({...props}) =>
        isAuthenticated && type === 'agent' 
          ? <Component {...props} status={type} agent={agent} /> : <Redirect to="/agent-login" />
      }
    />
  );
}

export default AgentRoute;
