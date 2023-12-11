import React, { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "@src/store";

import withAuthCheck from "./withAuthCheck";

const LoginPage = lazy(() => import("@src/pages/LoginPage"));

const LoginPageWithAuthCheck = withAuthCheck(LoginPage);

const AuthRoutes = () => {
	const isAuthenticated = useSelector((state: RootState) => state.auth.authSlice.isLoggedIn);
	return	<>
		<Route path="/" element={isAuthenticated ? <Navigate to="/dashboard"/> : <LoginPageWithAuthCheck />} />
		<Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard"/> : <LoginPageWithAuthCheck />} />
	</>;
};

export default AuthRoutes;
