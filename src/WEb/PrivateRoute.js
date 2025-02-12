import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/screen3" />;
  }
  
  return children; // Render protected page (Admin) if authenticated
};
