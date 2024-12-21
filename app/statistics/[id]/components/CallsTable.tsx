import { Button, DatePicker, Space, Table } from 'antd';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { Call } from '@/app/types';
import useCalls from '@/app/hooks/useCalls';
import { columns } from './columns';

dayjs.extend(isBetween);

const CallsTable = () => {
    const { loading, filteredCallsData, onRangeChange, resetDateFilter } =
        useCalls();

    const { RangePicker } = DatePicker;

    return (
        <>
            <Space align="end" style={{ marginBottom: 16 }}>
                <RangePicker format="YYYY-MM-DD" onChange={onRangeChange} />
                <Button type="default" onClick={resetDateFilter}>
                    Reset Date Filter
                </Button>
            </Space>
            <Table<Call>
                rowKey="id"
                dataSource={filteredCallsData}
                columns={columns}
                loading={loading}
                pagination={false}
            />
        </>
    );
};

export default CallsTable;
