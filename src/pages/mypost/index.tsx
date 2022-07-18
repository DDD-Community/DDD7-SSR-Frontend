import React from 'react';
import MyPost from 'src/domains/myPost/MyPost';
import DefaultLayout from 'src/domains/layout/DefaultLayout';
import withAuth from 'src/domains/shared/hooks/withAuth';

const MyPostPage = () => {
  return (
    <DefaultLayout>
      <MyPost />
    </DefaultLayout>
  );
};

export default withAuth(MyPostPage);
