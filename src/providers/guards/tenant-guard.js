import React, { useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

function TenantRoute({user, token, type, isLoading, setIsLoading, component: Component, ...restOfProps }) {
  const history = useHistory()
  
  useEffect(() => {
    if(user && !user.isVerified && window.location.href !== '/verify'){
      return history.push('/verify')
    }
  })
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
