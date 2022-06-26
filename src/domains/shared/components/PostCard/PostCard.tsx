import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { Color } from '../../constants';
import { PostCardProps } from './PostCardType';

const PostCard = ({ data }: PostCardProps) => {
  const router = useRouter();
  return (
    <CardLayout
      onClick={() => {
        router.push(
          {
            pathname: `/posts/[postIdx]`,
            query: {
              postIdx: `${data.postIdx}`,
            },
          },
          `/posts/${data.postIdx}`,
        );
      }}
    >
      <ImageSection>
        <Image
          src={data.thumbnailImg || 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg'}
          width="330px"
          height="152px"
          alt={data.thumbnailContents}
          layout="intrinsic"
          objectFit="cover"
        />
      </ImageSection>
      <DescriptionBox>
        <CardTitle>{data.title}</CardTitle>
        <CardSummary>{data.contents}</CardSummary>
      </DescriptionBox>
      <CardAuthor>
        <div style={{ width: '20px', height: '20px', borderRadius: '200px', overflow: 'hidden', marginBottom: '5px' }}>
          <Image
            src={data.thumbnailImg || 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg'}
            width="20px"
            height="20px"
            alt={data.thumbnailContents}
            layout="intrinsic"
            objectFit="cover"
          />
        </div>
        <div style={{ fontSize: '12px' }}>
          <span style={{ color: `${Color.Gray600}` }}>by</span>
          <span style={{ color: `${Color.White100}` }}>도토리 & 김진우</span>
        </div>
      </CardAuthor>
    </CardLayout>
  );
};

const CardLayout = styled('div')`
  display: inline;
  position: relative;
  border-radius: 20px;
  background-color: ${Color.Gray800};
  min-width: 296px;
  height: 378px;
  cursor: pointer;
`;

const ImageSection = styled('div')`
  display: flex;
  justify-content: center;
  color: white;
  overflow: hidden;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  width: 100%;
  height: 152px;
`;

const DescriptionBox = styled('div')`
  margin: 20px 21px 21px 21px;
`;

const CardTitle = styled('div')`
  color: ${Color.White100};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
`;

const CardSummary = styled('div')`
  display: block;
  overflow: hidden;
  color: ${Color.Gray600};
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 3.6em;
  font-weight: 400;
  font-size: 14px;
`;

const CardAuthor = styled('div')`
  position: absolute;
  padding: 7px 21px 21px 21px;
  width: 100%;
  height: 60px;
  bottom: 0;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
`;

export default memo(PostCard);
