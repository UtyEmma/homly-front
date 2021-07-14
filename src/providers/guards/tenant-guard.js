import React from "react";
import { Redirect, Route } from "react-router-dom";

function TenantRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const userType = localStorage.getItem('type');

  return (
    <Route
      {...restOfProps}
      render={(props) =>
          isAuthenticated && userType === 'tenant' 
                        ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default TenantRoute;
