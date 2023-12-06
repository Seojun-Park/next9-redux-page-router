import React, { Dispatch, FC, SetStateAction } from 'react';
import { Avatar, Button, Card } from 'antd';

interface UserProfileProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export const UserProfile: FC<UserProfileProps> = ({ setIsLoggedIn }) => {
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
      <Button style={{
        margin: '12px'
      }} onClick={() => setIsLoggedIn(false)}>Log out</Button>
    </Card>
  );
};
