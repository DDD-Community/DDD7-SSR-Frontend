import { css } from '@emotion/react';
import { Dispatch, SetStateAction } from 'react';
import { filteredType } from 'src/domains/home/Home';
import { Color } from '../../constants';

interface TextSelectProps {
  filteredState: filteredType;
  setFilteredState: Dispatch<SetStateAction<filteredType>>;
}

const TextSelect = ({ filteredState, setFilteredState }: TextSelectProps) => {
  return (
    <div css={TrendSelectContainer}>
      <div
        css={css`
          color: ${filteredState.isTrend ? Color.White100 : Color.Gray650};
          cursor: pointer;
        `}
        onClick={() => setFilteredState({ ...filteredState, isTrend: true })}
      >
        νΈλ λπ
      </div>
      <div
        css={css`
          color: ${!filteredState.isTrend ? Color.White100 : Color.Gray650};
          cursor: pointer;
        `}
        onClick={() => setFilteredState({ ...filteredState, isTrend: false })}
      >
        μ΅μ 
      </div>
    </div>
  );
};

const TrendSelectContainer = css`
  display: flex;
  width: 137px;
  justify-content: space-between;
`;

export default TextSelect;
