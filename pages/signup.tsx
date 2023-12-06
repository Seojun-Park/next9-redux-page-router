import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { AppLayout } from '../components';
import { Button, Checkbox, Form, Input, Typography } from 'antd';

type FieldType = {
  userId: string;
  userName: string;
  password: string;
  confirmPassword: string;
  confirmTerm: boolean;
};

const Signup = () => {
  const [form] = Form.useForm();
  const password = Form.useWatch('password', form);
  const confirmPassword = Form.useWatch('confirmPassword', form);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [termError, setTermError] = useState<boolean>(false);

  const onSubmit = () => {
    const {
      userId,
      userName,
      password,
      confirmPassword,
      confirmTerm,
    }: FieldType = form.getFieldsValue();

    if (confirmPassword !== password) {
      return setPasswordError(true);
    }

    if (!confirmTerm) {
      return setTermError(true);
    }
  };

  useEffect(() => {
    if (
      password !== confirmPassword &&
      typeof confirmPassword !== 'undefined'
    ) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [password, confirmPassword]);

  return (
    <AppLayout>
      <Head>
        <title>Sign Up | Next Tweet</title>
      </Head>
      <Form
        form={form}
        onFinish={onSubmit}>
        <Form.Item<FieldType>
          label='ID'
          name='userId'>
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label='Nickname'
          name='userName'>
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label='Password'
          name='password'>
          <Input type='password' />
        </Form.Item>
        <Form.Item<FieldType>
          label='Confirm Password'
          name='confirmPassword'>
          <div>
            <Input type='password' />
            {passwordError && (
              <Typography.Text
                style={{
                  color: 'red',
                }}>
                Password not match
              </Typography.Text>
            )}
          </div>
        </Form.Item>
        <Form.Item<FieldType>
          name='confirmTerm'
          valuePropName='checked'>
          <div>
            <Checkbox>I agree term of policy</Checkbox>
            <br />
            {termError && (
              <Typography.Text style={{ color: 'red' }}>
                Please agree the term of policy
              </Typography.Text>
            )}
          </div>
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </AppLayout>
  );
};

export default Signup;
