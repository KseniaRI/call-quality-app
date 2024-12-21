import { BarChartOutlined } from '@ant-design/icons';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logoWrap}>
            <BarChartOutlined className={styles.logoIcon} />
            <h1 className={styles.logoTitle}>Call quality statistics</h1>
        </div>
    );
};

export default Logo;
