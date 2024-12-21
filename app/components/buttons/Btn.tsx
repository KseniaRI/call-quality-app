import { Button } from 'antd';
import styles from './Buttons.module.css';
import { LinkBtnProps } from '@/app/types';

const Btn = ({
    children,
    type,
    path,
    htmlType,
    disabled,
    loading,
    onClick,
}: LinkBtnProps) => {
    return (
        <Button
            type={type}
            href={path}
            htmlType={htmlType}
            className={styles.button}
            disabled={disabled}
            loading={loading}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default Btn;
