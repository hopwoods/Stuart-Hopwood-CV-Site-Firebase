import React, { ReactNode } from "react";
import { Routes, Route, Link, Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  user?: any;
  redirectPath: string
  children: ReactNode;
};

export function ProtectedRoute({ user, redirectPath, children }: ProtectedRouteProps) {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <React.Fragment>
    {children}
  </React.Fragment>
};
