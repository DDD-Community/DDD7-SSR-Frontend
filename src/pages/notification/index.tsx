import DefaultLayout from 'src/domains/layout/DefaultLayout';
import Notification from 'src/domains/notification/Notification';
import withAuth from 'src/domains/shared/hooks/withAuth';

const NotificationPage = () => {
  return (
    <DefaultLayout>
      <Notification />
    </DefaultLayout>
  );
};

export default withAuth(NotificationPage);
