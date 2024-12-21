'use client';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import useOperatorProfile from '@/app/hooks/useOperatorProfile';
import ProfileContent from './components/ProfileContent';

const Profile = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const { operator, isAuthenticated, operatorId } = useOperatorProfile(id);

    return isAuthenticated && operatorId === id ? (
        <ProfileContent operator={operator} />
    ) : (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 72 }} spin />} />
    );
};

export default Profile;
