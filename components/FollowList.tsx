import { StopOutlined } from '@ant-design/icons';
import { Button, Card, List } from 'antd';
import React, { FC } from 'react';

export interface FollowProps {
  nickname: string;
}

interface FollowListProps {
  title: string;
  data: FollowProps[];
}

export const FollowList: FC<FollowListProps> = ({ title, data }) => {
  return (
    <List
      header={title}
      style={{
        marginBottom: 20,
      }}
      grid={{
        gutter: 4,
        xs: 2,
        md: 3,
      }}
      size='small'
      loadMore={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '12px',
          }}>
          <Button>More...</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => {
        return (
          <List.Item>
            <Card actions={[<StopOutlined key={1} />]}>
              <Card.Meta description={item.nickname} />
            </Card>
          </List.Item>
        );
      }}
    />
  );
};

export default null;
