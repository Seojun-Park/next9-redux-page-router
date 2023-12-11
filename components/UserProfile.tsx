import React, { FC } from 'react';
import { Avatar, Button, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducer/user';

export const UserProfile: FC = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <Card
      actions={[
        <div key={'tweet'}>
          Tweet
          <br />0
        </div>,
        <div key={'following'}>
          Following
          <br />0
        </div>,
        <div key={'follwer'}>
          Follower
          <br />0
        </div>,
      ]}>
      <Card.Meta
        avatar={<Avatar>U</Avatar>}
        title='User'
      />
      <Button
        style={{
          margin: '12px',
        }}
        onClick={onLogout}>
        Log out
      </Button>
    </Card>
  );
};
