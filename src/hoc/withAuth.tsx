import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUserStore } from '@/store/userStore';

// HOC untuk autentikasi
const withAuth = (Component: React.FC) => {
  return (props: any) => {
    const router = useRouter();
    const { user } = useUserStore();

    // Cek apakah user ada, jika tidak redirect ke login
    useEffect(() => {
      if (!user) {
        router.push('/');
      }
    }, [user, router]);

    // Hanya render komponen jika user ada
    return user ? <Component {...props} /> : null;
  };
};

export default withAuth;
