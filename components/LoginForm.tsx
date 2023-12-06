import React, { Dispatch, FC, SetStateAction, useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';

interface LoginFormProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

type FieldType = {
  userId?: string;
  password?: string;
};

export const LoginForm: FC<LoginFormProps> = ({ setIsLoggedIn }) => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    const { userId, password }: FieldType = form.getFieldsValue();
    setIsLoggedIn(true);
  };

  return (
    <Form
      form={form}
      onFinish={onSubmit}>
      <Form.Item<FieldType>
        label={'User-ID'}
        name='userId'
        required>
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label={'Password'}
        name='password'
        required>
        <Input type='password' />
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'>
          Login
        </Button>
        <Link href='/signup'>
          <a>
            <Button>Sign up</Button>
          </a>
        </Link>
      </Form.Item>
    </Form>
  );
};
