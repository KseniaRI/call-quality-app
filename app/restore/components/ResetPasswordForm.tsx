import { useEffect } from 'react';
import { Form, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import Btn from '@/app/components/buttons/Btn';
import { usePasswordReset } from '@/app/hooks/usePasswordReset';
import { StoreValue } from 'antd/es/form/interface';

const ResetPasswordForm = () => {
    const [form] = Form.useForm();
    const { Item } = Form;
    const { Password } = Input;
    const values = Form.useWatch([], form);
    const { onSubmit, loading, submittable, validateForm } = usePasswordReset();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    useEffect(() => {
        validateForm(form);
    }, [form, values]);

    return (
        <>
            <Title level={1} style={{ textAlign: 'center' }}>
                Reset password
            </Title>
            <Form
                form={form}
                name="restore"
                {...layout}
                style={{ width: 420 }}
                onFinish={values => {
                    onSubmit(values, form);
                }}
            >
                <Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input valid email!',
                            type: 'email',
                        },
                    ]}
                >
                    <Input />
                </Item>
                <Item
                    label="New password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input new password!',
                        },
                    ]}
                >
                    <Password />
                </Item>
                <Item
                    label="Confirm password"
                    name="confirmPassword"
                    rules={[
                        {
                            required: true,
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue('password') === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        'The new password that you entered do not match!',
                                    ),
                                );
                            },
                        }),
                    ]}
                >
                    <Password />
                </Item>
                <Item {...tailLayout}>
                    <Btn
                        type="default"
                        htmlType="submit"
                        disabled={!submittable}
                        loading={loading}
                    >
                        Change password
                    </Btn>
                </Item>
            </Form>
        </>
    );
};
export default ResetPasswordForm;
