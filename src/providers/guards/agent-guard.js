import React from "react";
import { Redirect, Route } from "react-router-dom";

function AgentRoute({isLoading, setIsLoading, component: Component, ...props }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const user = localStorage.getItem('user')
  const type = localStorage.getItem('type');
  const agent = JSON.parse(user);

  let auth = false;

  if (isAuthenticated && type) {
    auth = true;
  }

  return (
    <Route
      {...props}
      render={(props) =>
        {return isAuthenticated && type === 'agent' 
          ? <Component {...props} isLoading={isLoading} setIsLoading={setIsLoading} status={type} agent={agent} /> : <Redirect to="/agent-login" />}
      }
    />
  );
}

export default AgentRoute;
