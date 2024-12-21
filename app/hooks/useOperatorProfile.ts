import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/AuthContext';
import { Operator } from '@/app/types';

const useOperatorProfile = (id: string) => {
    const { isAuthenticated, operatorId } = useAuth();
    const [operator, setOperator] = useState<Operator | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated || operatorId !== id) {
            router.push('/login');
        }
    }, [router, isAuthenticated, operatorId, id]);

    useEffect(() => {
        const fetchOperator = async () => {
            try {
                const response = await fetch('/api/operators');
                const result = await response.json();
                const operatorEl = result.data.find(
                    (el: Operator) => el.id === id,
                );
                if (!operatorEl) {
                    throw new Error('Operator not found');
                } else {
                    setOperator(operatorEl);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchOperator();
    }, [id]);

    return { operator, isAuthenticated, operatorId };
};

export default useOperatorProfile;
