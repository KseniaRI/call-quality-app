import { useEffect } from 'react';
import { Form, Input, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import { useLogin } from '@/app/hooks/useLogin';
import Btn from '@/app/components/buttons/Btn';

const LoginForm = () => {
    const [form] = Form.useForm();
    const { Item } = Form;
    const { Password } = Input;
    const values = Form.useWatch([], form);
    const { onSubmit, loading, submittable, validateForm } = useLogin();

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
                Login
            </Title>
            <Form
                form={form}
                name="login"
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
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Password />
                </Item>
                <Item {...tailLayout}>
                    <Space>
                        <Btn
                            type="default"
                            htmlType="submit"
                            disabled={!submittable}
                            loading={loading}
                        >
                            Submit
                        </Btn>

                        <Btn type="link" path="./restore">
                            Forget password?
                        </Btn>
                    </Space>
                </Item>
            </Form>
        </>
    );
};

export default LoginForm;
