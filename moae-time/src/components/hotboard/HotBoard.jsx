import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Text } from '../';
import { Col, Row } from '../../style';

const NewRow = styled(Row)`
  & {
    border-top: solid 1px #ededed;
  }
`;

const NewText = styled(Text)`
  /* padding: 10px; */
  display: block;
  width: 246px;
  font-size: 16px;
  font-weight: 300 !important;
  color: #444444;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  & {
  }
`;

const HotBoard = () => {
  const hotBoard = [
    {
      id: 1,
      title: '핫 게시물인데 글자가 길어지면 어쩌라는',
      date: '02/01',
      time: '08:30',
    },
    {
      id: 2,
      title: '이렇게?',
      date: '02/01',
      time: '08:30',
    },
    {
      id: 3,
      title: '하라고요?',
      date: '02/01',
      time: '08:30',
    },
    {
      id: 4,
      title: '네네 우리는 따까리니까요',
      date: '02/01',
      time: '08:30',
    },
  ];

  const showHotBoard = () =>
    hotBoard.map((board) => (
      <NewRow padding={'10px'}>
        <Row width={'len16'}>
          <NewText>
            <Link to="/board">{board.title}</Link>
          </NewText>
        </Row>
        <Text size={'size8'}>{board.date}</Text>
        <Text size={'size8'}>{board.time}</Text>
      </NewRow>
    ));

  return (
    <Col>
      <Row padding={'10px'}>
        <span>HOT 게시물</span> <Link to={'/'}>더 보기</Link>
      </Row>
      {showHotBoard()}
    </Col>
  );
};

export default HotBoard;
