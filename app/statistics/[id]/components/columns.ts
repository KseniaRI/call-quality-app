import dayjs from 'dayjs';

export const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Operator ID',
        dataIndex: 'operatorId',
        key: 'operatorId',
    },
    {
        title: 'Operator Name',
        dataIndex: 'operatorName',
        key: 'operatorName',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
    },
    {
        title: 'Duration (sec)',
        dataIndex: 'duration',
        key: 'duration',
    },
    {
        title: 'Call Type',
        dataIndex: 'callType',
        key: 'callType',
    },
    {
        title: 'Comment',
        dataIndex: 'comment',
        key: 'comment',
    },
];
