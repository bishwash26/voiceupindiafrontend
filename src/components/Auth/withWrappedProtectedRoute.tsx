import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const withProtectedRoute = (WrappedComponent: React.ComponentType<any>) => {
  //@ts-ignore
  return (props) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      // If the user is not authenticated, redirect to the login page
      if (!user) {
        router.push('/login');
      }
    }, [user, router]);

    // If the user is authenticated, render the WrappedComponent
    // Otherwise, render null while the redirection is in progress
    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default withProtectedRoute;