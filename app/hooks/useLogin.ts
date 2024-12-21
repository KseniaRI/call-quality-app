import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormInstance, message } from 'antd';
import { useAuth } from '../AuthContext';
import { FieldType, Operator } from '../types';

export const useLogin = () => {
    const router = useRouter();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [submittable, setSubmittable] = useState(false);

    const onSubmit = async (values: FieldType, form: FormInstance) => {
        setLoading(true);
        try {
            const response = await fetch('/api/operators');
            const result = await response.json();
            const operator = result.data.find(
                (el: Operator) =>
                    el.email === values.email &&
                    el.password === values.password,
            );
            if (!operator) {
                const msg = 'Operator not found';
                message.error(msg);
                throw new Error(msg);
            } else {
                login(operator.id);
                router.push(`./statistics/${operator.id}`);
            }
            form.resetFields();
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    const validateForm = (form: FormInstance) => {
        form.validateFields({ validateOnly: true })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    };

    return {
        onSubmit,
        loading,
        submittable,
        validateForm,
    };
};
