'use client';
import { LoginOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import Btn from './components/buttons/Btn';
import Logo from './components/logo/Logo';
import { useAuth } from './AuthContext';

export default function Home() {
    const { isAuthenticated } = useAuth();
    return (
        <main>
            <Space direction="vertical" align="center" size={50}>
                <Logo />
                {!isAuthenticated && (
                    <Btn type="link" path="./login">
                        <LoginOutlined />
                        Login
                    </Btn>
                )}
            </Space>
        </main>
    );
}
