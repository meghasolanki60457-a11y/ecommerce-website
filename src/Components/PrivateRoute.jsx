import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("token"); // ya koi auth logic

  return isAuth ? children : <Navigate to="/login" />;
}