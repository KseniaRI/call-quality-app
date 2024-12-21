import { ReactNode } from 'react';

export interface AuthContextType {
    isAuthenticated: boolean;
    operatorId: string | null;
    login: (operatorId: string) => void;
    logout: () => void;
}
export interface FieldType {
    email: string;
    password: string;
}
export interface FieldTypeReset {
    email: string;
    password: string;
    confirmPassword: string;
}
export interface Operator {
    id: string;
    name: string;
    email: string;
    password: string;
}
export interface LinkBtnProps {
    children: ReactNode;
    type: 'link' | 'default';
    path?: string;
    htmlType?: 'button' | 'submit';
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
}

export interface Call {
    id: string;
    operatorId: string;
    operatorName: string;
    date: string;
    rating: number;
    duration: number;
    callType: 'Inbound' | 'Outbound';
    comment: string;
}
