import { verifyAuthentication } from "@src/utils/utils";
import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

type AuthRequiredRouteProps = {
  children: ReactElement | null;
};

const AuthRequiredRoute: React.FC<AuthRequiredRouteProps> = ({ children }) => {
  const isAuthenticated = verifyAuthentication();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AuthRequiredRoute;
