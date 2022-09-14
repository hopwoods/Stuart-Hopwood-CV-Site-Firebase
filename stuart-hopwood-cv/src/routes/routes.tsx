import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";
import App from "../App";
import Login from "../pages/login";
import Admin from "../pages/admin/administration";
import NotFoundPage from "../pages/NotFoundPage";
import AdminAboutText from "../pages/admin/admin-about-text";
import AdminSkills from "../pages/admin/admin-skills";

export function AppRoutes() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="#home" element={<App />} />
        <Route path="#about" element={<App />} />
        <Route path="#experience" element={<App />} />
        <Route path="#education" element={<App />} />
        <Route path="/login" element={<Login />} />
        {/* <ProtectedRoute path="/admin" component={Admin} />
        <ProtectedRoute path="/admin/about-text" component={AdminAboutText} />
        <ProtectedRoute path="/admin/skills" component={AdminSkills} /> */}
        <Route path="/404" element={<NotFoundPage />} />
        <Navigate to="/404" replace={true} />
      </Routes>
    </React.Fragment>
  );
}
