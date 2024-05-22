import React from 'react';
import { Navigate } from 'react-router-dom';
function ProtectedRoute({ element, error }) {
   let token = localStorage.getItem('token');
   // if (!token) {
   //    error();
   //    return <Navigate to="/login" replace />;
   // }
   return element;
}

export default ProtectedRoute;
