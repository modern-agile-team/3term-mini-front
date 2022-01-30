import React, { useState } from 'react';
import styled from 'styled-components';
import HomePagePresenter from './HomePagePresenter';
import dummyBoard from '../../apis/dummyBoard.json';
import { Row } from '../../style';

const NewRow = styled(Row)`
  & {
    border-bottom: 1px solid green;
  }
  :last-child {
    border-bottom: none;
  }
`;

function HomePage() {
  const showBoards = () =>
    dummyBoard.result.map((board) => (
      <NewRow>
        <span>{board.title}</span>
        <div>
          <span>{board.date}</span>
          <span>{board.time}</span>
        </div>
      </NewRow>
    ));

  return <HomePagePresenter showBoards={showBoards} />;
}

export default HomePage;
