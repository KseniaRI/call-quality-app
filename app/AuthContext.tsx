'use client';
import React, {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useContext,
} from 'react';
import { AuthContextType } from './types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [operatorId, setOperatorId] = useState<string | null>(null);

    useEffect(() => {
        const savedOperatorId = localStorage.getItem('operatorId');
        if (savedOperatorId) {
            setOperatorId(savedOperatorId);
            setIsAuthenticated(true);
        }
    }, []);

    const login = (operatorId: string) => {
        localStorage.setItem('operatorId', operatorId);
        setOperatorId(operatorId);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('operatorId');
        setOperatorId(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, operatorId, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
