import styled from '@emotion/styled';
import { PostCardProps } from './PostCardType';

const PostCard = ({ imageSrc, title, summary, authors }: PostCardProps) => {
  return (
    <CardLayout>
      <ImageSection>Image</ImageSection>
      <DiscriptionBox>
        <CardTitle>{title}</CardTitle>
        <CardSummary>{summary}</CardSummary>
      </DiscriptionBox>
      <CardAuthor>
        {authors.map((author) => (
          <span>{author.name}</span>
        ))}
      </CardAuthor>
    </CardLayout>
  );
};

const CardLayout = styled.div`
  position: relative;
  border-radius: 20px;
  background-color: red;
  width: 296px;
  height: 331px;
`;

const ImageSection = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  background-color: blue;
  width: 100%;
  height: 152px;
`;

const DiscriptionBox = styled('div')`
  background-color: green;
  margin: 20px 21px 21px 21px;
`;

const CardTitle = styled('div')`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 5px;
`;

const CardSummary = styled('div')`
  display: block;
  background-color: skyblue;
  overflow: hidden;
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
  background-color: skyblue;
  width: 100%;
  height: 40px;
  bottom: 0;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
`;

export default PostCard;
