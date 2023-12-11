import React, { FC } from 'react';
import { PostProps } from '../reducer/post';

interface PostCardProps {
  post: PostProps['mainPosts'][0];
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
  return <div>test</div>;
};

export default null;
