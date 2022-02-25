import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Box, HotBoard, Text, Button } from '../../components';
import { Row, Col } from '../../style';
import axios from 'axios';
import EditImg from '../../style/image/writing.png';

const ContentBox = styled(Box)`
  height: 630px;
  max-height: 630px;

  & :first-child {
    /* border-bottom: 1px solid #d6d6d6; */
    padding-bottom: 5px;
  }
  & :last-child {
    border: none;
    /* test */
  }
`;

const MainContent = styled(Col)`
  max-height: 580px;
  overflow: scroll;
`;

const MainInput = styled.textarea`
  width: 100%;
  height: 580px;
  overflow: scroll;
  font-size: 20px;
  outline: none;
  background-color: rgba(1, 1, 1, 0);
  resize: none;
`;

const Input = styled.input`
  width: 300px;
  padding: 0px;
  border: none;
  font-size: 20px;
  outline: none;
  background-color: rgba(1, 1, 1, 0);
`;

const TitleRow = styled(Row)`
  position: relative;
`;

const EditButton = styled.button`
  position: absolute;

  top: -11px;
  right: -11px;
  width: 45px;
  min-height: 45px;
  height: fit-content;
  color: white;
  border: 12px solid #c62935;
  background-color: #c62935;
  background-image: url(${EditImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;

  background-image: EditImg;
`;

function BoardEditPresenter({ path, id }) {
  const checkPage = {
    '/board/write': 'write',
    '/board/:boardId/edit': 'edit',
  };
  const [content, setContent] = useState({
    boardNo: useParams().boardId,
    title: '',
    description: '',
    boardWriteUserNo: null,
  });
  console.log('checkPage[path] :>> ', checkPage[path]);

  useEffect(() => {
    switch (checkPage[path]) {
      case 'edit':
        axios
          .get(
            `http://3.36.125.16:8080/moae/board/connect/${content.boardNo}/14`
          )
          .then((res) => {
            setContent({
              ...content,
              title: res.data.boardData.title,
              description: res.data.boardData.description,
              boardWriteUserNo: res.data.boardData.boardWriteUserNo,
            });
          })
          .catch((err) => {
            alert(err.response.data.msg);
          });
        break;
      case 'write':
        console.log(`write`);
        break;
      default:
        console.log('잘못된 경로');
        break;
    }
  }, []);

  const editContent = (e) => {
    setContent({
      ...content,
      description: e.target.value,
    });
  };

  const inputTitle = (e) => {
    setContent({
      ...content,
      title: e.target.value,
    });
  };

  const clickFix = () => {
    switch (checkPage[path]) {
      case 'edit':
        axios
          .put(`http://3.36.125.16:8080/moae/board/update`, {
            title: content.title,
            description: content.description,
            boardNo: Number(content.boardNo),
            userNo: Number(content.boardWriteUserNo),
          })
          .then((res) => {
            alert('수정 되었습니다');
            window.location.pathname = `/board/${content.boardNo}`;
          })
          .catch((err) => {
            alert(err.response.data.msg);
          });
        break;
      case 'write':
        axios
          .post(`http://3.36.125.16:8080/moae/board/create`, {
            user_no: id,
            title: content.title,
            description: content.description,
          })
          .then((res) => {
            window.location.pathname = `/board`;
          })
          .catch((err) => {
            console.log('err :>> ', err);
          });
        break;
    }
  };

  return (
    <Row padding="25px 172px 0px" align="flex-start">
      <Col width="len8" align="flex-start">
        <Row padding="0 0 5px">
          <Box padding="21.5px">
            <div>
              <Text color={'gray1'} size={'size6'} weight={'medium'}>
                게시글 수정
              </Text>
            </div>
          </Box>
        </Row>
        <Row padding={'0 0 5px'}>
          <Box width="len8" padding="10px">
            <TitleRow>
              <Input
                id="title"
                type="text"
                placeholder="게시글 제목"
                value={content.title}
                onChange={inputTitle}
              />
              <EditButton
                width={'len18'}
                borderRadius={'default'}
                padding={'len1'}
                onClick={clickFix}
              />
            </TitleRow>
          </Box>
        </Row>
        <Col>
          <ContentBox>
            <Row padding={'15px 700px 15px 15px'}>
              <Button
                width={'len17'}
                fontColor={'gray1'}
                backColor={'Transparency'}
                fontSize={'size6'}
              >
                B
              </Button>
              <Button
                width={'len17'}
                fontColor={'gray1'}
                backColor={'Transparency'}
                fontSize={'size8'}
              >
                í
              </Button>
              <Button
                width={'len17'}
                fontColor={'gray1'}
                backColor={'Transparency'}
                fontSize={'size10'}
              >
                ū
              </Button>
            </Row>
            <MainContent padding={'15px'}>
              <MainInput
                type="text"
                value={content.description}
                onChange={editContent}
              ></MainInput>
            </MainContent>
          </ContentBox>
        </Col>
      </Col>
      <Box width="len3">
        <HotBoard />
      </Box>
    </Row>
  );
}

export default BoardEditPresenter;
