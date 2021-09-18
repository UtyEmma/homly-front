import Preloader from "components/preloader/preloader";
import React from "react";
import { Redirect, Route } from "react-router-dom";

function AgentRoute({user, token, type, isLoading, setIsLoading, component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(props) =>
        {return !!user && type === 'agent' 
          ? <Component {...props} token={token} isLoading={isLoading} setIsLoading={setIsLoading} status={type} agent={user} /> : <Redirect to="/agent-login" />}
      }
    />
  );
}

export default AgentRoute;
