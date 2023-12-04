import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "@src/store";

type AuthRequiredRouteProps = {
  children: ReactElement | null;
};

const AuthRequiredRoute: React.FC<AuthRequiredRouteProps> = ({ children }) => {
	const isAuthenticated = useSelector((state: RootState) => state.auth.authSlice.isLoggedIn);

	return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AuthRequiredRoute;
