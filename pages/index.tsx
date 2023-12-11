import React from 'react';
import { AppLayout, PostCard, PostForm } from '../components';
import { useSelector } from 'react-redux';
import { ModelProps } from '../reducer';

const Home = () => {
  const { isLoggedIn } = useSelector(
    (state: ModelProps): ModelProps['user'] => state.user
  );
  const { mainPosts } = useSelector(
    (state: ModelProps): ModelProps['post'] => state.post
  );
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post, i) => (
        <PostCard
          key={i}
          post={post}
        />
      ))}
    </AppLayout>
  );
};

export default Home;
