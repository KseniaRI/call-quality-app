'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../AuthContext';
import LoginForm from './components/loginForm/LoginForm';

const LoginPage = () => {
    const { isAuthenticated, operatorId } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (isAuthenticated) {
            router.push(`/statistics/${operatorId}`);
        }
    }, [isAuthenticated]);
    return (
        <main>
            <LoginForm />
        </main>
    );
};

export default LoginPage;
