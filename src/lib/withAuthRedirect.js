import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const withAuthRedirect = (WrappedComponent, redirectTo = '/dashboard') => {
  const WithAuthRedirect = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get('next-auth.session-token');
      if (token) {
        router.replace(redirectTo);
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  WithAuthRedirect.displayName = `WithAuthRedirect(${getDisplayName(WrappedComponent)})`;

  return WithAuthRedirect;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withAuthRedirect;
