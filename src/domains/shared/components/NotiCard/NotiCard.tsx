import { css } from '@emotion/react';
import { Color, FontSize } from '../../constants';

const NotiCard = () => {
  return (
    <div style={{ position: 'relative', marginBottom: '18px' }}>
      <div css={notiCheckMark}></div>
      <div css={notiCardContainer}>
        <div css={notiCloseIconBox}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.420898" y="0.420898" width="33.159" height="33.159" fill="white" fillOpacity="0.01" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.6451 9.36707C24.1718 8.89382 23.4073 8.89382 22.934 9.36707L17 15.2888L11.066 9.35494C10.5927 8.88169 9.82821 8.88169 9.35495 9.35494C8.88168 9.82819 8.88168 10.5927 9.35495 11.0659L15.289 16.9997L9.35495 22.9335C8.88168 23.4068 8.88168 24.1713 9.35495 24.6445C9.82821 25.1178 10.5927 25.1178 11.066 24.6445L17 18.7107L22.934 24.6445C23.4073 25.1178 24.1718 25.1178 24.6451 24.6445C25.1183 24.1713 25.1183 23.4068 24.6451 22.9335L18.711 16.9997L24.6451 11.0659C25.1062 10.6048 25.1062 9.82819 24.6451 9.36707Z"
              fill="white"
            />
          </svg>
        </div>
        <div css={notiProfileCard}>
          <div css={notiProfilePic}>
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#34353A" />
              <path
                d="M11.3275 30.4424C11.3275 30.4424 9.55762 30.4424 9.55762 28.6725C9.55762 26.9026 11.3275 21.5929 20.1771 21.5929C29.0266 21.5929 30.7966 26.9026 30.7966 28.6725C30.7966 30.4424 29.0266 30.4424 29.0266 30.4424H11.3275ZM20.1771 19.823C21.5853 19.823 22.9359 19.2635 23.9316 18.2678C24.9274 17.272 25.4868 15.9215 25.4868 14.5132C25.4868 13.105 24.9274 11.7544 23.9316 10.7587C22.9359 9.76291 21.5853 9.20349 20.1771 9.20349C18.7689 9.20349 17.4183 9.76291 16.4225 10.7587C15.4268 11.7544 14.8674 13.105 14.8674 14.5132C14.8674 15.9215 15.4268 17.272 16.4225 18.2678C17.4183 19.2635 18.7689 19.823 20.1771 19.823V19.823Z"
                fill="#7F7F83"
              />
            </svg>
          </div>
          <div>
            <div css={notiName}>Amy</div>
            <div css={notiDate}>May 6, 2022</div>
          </div>
        </div>
        <div css={notiMsg}>Amy 님의 크루 요청이 도착했습니다.</div>
        <div css={notiBtnContainer}>
          <div css={notiAddCrew}>크루 추가하기</div>
          <div css={notiGoToBlog}>블로그 바로가기</div>
        </div>
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
`;

const notiProfileCard = css`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
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
`;
export default NotiCard;
