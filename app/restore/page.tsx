'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/AuthContext';
import ResetPasswordForm from './components/ResetPasswordForm';

const RestorePage = () => {
    const { isAuthenticated, operatorId } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            router.push(`/statistics/${operatorId}`);
        }
    }, [isAuthenticated]);

    return (
        <main>
            <ResetPasswordForm />
        </main>
    );
};

export default RestorePage;
