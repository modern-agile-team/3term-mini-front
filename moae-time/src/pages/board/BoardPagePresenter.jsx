import { React, useState, useEffect } from 'react';
import { Text } from '../../components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BasicProfile from '../../style/image/BasicProfile.png';
import {
  Box,
  PageNation,
  BigModal,
  HotBoard,
} from '../../components';
import { Col, Row } from '../../style';

const SelectBox = styled.div`
  outline: none;
  width: 100px;
  padding: 15.3px 0;
  border: 1px solid #d6d6d6;
  background-color: #f9f9f9;
  color: #737373;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  /* & option {
    background-color: lightcoral;
  } */
`;

const Select = styled.select`
  background-color: rgba(1, 1, 1, 0);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  width: 100%;
  height: fit-content;
  border: none;

  &::-ms-expand {
    display: none;
  }

  width: inherit;
  height: inherit;
  background: transparent;
  border: 0 none;
  outline: 0 none;
  padding: 0 5px;
  position: relative;
  z-index: 3;

  & * {
  }

  /* -webkit-appearance: none;
  appearance: none; */
`;

const Input = styled.input`
  width: 80%;
  display: inline-block;
  outline: none;
  background-color: none;
  border: none;
  background-color: #f9f9f9;
  color: #737373;

  font-size: 15px;
`;

const Button = styled.button`
  outline: none;
  padding: 15px;
  border: 1px solid #d6d6d6;
  background-color: #f9f9f9;
  color: #737373;
  height: 100%;
`;

const WholeWrap = styled.div`
  padding-top: 20px;
  & :last-child {
    border-bottom: none;
  }
`;

const TitleDiv = styled.span`
  height: 23px;

  padding: 15px;
  margin-bottom: 12px;
  font-weight: bold;
`;

const WrapToFlex = styled.div`
  display: flex;
  align-items: center;

  padding-left: 15px;
  margin-bottom: 24px;
`; //row

const ImgWriterDateWrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: flex-end;

  margin-top: 12px;
`; //row

const WriterImage = styled.img`
  width: 25px;
  height: 25px;

  margin-right: 5px;
`; //감싼 거의 패딩

const WriterDiv = styled.span`
  height: 20px;
  font-weight: 400;
  font-size: 14px;

  margin-right: 10px;
`; //감싼 거의 패딩

const DateAndTimeDiv = styled.span`
  height: 17px;
  color: #a6a6a6;
  display: flex;
  align-items: flex-end;

  font-weight: 300;
  font-size: 12px;
`;

const CommentsAndViewsWrap = styled.div`
  height: 17px;
  display: flex;

  margin-left: 463px;
  font-weight: 300;
  font-size: 12px;
`;

const ViewsDiv = styled.div`
  margin-right: 19px;
`;

const BottomLine = styled.div`
  width: 816px;
  border: 0.5px solid #d6d6d6;
`;

function BoardPagePresenter() {
  const [pageNation, setPageNation] = useState(0);
  const [modalState, setModalState] = useState(false);
  const [userReport, setUserReport] = useState(false);
  const [nicknameState, setNicknameState] = useState(null);
  const [userNoState, setUserNoState] = useState(null);
  const [DESCState, setDESCState] = useState(null);
  const [ASCState, setASCState] = useState(null);
  const [sortType, setSortType] = useState(0);

  const sortTypes = ['최신순', '오래된순'];

  const showSortTypes = () =>
    sortTypes.map((sort, index) => (
      <option key={index} value={index}>
        {sort}
      </option>
    ));

  useEffect(() => {
    axios
      .get('http://3.36.125.16:8080/moae/board/sort?order=DESC')
      .then((res) => {
        setDESCState(res.data.order);
      })
      .catch((err) => {
        alert('err :>> ', err);
      })

    axios
      .get('http://3.36.125.16:8080/moae/board/sort?order=ASC')
      .then((res) => {
        setASCState(res.data.order);
      })
      .catch((err) => {
        alert(err);
      })
  }, [])

  const clickPageNationOne = () => {
    setPageNation(0);
  };

  const clickPageNationTwo = () => {
    setPageNation(1);
  };

  const clickPageNationThr = () => {
    setPageNation(2);
  };

  const clickRight = () => {
    if (pageNation < 2) {
      setPageNation(pageNation + 1);
    } else {
      setPageNation(0);
    }
  };

  const clickLeft = () => {
    if (pageNation > 0) {
      setPageNation(pageNation - 1);
    } else {
      setPageNation(2);
    }
  };

  const start = pageNation * 6;
  const end = pageNation * 6 + 6;

  const clickEmoji = (e) => {
    setModalState(true);
    setNicknameState(e.target.parentElement.id);
    setUserNoState(e.target.id);
  }

  const selectedSort = (e) => {
    setSortType(e.target.value);
  };

  const mapToWrite = (way) => {
    const lists = Number(way) ? ASCState : DESCState;
    return lists && lists.slice(start, end).map((post) => {
      return (
          <WholeWrap key={post.boardNo}>
            <Link to={`/board/${post.boardNo}`}>
              <TitleDiv>{post.title}</TitleDiv>
            </Link>
            <br />
            <WrapToFlex >
              <ImgWriterDateWrap id={post.nickname}>
                <WriterImage
                id={post.userNo} 
                onClick={clickEmoji}
                src={BasicProfile} />
                <WriterDiv>{post.nickname}</WriterDiv>
                <DateAndTimeDiv>{post.inDate}</DateAndTimeDiv>
              </ImgWriterDateWrap>
              <Link to={`/board/${post.boardNo}`}>
                <CommentsAndViewsWrap>
                  <Text color={'green'} size={'size3'}>
                    댓글 수 {post.comments_length}
                  </Text>
                  <ViewsDiv>조회수 {post.hit}</ViewsDiv>
                </CommentsAndViewsWrap>
              </Link>
            </WrapToFlex>
            <BottomLine />
          </WholeWrap>
      );
    })};


  return (
    <Row padding="25px 172px 0px" align="flex-start">
      <Col width="len8">
        <Row padding="0 0 5px">
          <Box padding="15px">자유 게시판</Box>
        </Row>
        <Row padding="0 0 5px">
          <SelectBox name="sort">
            <Select onChange={selectedSort}>{showSortTypes()}</Select>
          </SelectBox>
          <Box width="len12" padding="14px">
            <Row>
              <Input placeholder="검색어를 입력하세요." />
              <span>{'돋보기'}</span>
            </Row>
          </Box>
          <Link to={`/board/write`}>
            <Button>작성</Button>
          </Link>
        </Row>
        <Box>{mapToWrite(sortType)}</Box>
        <PageNation
          clickPageNationOne={clickPageNationOne}
          clickPageNationTwo={clickPageNationTwo}
          clickPageNationThr={clickPageNationThr}
          clickLeft={clickLeft}
          clickRight={clickRight}
        />
      </Col>
      <Box width="len3">
        <Row padding="10px">
          <HotBoard />
        </Row>
        <Col></Col>
      </Box>
      <BigModal
        modalState={modalState}
        setModalState={setModalState}
        userReport={userReport}
        setUserReport={setUserReport}
        nicknameState={nicknameState}
        userNoState={userNoState}
      />
    </Row>
  );
}

export default BoardPagePresenter;
