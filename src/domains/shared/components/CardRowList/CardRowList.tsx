import { useId } from 'react';
import { Notification } from 'src/domains/notification/Notification.model';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { useUserStore } from '../../store/user';
import NotiCard from '../NotiCard/NotiCard';

interface CardRowListProps {
  contents: Notification[];
  loadMore: () => void;
}

const CardRowList = ({ contents, loadMore }: CardRowListProps) => {
  const { containerRef } = useInfiniteScroll({ dataLength: contents?.length, loadMore });
  const { user } = useUserStore();
  const id = useId();

  return (
    <div ref={containerRef}>
      {contents.map((content) =>
        (user?.accountIdx === content.accepterIdx.accountIdx && content.accepterNoticeDelYn === 'N') ||
        (user?.accountIdx === content.requesterIdx.accountIdx && content.requesterNoticeDelYn === 'N') ? (
          <NotiCard key={id} content={content} />
        ) : null,
      )}
    </div>
  );
};

export default CardRowList;
