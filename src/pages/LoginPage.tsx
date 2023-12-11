import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "@src/store";
import Login from "../modules/auth/components/Login/Login";
import Card from "@src/components/Card";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.auth.authSlice.isLoggedIn);

  useEffect(() => {
    if(isLoggedIn){
      navigate("/dashboard", { replace: true });
    }
  }, [isLoggedIn]);

  return (<div className={"container login-container"}><Card isDark={false} height={280}><Login /></Card></div>);
};

export default LoginPage;