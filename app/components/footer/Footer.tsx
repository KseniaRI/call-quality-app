import { GithubOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link
                href="https://github.com/KseniaRI?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GithubOutlined />
                Ksenia Pilshchikova
            </Link>
        </footer>
    );
};

export default Footer;
