import React from "react";
import { Redirect, Route } from "react-router-dom";

function TenantRoute({isLoading, setIsLoading, component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const userType = localStorage.getItem('type');
  const user_object = JSON.parse(localStorage.getItem('user'));
  let user = null;
  if(isAuthenticated){ user = user_object; }
  
  return (
    <Route
      {...restOfProps}
      render={(props) =>
          isAuthenticated && userType === 'tenant' 
                        ? <Component {...props} isLoading={isLoading} setIsLoading={setIsLoading} isLoggedIn={isAuthenticated}  status={userType} user={user}/> : <Redirect to="/login"  />
      }
    />
  );
}

export default TenantRoute;
