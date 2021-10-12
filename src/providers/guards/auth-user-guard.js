import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function AuthUserGuard({user, type, token, isLoading, setIsLoading, component: Component, ...restOfProps}) {
  
  return (
      <Route
        {...restOfProps}
        render={(props) =>
                user 
                
                ?
                
                    <Component {...props} token={token} status={type} isLoading={isLoading} setIsLoading={setIsLoading} isLoggedIn={!!user} user={user} />
                
                :

                <Redirect to="/login" />
        }/>
  );
}

