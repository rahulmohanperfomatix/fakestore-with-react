import React, { ComponentType, FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "@src/store";

type WithAuthCheckProps = object;

const withAuthCheck = <P extends WithAuthCheckProps>(WrappedComponent: ComponentType<P>) => {
  const WithAuthCheckComponent: FC<P> = (props) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.authSlice.isLoggedIn);

    if (isLoggedIn) {
      return <Navigate to="/dashboard" replace />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthCheckComponent;
};

export default withAuthCheck;
