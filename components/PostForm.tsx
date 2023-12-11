import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../reducer/post';

interface FieldType {
  content?: string;
  images?: string;
}

export const PostForm: FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = () => {
    const { content, images }: FieldType = form.getFieldsValue();
    console.log(content);
    if (content?.trim() === undefined) {
      alert('Please enter any content ');
      return;
    }
    dispatch(addPost);
    form.setFieldValue('content', '');
  };

  return (
    <Form
      style={{
        margin: '10px 0 20px',
      }}
      form={form}
      encType='multipart/form-data'
      onFinish={onFinish}>
      <Form.Item<FieldType> name='content'>
        <Input.TextArea placeholder='What do you think?' />
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default null;
