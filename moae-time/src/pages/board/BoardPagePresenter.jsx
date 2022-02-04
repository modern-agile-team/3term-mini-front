import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BasicProfile from "../../style/image/BasicProfile.png"
import dummyBoard from '../../apis/dummyBoard.json';
import { Box, SideBar, PageNation, BigModal, PostList, HotBoard } from '../../components';
import { Col, Row } from '../../style';

const SelectBox = styled.select`
  outline: none;
  width: 100px;
  padding: 14.5px 20px;
  border: 1px solid #d6d6d6;
  background-color: #f9f9f9;
  color: #737373;
  font-size: 14px;
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
`

const TitleDiv = styled.span`
  height: 23px;

  padding: 15px;
  margin-bottom: 12px;
  font-weight: bold;  
`

const WrapToFlex = styled.div`
  display: flex;
  align-items: center;

  padding-left: 15px;
  margin-bottom: 24px;
`//row

const ImgWriterDateWrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: flex-end;

  margin-top: 12px;
`//row

const WriterImage = styled.img`
  width: 25px;
  height: 25px;

  margin-right: 5px;
`//감싼 거의 패딩

const WriterDiv = styled.span`
  height: 20px;
  font-weight: 400;
  font-size: 14px;

  margin-right: 10px;
`//감싼 거의 패딩

const DateAndTimeDiv = styled.span`
  height: 17px;
  color: #A6A6A6;
  display: flex;
  align-items: flex-end;
  

  font-weight: 300;
  font-size: 12px;
`

const CommentsAndViewsWrap = styled.div`
  height: 17px;
  display: flex;

  margin-left: 463px;
  font-weight: 300;
  font-size: 12px;
`

const CommentsNumDiv = styled.div`
  margin-right: 30px;
`

const ViewsDiv = styled.div`
  margin-right: 19px;
`

const BottomLine = styled.div`
  width: 816px;
  border: 0.5px solid #D6D6D6;

`

function BoardPagePresenter() {
  const [pageNation, setPageNation] = useState(0)
  const [modalState, setModalState] = useState(false);
  const [smallModalState, setSmallModalState] = useState(false);
  

  const clickPageNationOne = () => {
    setPageNation(0)
  }

  const clickPageNationTwo = () => {
    setPageNation(1)
  }
  
  const clickPageNationThr = () => {
    setPageNation(2)
  }

  const clickRight = () => {
    if(pageNation < 2) {
    setPageNation(pageNation+1)
    } else {
    setPageNation(0)
    }
  }

  const clickLeft = () => {
    if(pageNation > 0) {
      setPageNation(pageNation-1)
      } else {
      setPageNation(2)
      }
  }

  const start = pageNation*6
  const end = pageNation*6+6;

  

  const mapToWrite = () => dummyBoard.slice(start, end).map((post) => {
    return (
      <WholeWrap key={post.no}>
        <TitleDiv>{post.title}</TitleDiv><br/>
        <WrapToFlex>
          <ImgWriterDateWrap>
            <WriterImage onClick={() => setModalState(true)}src={BasicProfile}/>
            <WriterDiv>{post.nickname}</WriterDiv>
            <DateAndTimeDiv>{post.inDate}</DateAndTimeDiv>
          </ImgWriterDateWrap>
          <CommentsAndViewsWrap>
            <CommentsNumDiv>댓글 수 {post.comments_length}</CommentsNumDiv>
            <ViewsDiv>조회수 {post.hit}</ViewsDiv>
          </CommentsAndViewsWrap>
        </WrapToFlex>
        <BottomLine/>
      </WholeWrap>
    )
  })
  
  return (
    <Row padding="25px 172px 0px" align="flex-start">
      <Col width="len8">
        <Row padding="0 0 5px">
          <Box padding="15px">
            자유 게시판
          </Box>
        </Row>
        <Row padding="0 0 5px">
          <SelectBox name="sort">
            최신순
            <option value="dog">최신순</option>
            <option value="dog">오래된순</option>
          </SelectBox>
          <Box width="len12" padding="14px">
            <Row>
              <Input placeholder="검색어를 입력하세요." />
              <span>사진</span>
            </Row>
          </Box>
          <Button>사진</Button>
        </Row>
        <Box>
          {mapToWrite()}
        </Box>
        <PageNation 
          clickPageNationOne={clickPageNationOne}
          clickPageNationTwo={clickPageNationTwo} 
          clickPageNationThr={clickPageNationThr}
          clickLeft={clickLeft}
          clickRight={clickRight}/>
      </Col>
      <Box width="len3">
        <Row padding="10px">
          <HotBoard/>
        </Row>
        <Col>
        <BigModal 
          modalState={modalState}
          setModalState={setModalState}
          smallModalState={smallModalState}
          setSmallModalState={setSmallModalState}/>
        </Col>
      </Box>
    </Row>
    
  );
}

export default BoardPagePresenter;




  // const boards = {};
  // const ENDPOINT = '13.209.76.148:8080';
  // axios
  //   .get(`${ENDPOINT}/board`)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log('ERR : ', err);
  //   });