import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { Notification } from 'src/domains/notification/Notification.model';
import { useDeleteNotiMutation } from 'src/domains/notification/Notification.queries';
import { Color, FontSize } from '../../constants';
import { useAcceptCrewRequireMutation } from '../../queries/crews';
import { useUserStore } from '../../store/user';
import { formatDate } from '../../utils/date';

interface NotiCardProps {
  content: Notification;
}

const NotiCard = ({ content }: NotiCardProps) => {
  const queryClient = useQueryClient();
  const { user } = useUserStore();
  const router = useRouter();

  const acceptCrewRequire = useAcceptCrewRequireMutation();
  const deleteNotiMutation = useDeleteNotiMutation();

  const handleAcceptCrew = (requesterIdx: number, accepterIdx: number) => {
    if (user?.accountIdx) {
      acceptCrewRequire.mutate(
        { requesterIdx, accepterIdx },
        {
          onSuccess: () => {
            toast.success('크루 승인 완료되었습니다.');
            queryClient.invalidateQueries(['GetNotification']);
          },
        },
      );
    }
  };

  const handleCloseNoti = (requesterIdx: number, accepterIdx: number) => {
    if (user?.accountIdx) {
      deleteNotiMutation.mutate(
        { requesterIdx, accepterIdx },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(['GetNotification']);
          },
        },
      );
    }
  };

  return (
    <div style={{ position: 'relative', marginBottom: '18px' }}>
      {user?.accountIdx == content.accepterIdx.accountIdx && content.accepterNoticeCheckYn == 'N' && (
        <div css={notiCheckMark}></div>
      )}
      {user?.accountIdx == content.requesterIdx.accountIdx && content.requesterNoticeCheckYn == 'N' && (
        <div css={notiCheckMark}></div>
      )}
      <div css={notiCardContainer}>
        <div
          css={notiCloseIconBox}
          onClick={() => handleCloseNoti(content.requesterIdx.accountIdx, content.accepterIdx.accountIdx)}
        >
          <Image src="/ic_close.png" alt="close_icon" width={34} height={34} />
        </div>
        <div css={notiProfileCard} onClick={() => router.push(`/author/${content.requesterIdx.accountIdx}`)}>
          {user?.accountIdx === content.accepterIdx.accountIdx && (
            <>
              <div css={notiProfilePic}>
                {content.requesterIdx.profileImg ? (
                  <div css={UserProfileImgCircle}>
                    <Image src={content.requesterIdx.profileImg} width={32} height={32} alt="requester Img" />
                  </div>
                ) : (
                  <Image src="./defaultProfileImage.png" width={40} height={40} alt="anonymous Img" />
                )}
              </div>
              <div>
                <div css={notiName}>{content.requesterIdx.name}</div>
                <div css={notiDate}>{formatDate(content.requestDateTime)}</div>
              </div>
            </>
          )}
        </div>
        {user?.accountIdx === content.accepterIdx.accountIdx && (
          <>
            {content.accepted === 'W' && (
              <div css={notiMsg}>{`${content.requesterIdx.name} 님의 크루 요청이 도착했습니다.`}</div>
            )}
            {content.accepted === 'Y' && (
              <div css={notiMsg}>{`${content.requesterIdx.name} 님의 크루 요청을 승인했습니다.`}</div>
            )}
            {content.accepted === 'N' && (
              <div css={notiMsg}>{`${content.requesterIdx.name} 님이 크루 요청을 거절했습니다.`}</div>
            )}
          </>
        )}
        {user?.accountIdx === content.requesterIdx.accountIdx && (
          <>
            {content.accepted === 'W' && (
              <div css={notiMsg}>{`${content.accepterIdx.name} 님에게 크루 요청을 보냈습니다.`}</div>
            )}
            {content.accepted === 'Y' && (
              <div css={notiMsg}>{`${content.accepterIdx.name} 님이 크루 요청을 승인했습니다.`}</div>
            )}
            {content.accepted === 'N' && (
              <div css={notiMsg}>{`${content.accepterIdx.name} 님의 크루 요청을 거절했습니다.`}</div>
            )}
          </>
        )}

        {user?.accountIdx === content.accepterIdx.accountIdx && content.accepted === 'W' && (
          <div css={notiBtnContainer}>
            <div css={notiAddCrew} onClick={() => handleAcceptCrew(content.requesterIdx.accountIdx, user.accountIdx)}>
              크루 추가하기
            </div>
            <div css={notiGoToBlog} onClick={() => router.push(`/author/${content.requesterIdx.accountIdx}`)}>
              블로그 바로가기
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const notiCardContainer = css`
  position: relative;
  background-color: ${Color.Gray850};
  border-radius: 8px;
  padding: 35px 25px 35px 41px;
`;

const notiCheckMark = css`
  position: absolute;
  z-index: 1;
  background: ${Color.Primary100};
  border-radius: 8px 0 0 8px;
  height: 100%;
  width: 8px;
`;

const notiCloseIconBox = css`
  top: 16px;
  right: 20px;
  position: absolute;
  display: flex;
  justify-content: end;
  cursor: pointer;
`;

const notiProfileCard = css`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  cursor: pointer;
`;

const UserProfileImgCircle = css`
  width: 32px;
  height: 32px;
  border-radius: 100px;
  overflow: hidden;
  background-color: 'yellow';
`;

const notiProfilePic = css`
  margin-right: 6px;
`;

const notiName = css`
  font-size: ${FontSize.small};
  color: ${Color.White100};
`;

const notiDate = css`
  font-size: ${FontSize.small};
  color: ${Color.Gray650};
`;

const notiMsg = css`
  font-size: ${FontSize.Large};
  color: ${Color.White100};
  font-weight: Bold;
  margin-bottom: 16px;
`;

const notiBtnContainer = css`
  display: flex;
  width: 230px;
  justify-content: space-between;
  cursor: pointer;
`;

const notiAddCrew = css`
  width: 105px;
  height: 39px;
  background: ${Color.Primary100};
  border-radius: 4px;
  color: ${Color.White100};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
`;

const notiGoToBlog = css`
  width: 118px;
  height: 39px;
  background: ${Color.Gray500};
  border-radius: 4px;
  color: ${Color.White100};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  cursor: pointer;
`;
export default memo(NotiCard);
