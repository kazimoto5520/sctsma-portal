"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {
    const WithAuthComponent = (props) => {
        const [accessToken, setAccessToken] = useState(null);
        const router = useRouter();

        useEffect(() => {
            if (typeof window !== 'undefined') {
                const token = Cookies.get("next-auth.session-token");
                setAccessToken(token);

                if (!token) {
                    router.push('/signin'); 
                }
            }
        }, [router]);

        if (!accessToken) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    WithAuthComponent.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

    return WithAuthComponent;
};

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;
