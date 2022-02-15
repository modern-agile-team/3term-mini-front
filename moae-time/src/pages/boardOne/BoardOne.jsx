import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  Box,
  SideBar,
  PageNation,
  BigModal,
  Text,
  HotBoard,
  Button,
} from '../../components';
import { Col, Row } from '../../style';

const ContentBox = styled(Box)`
  border: none;
  max-height: 173px;
  overflow: auto;
  overflow-x:hidden
`;

const Input = styled.input`
  width: 100%;
  height: 173px;
  max-height: 173px;
  /* overflow: scroll; */
  font-size: 16px;
  outline: none;
  border: solid 1px #c62935;
  background-color: rgba(0, 0, 0, 0);
  vertical-align: top;
`;

function BoardOne() {
  const boardNo = useParams();

  const [boardOneState, setBoardOneState] = useState(null);
  const [commentsState, setCommentsState] = useState(null);

  useEffect(() => {
    axios
      .get(`http://3.36.125.16:8080/moae/board/connect/${boardNo.boardId}/14`)
      .then((res) => {
        setBoardOneState(res.data.boardData)
        setCommentsState(res.data.comments)
      })
      .catch((err) =>{
        alert(err.response.data.msg)
      })
  }, [])

const deletePost = () => {
  axios
    .delete(`http://3.36.125.16:8080/moae/board/deleteBoard/${boardNo.boardId}`)
    .then((res) => {
      // alert(res.data.msg)
      setTimeout(() => {alert(res.data.msg)}, 500)
    })
    .catch((err) => {
      alert(err.response.data.msg)
    })
};

  // const creatComment = () => {
  //   console.log('creatCommet :>> ', commentsState);
  //   axios
  //     .post(`http://3.36.125.16:8080/moae/comment**`, {
  //       // "userNo" : 1,
  //       // "boardNo" : 1,
  //       // "description" : "애자일 파이팅."
  //   })
  //     .then((res) => {
  //       console.log('res', res)
  //     })
  //     .catch((err) => {
  //       console.log('에러 : ', err.response.data.msg)
  //     })
  // };  

  const deleteComment = (cmtId) => {
    console.log('commentsState :>> ', commentsState);
    axios
      .delete(`http://3.36.125.16:8080/moae/comment/${cmtId}`)
      .then((res) => {
        console.log('res :>> ', res);
      })
      .catch((err) => {
        console.log('에러 :>> ', err.response);
      })
      setCommentsState([...commentsState].filter((comment) => comment.cmtId !== cmtId));
  };

  const showComments = () => {
    return commentsState && commentsState.slice(0, 5).map((comment) => {
    return (
      <Fragment key={comment.cmtId}>
        <Row padding="5px 0 0" >
          <div>
            <Text>icon</Text>
            <Text>{comment.nickname}</Text>
          </div>
          <button onClick={() => deleteComment(comment.cmtId)}>삭제</button>
        </Row>
        <Row>
          <Text>{comment.description}</Text>
          <Text>{comment.inDate}</Text>
        </Row>
      </Fragment>
      )})};

  return (
    <Row padding="25px 172px 0px" align="flex-start">
      <Col width="len8" align="flex-start">
        <Row padding="0 0 5px">
          <Box padding="15px">
            <div>
              <Text color={'gray1'} size={'size6'} weight={'medium'}>
                자유 게시판
              </Text>
            </div>
          </Box>
        </Row>
        <Box width="len8" padding="15px">
          <Col align="flex-start">
            <Row>
              <div>icon</div>
              <Col>
                <Row>
                  <Text color={'gray1'}>{boardOneState && boardOneState.nickname}</Text>
                  <div>
                    <Link to={`/board/${boardNo.boardId}/edit`}>수정</Link>
                    <Link to={"/board"}>
                      <button onClick={deletePost}>삭제</button>
                    </Link>
                  </div>
                </Row>
                <Col align="flex-start">{boardOneState && boardOneState.boardInDate}</Col>
              </Col>
            </Row>
            <h1>{boardOneState && boardOneState.title}</h1>
            <ContentBox>{boardOneState && boardOneState.description}</ContentBox>
            <Row>
              <div>
                <span>댓글:{boardOneState && boardOneState.comments_length}   </span>
                <span>조회수:{boardOneState && boardOneState.hit}</span>
              </div>
            </Row>
          </Col>
        </Box>
        <Row padding="5px 0 0">
          <Box padding="15px">
            <Row>
              <div>
                <Row>
                  <div>icon</div>
                  <input type="text" placeholder="댓글을 입력하세요." />
                </Row>
              </div>
              <div>
                {/* <button onClick={creatComment}>버튼</button> */}
              </div>
            </Row>
          </Box>
        </Row>
        <Col padding="5px 0 ">
          <Box padding="15px">
            <Col>{showComments()}</Col>
          </Box>
        </Col>
        <div>
          <button>
            <Link to='/board'>
              글목록
            </Link>
          </button>
        </div>
      </Col>
      <Box width="len3">
        <HotBoard />
      </Box>
    </Row>
  );
}

export default BoardOne;
