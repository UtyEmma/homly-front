import React from "react";
import { Route } from "react-router-dom";

function UserRoute({user, type, token, isLoading, setIsLoading, component: Component, ...restOfProps}) {
  
  return (
      <Route
        {...restOfProps}
        render={(props) =>
              <Component {...props} token={token} status={type} isLoading={isLoading} setIsLoading={setIsLoading} isLoggedIn={!!user} user={user} />
        }/>
  );
}

export default UserRoute;
