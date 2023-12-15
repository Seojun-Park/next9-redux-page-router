import React, { FC } from 'react';
import { PostProps } from '../reducer/post';
import { Avatar, Button, Card } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { ModelProps } from '../reducer';
import { PostImages } from './PostImages';

interface PostCardProps {
  post: PostProps['mainPosts'][0];
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
  const { data } = useSelector(
    (state: ModelProps): ModelProps['user'] => state.user
  );

  return (
    <div
      style={{
        marginBottom: '20px',
      }}>
      <Card
        cover={post.images[0] && <PostImages images={post.images} />}
        actions={[
          <Button key={'1'}>First Button</Button>,
          <Button key={'heart'}>
            <HeartOutlined />
          </Button>,
        ]}>
        <Card.Meta
          title={post.user.nickName}
          description={post.content}
          avatar={<Avatar>{post.user.nickName[0]}</Avatar>}
        />
      </Card>
    </div>
  );
};

export default null;
