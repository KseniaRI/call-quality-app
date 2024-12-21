import { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import { Call } from '../types';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

const useCalls = () => {
    const { operatorId } = useAuth();
    const [loading, setLoading] = useState(false);
    const [callsData, setCallsData] = useState<Call[]>([]);
    const [filteredCallsData, setFilteredCallsData] = useState<Call[]>([]);

    const onRangeChange = (dates: null | (Dayjs | null)[]) => {
        if (dates && dates[0] && dates[1]) {
            const startDate = dayjs(dates[0]);
            const endDate = dayjs(dates[1]);
            const filteredCalls = callsData.filter(call => {
                const callDate = dayjs(call.date);
                return callDate.isBetween(startDate, endDate, null, '[]');
            });
            setFilteredCallsData(filteredCalls);
        } else {
            setFilteredCallsData(callsData);
        }
    };

    const resetDateFilter = () => {
        setFilteredCallsData(callsData);
    };

    useEffect(() => {
        setLoading(true);
        const getOperatorCalls = async () => {
            try {
                const response = await fetch('/api/calls');
                if (!response.ok) {
                    throw new Error();
                }
                const result = await response.json();
                const calls = result.data.filter(
                    (call: Call) => call.operatorId === operatorId,
                );
                setCallsData(calls);
                setFilteredCallsData(calls);
            } catch (error) {
                console.error('Error getting calls data:', error);
            } finally {
                setLoading(false);
            }
        };
        getOperatorCalls();
    }, [operatorId]);

    return {
        loading,
        filteredCallsData,
        onRangeChange,
        resetDateFilter,
    };
};
export default useCalls;
