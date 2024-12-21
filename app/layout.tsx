import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from 'next/font/google';
import { AuthProvider } from './AuthContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './globals.css';
import styles from './page.module.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Call Quality',
    description: 'Call quality app',
};

const RootLayout = ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => (
    <html lang="en">
        <body className={inter.className}>
            <AuthProvider>
                <AntdRegistry>
                    <div className={styles.page}>
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </AntdRegistry>
            </AuthProvider>
        </body>
    </html>
);

export default RootLayout;
