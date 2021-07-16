import React from "react";
import { Redirect, Route } from "react-router-dom";

function TenantRoute({ component: Component, ...restOfProps }) {
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
                        ? <Component {...props} isLoggedIn={isAuthenticated} user={user}/> : <Redirect to="/login" />
      }
    />
  );
}

export default TenantRoute;
