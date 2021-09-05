import React from "react";
import { Redirect, Route } from "react-router-dom";

function UserRoute({ isLoading, component: Component, ...restOfProps}) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const userType = isAuthenticated ? localStorage.getItem('type') : "guest";
  const user_object = JSON.parse(localStorage.getItem('user'));
  let user = null;

  if(isAuthenticated){ user = user_object; }

  return (
    <Route
      {...restOfProps}
      render={(props) =>
            <Component {...props} status={userType} isLoading={isLoading} isLoggedIn={isAuthenticated} user={user} />
      }
    />
  );
}

export default UserRoute;
