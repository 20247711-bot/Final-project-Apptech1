import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const loggedIn = localStorage.getItem("loggedIn");

  return loggedIn === "true"
    ? children
    : <Navigate to="/login" />;
};

export default ProtectedRoute;