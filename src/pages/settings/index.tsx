import React from 'react';
import DefaultLayout from 'src/domains/layout/DefaultLayout';
import Settings from 'src/domains/settings/Settings';
import withAuth from 'src/domains/shared/hooks/withAuth';

const SettingsPage = () => {
  return (
    <DefaultLayout>
      <Settings />
    </DefaultLayout>
  );
};

export default withAuth(SettingsPage);
