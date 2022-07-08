import React from 'react';
import MyPost from 'src/domains/author/myPost/MyPost';
import DefaultLayout from 'src/domains/layout/DefaultLayout';

const AuthorMyPostPage = () => {
  return (
    <DefaultLayout>
      <MyPost />
    </DefaultLayout>
  );
};

export default AuthorMyPostPage;
