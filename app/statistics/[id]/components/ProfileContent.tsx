import { Operator } from '@/app/types';
import { Space } from 'antd';
import CallsTable from './CallsTable';

const ProfileContent = ({ operator }: { operator: Operator | null }) => {
    return (
        <Space direction="vertical">
            <h2>{operator?.name}</h2>
            <h1>Statistics page</h1>
            <CallsTable />
        </Space>
    );
};

export default ProfileContent;
