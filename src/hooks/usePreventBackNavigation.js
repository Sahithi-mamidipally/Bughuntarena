import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const usePreventBackNavigation = (isAuthenticated) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = (event) => {
      // If user is not authenticated and tries to go back
      if (!isAuthenticated) {
        // Prevent the back navigation
        event.preventDefault();
        // Redirect to home
        navigate('/', { replace: true });
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isAuthenticated, navigate]);
};
