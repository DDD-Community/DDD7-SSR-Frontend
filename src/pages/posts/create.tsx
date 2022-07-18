import React from 'react';
import PostCreate from 'src/domains/posts/create/PostCreate';
import DefaultLayout from 'src/domains/layout/DefaultLayout';
import withAuth from 'src/domains/shared/hooks/withAuth';

function PostCreatePage() {
  return (
    <DefaultLayout>
      <PostCreate />
    </DefaultLayout>
  );
}

export default withAuth(PostCreatePage);
