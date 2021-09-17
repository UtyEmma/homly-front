import React from "react";
import { Redirect, Route } from "react-router-dom";

function TenantRoute({user, token, type, isLoading, setIsLoading, component: Component, ...restOfProps }) {
  return (
    <Route
      {...restOfProps}
      render={(props) =>
          type === 'tenant' 
                        ? <Component {...props} token={token} isLoading={isLoading} setIsLoading={setIsLoading} isLoggedIn={!!user}  status={type} user={user}/> : <Redirect to="/login"  />
      }
    />
  );
}

export default TenantRoute;
