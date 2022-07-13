import React from 'react';
import MyPost from 'src/domains/myPost/MyPost';
import DefaultLayout from 'src/domains/layout/DefaultLayout';

const MyPostPage = () => {
  return (
    <DefaultLayout>
      <MyPost />
    </DefaultLayout>
  );
};

export default MyPostPage;
