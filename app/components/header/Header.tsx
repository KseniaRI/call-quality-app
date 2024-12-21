'use client';
import { BarChartOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useAuth } from '@/app/AuthContext';
import Btn from '../buttons/Btn';
import styles from './Header.module.css';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    return (
        <header className={styles.header}>
            <Link href="/">
                <BarChartOutlined className={styles.logo} />
            </Link>
            {isAuthenticated && (
                <Btn type="default" htmlType="button" onClick={logout}>
                    Logout
                </Btn>
            )}
        </header>
    );
};

export default Header;
