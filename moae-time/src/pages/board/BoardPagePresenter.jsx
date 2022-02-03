import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, SideBar, PageNation, BigModal, PostList } from '../../components';
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

function BoardPage() {
  

  return (
    <Row padding="25px 172px 0px" align="flex-start">
      <Col width="len8">
        <Row padding="0 0 5px">
          <Box padding="15px">자유 게시판</Box>
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
          <PostList />
        </Box>
        <PageNation />
      </Col>
      <Box width="len3">
        <Row padding="10px">
          <span>HOT 게시물</span> <Link to={'/'}>더 보기</Link>
        </Row>
        <Col>
          {/* <PostList /> */}
        </Col>
      </Box>
    </Row>
  );
}

export default BoardPage;




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