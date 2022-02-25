import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Text } from '../';
import { Col, Row, MainStyle } from '../../style';
import axios from 'axios';

const NewRow = styled(Row)`
  & {
    border-top: solid 1px ${MainStyle.checkColor.gray9};
  }
`;

const NewText = styled(Text)`
  display: block;
  font-size: ${MainStyle.checkFontSize['size7']};
  font-weight: ${MainStyle.checkWeight['light']} !important;
  color: ${MainStyle.checkColor['gray2']};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

function HotBoard({rerander, setRerander}) {
  
  let [hotBoards, setHotBoards] = useState([]);
  useEffect(() => {
    axios.get('http://3.36.125.16:8080/moae/board/hotBoard').then((res) => {
      setHotBoards(res.data.hotBoard);
    });
  }, []);

  const boardOneRefresh = () => {
    setRerander(!rerander);
  }

  const showHotBoard = () =>
    hotBoards.slice(0, 4).map((board) => (
      <NewRow key={board.no} padding={'10px'} onClick={boardOneRefresh}>
        <Row width={'len15'}>
          <NewText>
            <Link to={`/board/${board.no}`}>{board.title}</Link>
          </NewText>
        </Row>
        <Text size={'size2'}>{board.inDate}</Text>
      </NewRow>
    ));

  return (
    <Col>
      <Row padding={'10px'}>
        <Text size={'size6'} color={'green'} weight={'bold'}>
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
}

export default HotBoard;
