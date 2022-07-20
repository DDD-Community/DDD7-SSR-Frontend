import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { memo, useCallback, useMemo } from 'react';
import { Color, DEFAULT_POST_IMAGE, DEFAULT_PROFILE_IMAGE } from '../../constants';
import { formatDate } from '../../utils/date';
import { ProfileImage } from '../ProfileImage';
import { Spacing } from '../Spacing';
import { Text } from '../Text';
import { PostCardProps } from './PostCardType';

const PostCard = ({ data }: PostCardProps) => {
  const router = useRouter();

  const handleClickCard = () => {
    router.push(
      {
        pathname: `/posts/[postIdx]`,
        query: {
          postIdx: `${data.postIdx}`,
        },
      },
      `/posts/${data.postIdx}`,
    );
  };

  const handleClickProfile = useCallback(
    (accountIdx: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      router.push(
        {
          pathname: '/author/[accountIdx]',
          query: {
            accountIdx,
          },
        },
        `author/${accountIdx}`,
      );
    },
    [router],
  );

  const refinedSummaryContents = useMemo(() => {
    const thumbnailContents = data.thumbnailContents || data.contents.slice(0, 400);
    return thumbnailContents.replace(/!\[(.*?)]\((https?:\/\/\S+\.\w+)\)/gi, '');
  }, [data.thumbnailContents, data.contents]);

  const [coWriterIdxs, coWriterProfiles, coWriterNames] = useMemo(() => {
    if (!data) {
      return [[], [], []];
    }

    return data.coWriter.coWriterInfo.reduce<[number[], string[], string[]]>(
      (acc, info) => {
        acc[0].push(info.accountIdx);
        acc[1].push(info.profileImg || DEFAULT_PROFILE_IMAGE);
        acc[2].push(info.name);

        return acc;
      },
      [[], [], []],
    );
  }, [data]);

  return (
    <CardLayout onClick={handleClickCard}>
      <ImageSection>
        <Image src={data.thumbnailImg || DEFAULT_POST_IMAGE} width="330px" height="152px" alt="thumbnail-image" />
      </ImageSection>

      <DescriptionBox>
        <Text type="tag12" color="Gray500">
          {formatDate(data.createDate)}
        </Text>
        <Spacing col={9} />
        <CardTitle>{data.title}</CardTitle>
        <CardSummary>{refinedSummaryContents}</CardSummary>
      </DescriptionBox>

      <CardAuthor>
        <div css={crewInfoWrapperStyle}>
          {coWriterProfiles.map((profileImage, index) => (
            <React.Fragment key={coWriterIdxs[index]}>
              <div onClick={handleClickProfile(coWriterIdxs[index])}>
                <ProfileImage src={profileImage || DEFAULT_PROFILE_IMAGE} width={20} />
              </div>
              {coWriterProfiles.length > index + 1 && <Spacing row={6} />}
            </React.Fragment>
          ))}
        </div>
        <Spacing col={6} />
        <div css={crewInfoWrapperStyle}>
          <Text color="Gray600" type="tag12">
            by
          </Text>
          <Spacing row={4} />
          <EllipsisText type="tag12" color="White100">
            {coWriterNames.join(' & ')}
          </EllipsisText>
        </div>
      </CardAuthor>
    </CardLayout>
  );
};

const CardLayout = styled.div`
  display: inline;
  position: relative;
  border-radius: 16px;
  background-color: ${Color.Gray800};
  min-width: 296px;
  height: 378px;
  cursor: pointer;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  overflow: hidden;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  width: 100%;
  height: 152px;
`;

const DescriptionBox = styled.div`
  margin: 20px 21px 21px 21px;
`;

const CardTitle = styled.div`
  color: ${Color.White100};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
`;

const CardSummary = styled.div`
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

const CardAuthor = styled.div`
  position: absolute;
  padding: 7px 21px 21px 21px;
  width: 100%;
  height: 60px;
  bottom: 0;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
`;

const crewInfoWrapperStyle = css`
  display: flex;
`;

const EllipsisText = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default memo(PostCard);
