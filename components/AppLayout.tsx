import React, { FC, PropsWithChildren, useState } from 'react';
import Link from 'next/link';
import { Col, Input, Menu, MenuProps, Row } from 'antd';
import styled from 'styled-components';
import { UserProfile } from './UserProfile';
import { LoginForm } from './LoginForm';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const items: MenuProps['items'] = [
  {
    type: 'group',
    label: (
      <Link href={'/'}>
        <a>Home</a>
      </Link>
    ),
  },
  {
    type: 'group',
    label: (
      <Link href={'/profile'}>
        <a>Profile</a>
      </Link>
    ),
  },
  {
    type: 'group',
    label: <SearchInput />,
  },
  {
    type: 'group',
    label: (
      <Link href={'/signup'}>
        <a>Signup</a>
      </Link>
    ),
  },
];

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div>
      <Menu
        mode='horizontal'
        items={items}
      />
      <Row
        style={{
          padding: '12px',
        }}
        gutter={8}>
        <Col
          xs={24}
          md={8}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col
          xs={24}
          md={12}>
          {children}
        </Col>
        <Col
          xs={24}
          md={8}>
          <Link href='https://jinpark.dev/'>
            <a
              target='_blank'
              rel='noreferrer'>
              To Blog
            </a>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
