import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isConnected } from "../Services/mysession";

export const ProtectedRoutes = ({ component: Component, ...rest }) => {
  console.log("acaaa",isConnected)
  return (
    <Route {...rest}> {isConnected ? <Component/> : <Navigate to= "/"/>}</Route>
  );
};

