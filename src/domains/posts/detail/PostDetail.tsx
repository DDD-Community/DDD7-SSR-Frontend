import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { Spacing, Text, Viewer, CommentList } from 'src/domains/shared/components';
import {
  useCommentListQuery,
  useCreateCommentMutation,
  useDeleteCommentMutation,
  usePostDetailQuery,
} from './PostDetail.queries';
import { Textarea, Button } from 'src/domains/shared/components';
import { useQueryClient } from 'react-query';
import Image from 'next/image';
import { DEFAULT_PROFILE_IMAGE } from 'src/domains/shared/constants';
import useUser from 'src/domains/shared/hooks/useUser';
import { Confirm } from 'src/domains/shared/components/Confirm';
import { useIsShown } from 'src/domains/shared/hooks/useIsShown';

const PostDetail = () => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const postIdx = Number(router.query.postIdx);

  const user = useUser();
  // TODO: SSR 처리 필요
  const postDetailQuery = usePostDetailQuery(postIdx);
  const commentListQuery = useCommentListQuery(postIdx);
  const createCommentMutation = useCreateCommentMutation();
  const deleteCommentMutation = useDeleteCommentMutation();

  const [selectedCommentIdx, setSelectedCommentIdx] = useState<number | null>(null);

  const [isShownDeleteCommentConfirm, handleOpenDeleteCommentConfirm, handleCloseDeleteCommentConfirm] =
    useIsShown(false);

  const [coWriterIdxs, coWriterProfiles, coWriterNames] = useMemo(() => {
    if (!postDetailQuery.data) {
      return [[], [], []];
    }

    return postDetailQuery.data.coWriter.coWriterInfo.reduce<[number[], string[], string[]]>(
      (acc, info) => {
        acc[0].push(info.accountIdx);
        acc[1].push(info.profileImg || DEFAULT_PROFILE_IMAGE);
        acc[2].push(info.name);

        return acc;
      },
      [[], [], []],
    );
  }, [postDetailQuery.data?.coWriter]);

  const totalCommentCount = commentListQuery.data?.pages.flatMap((data) => data)[0].totalElements;
  const commentList = useMemo(
    () => [...(commentListQuery.data?.pages || [])].reverse().flatMap((data) => [...data.content].reverse()),
    [commentListQuery.data?.pages],
  );

  const [commentText, setCommentText] = useState('');

  const handleLoadMore = () => commentListQuery.fetchNextPage();

  const handleCreateComment = () => {
    if (!user?.accountIdx) {
      return;
    }

    createCommentMutation.mutate(
      {
        postIdx,
        comment: commentText,
        accountIdx: user?.accountIdx,
      },
      {
        onSuccess: () => {
          // 리팩토링 필요.
          queryClient.invalidateQueries(['CommentList', postIdx]);
          setCommentText('');
        },
      },
    );
  };

  const handleDeleteCommentClick = (commentIdx: number) => {
    setSelectedCommentIdx(commentIdx);
    handleOpenDeleteCommentConfirm();
  };

  const handleDeleteComment = () => {
    if (selectedCommentIdx) {
      deleteCommentMutation.mutate(
        {
          postIdx,
          commentIdx: selectedCommentIdx,
        },
        {
          onSettled: () => {
            handleCloseDeleteCommentConfirm();
          },
          onSuccess: () => {
            queryClient.invalidateQueries(['CommentList', postIdx]);
            setSelectedCommentIdx(null);
          },
        },
      );
    }
  };

  return (
    <>
      <section css={postDetailSection}>
        <div css={crewInfoWrapperStyle}>
          {coWriterProfiles.map((profileImg, index) => (
            <div key={`${profileImg}${index}`} onClick={() => router.push(`/author/${coWriterIdxs[index]}`)}>
              <img css={crewProfileImgStyle} src={profileImg} alt="profile" width={32} height={32} />
            </div>
          ))}
          <Spacing row={5} />
          <div css={crewNameWrapperStyle}>
            <Text type="tag12" color="White100">
              {coWriterNames.join(' & ')}
            </Text>
          </div>
        </div>
        <Spacing col={16} />
        <Text type="title28" color="White100">
          {postDetailQuery.data?.title}
        </Text>
        {postDetailQuery.data && <Viewer initialValue={postDetailQuery.data.contents} />}

        <Spacing col={117} />

        {commentList && (
          <CommentList
            totalCounts={totalCommentCount || 0}
            isLoadMore={commentListQuery.hasNextPage}
            comments={commentList}
            onLoadMore={handleLoadMore}
            userId={user?.accountIdx}
            handleDeleteComment={handleDeleteCommentClick}
          />
        )}
        <Spacing col={32} />
        <div css={commentTextareaWrapper}>
          <div>
            <Image src={DEFAULT_PROFILE_IMAGE} width={48} height={48} alt="profile-image" />
            <Spacing row={20} />
            <Textarea
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
              maxLength={1000}
              placeholder="댓글을 적어주세요."
              withCount
            />
          </div>
          <Spacing col={16} />
          <Button
            type="button"
            color={commentText.length === 0 ? 'Gray700' : 'Primary100'}
            size="medium"
            disabled={commentText.length === 0}
            onClick={handleCreateComment}
          >
            <Text type="body14">작성하기</Text>
          </Button>
        </div>
      </section>
      <Confirm
        isShown={isShownDeleteCommentConfirm}
        onClose={handleCloseDeleteCommentConfirm}
        onConfirm={handleDeleteComment}
        description="댓글을 삭제하시나요?"
        buttonTextColor="Red100"
        buttonText="삭제하기"
      />
    </>
  );
};

export default PostDetail;

const postDetailSection = css`
  width: 100%;
  max-width: 936px;
  display: flex;
  flex-direction: column;
  margin: 35px auto 0;
  padding-bottom: 153px;
  overflow-y: auto;
`;

const crewInfoWrapperStyle = css`
  display: flex;
  align-items: center;
`;

const crewProfileImgStyle = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 6px;
  cursor: pointer;

  &:last-of-type {
    margin: 0;
  }
`;

const crewNameWrapperStyle = css`
  display: flex;
`;

const commentTextareaWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 6px;

  & > div {
    display: flex;
    align-items: flex-start;

    & textarea {
      height: 217px;
    }
  }

  & button {
    margin-left: auto;
  }
`;
