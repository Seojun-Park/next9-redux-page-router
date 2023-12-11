import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducer/user';

type FieldType = {
  userId?: string;
  password?: string;
};

export const LoginForm: FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    const { userId, password }: FieldType = form.getFieldsValue();
    dispatch(
      loginAction({
        userId,
        password,
      })
    );
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
