import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomePagePresenter from './HomePagePresenter';
import dummyProfile from '../../apis/dummyProfile.json';
import dummyBoard from '../../apis/dummyBoard.json';
import { Text } from '../../components';
import { Row, MainStyle } from '../../style';

const NewRow = styled(Row)`
  & {
    border-top: 1px solid ${MainStyle.checkColor.gray9};
  }
`;

const NewText = styled(Text)`
  /* padding: 10px; */
  display: block;
  width: ${MainStyle.checkWidth.len16};
  font-size: ${MainStyle.checkFontSize.size7};
  font-weight: ${MainStyle.checkWeight.light} !important;
  color: ${MainStyle.checkColor.gray2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

function HomePage() {
  const showProfile = () => (
    <>
      <span>{dummyProfile.profile.nickname}</span>
      <span>{dummyProfile.profile.name}</span>
      <span>{dummyProfile.profile.id}</span>
    </>
  );
  const showBoards = () =>
    dummyBoard.slice(0, 8).map((board) => (
      <NewRow padding={'10px'}>
        <Row width={'len5'}>
          <NewText>
            <Link to="/board">{board.title}</Link>
          </NewText>
          <Text size={'size2'}>{board.inDate}</Text>
        </Row>
      </NewRow>
    ));
  return (
    <HomePagePresenter showProfile={showProfile} showBoards={showBoards} />
  );
}

export default HomePage;
