import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Text } from '../';
import { Col, Row, MainStyle } from '../../style';

const NewRow = styled(Row)`
  & {
    border-top: solid 1px ${MainStyle.checkColor.gray9};
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
        <Text size={'size2'}>{board.date}</Text>
        <Text size={'size2'}>{board.time}</Text>
      </NewRow>
    ));

  return (
    <Col>
      <Row padding={'10px'}>
        <Text size={'size6'} color={'green'} weight={'medium'}>
          HOT 게시물
        </Text>
        <Link to={'/'}>
          <Text size={'size5'} color={'gray4'} weight={'light'}>
            더 보기
          </Text>
        </Link>
      </Row>
      {showHotBoard()}
    </Col>
  );
};

export default HotBoard;
