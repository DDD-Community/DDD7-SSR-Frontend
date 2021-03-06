import React from 'react';
import DefaultLayout from 'src/domains/layout/DefaultLayout';
import Author from 'src/domains/author/Author';

const AccountPage = () => {
  return (
    <DefaultLayout>
      <Author />
    </DefaultLayout>
  );
};

export default AccountPage;
