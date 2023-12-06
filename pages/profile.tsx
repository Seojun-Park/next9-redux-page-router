import React from 'react';
import Head from 'next/head';
import {
  AppLayout,
  FollowList,
  FollowProps,
  NicknameEditform,
} from '../components';

const Profile = () => {
  const followings: FollowProps[] = [
    { nickname: 'John' },
    { nickname: 'James' },
    { nickname: 'doe' },
  ];

  const followers: FollowProps[] = [
    { nickname: 'John follower' },
    { nickname: 'James follower' },
    { nickname: 'doe follower' },
  ];
  return (
    <div>
      <Head>
        <title>Profile | Next Tweet</title>
      </Head>
      <AppLayout>
        <NicknameEditform />
        <FollowList
          title='Following'
          data={followings}
        />
        <FollowList
          title='Follower'
          data={followers}
        />
      </AppLayout>
    </div>
  );
};

export default Profile;
