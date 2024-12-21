import { Operator } from '@/app/types';
import { Space } from 'antd';

const ProfileContent = ({ operator }: { operator: Operator | null }) => {
    return (
        <Space direction="vertical">
            <h2>{operator?.name}</h2>
            <h1>Statistics page</h1>
        </Space>
    );
};

export default ProfileContent;
