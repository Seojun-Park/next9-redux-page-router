import React from 'react';
import { Form, Input } from 'antd';

export const NicknameEditform = () => {
  const [form] = Form.useForm();

  const onSubmit = () => {};

  return (
    <Form
      form={form}
      onFinish={onSubmit}>
      <Form.Item>
        <Input.Search
          addonBefore='Nickname'
          enterButton='Edit'
        />
      </Form.Item>
    </Form>
  );
};

export default null;
