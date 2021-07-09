import React from "react";
import { Redirect, Route } from "react-router-dom";

function AgentRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const user = localStorage.getItem('user')
  const agent_object = JSON.parse(user);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
          isAuthenticated ? <Component {...props} agent={agent_object} /> : <Redirect to="/agent-login" />
      }
    />
  );
}

export default AgentRoute;
