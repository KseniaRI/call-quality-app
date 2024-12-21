import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormInstance, message } from 'antd';
import { FieldTypeReset } from '../types';

export const usePasswordReset = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [submittable, setSubmittable] = useState(false);

    const onSubmit = async (values: FieldTypeReset, form: FormInstance) => {
        setLoading(true);
        try {
            const response = await fetch('/api/operators', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: values.email,
                    newPassword: values.password,
                }),
            });

            if (response.ok) {
                message.success('Password changed successfully');
                router.push('./login');
            } else {
                const msg = 'Failed to update password';
                message.error(msg);
                throw new Error(msg);
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
