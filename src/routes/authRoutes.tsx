import React from "react";
import { Route } from "react-router-dom";

import LoginPage from "@src/pages/LoginPage";
import withAuthCheck from "./withAuthCheck";

const LoginPageWithAuthCheck = withAuthCheck(LoginPage);

const AuthRoutes = () => [
	<Route key="root" path="/" element={<LoginPageWithAuthCheck />} />,
	<Route key="login" path="/login" element={<LoginPageWithAuthCheck />} />
];

export default AuthRoutes;
