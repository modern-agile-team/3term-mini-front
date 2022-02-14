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
  overflow: scroll;
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

function BoardOne(props) {
  const boardNo = useParams();
  // const userNo = useParams();
  // console.log('userNo :>> ', userNo);

  const [boardOneState, setBoardOneState] = useState(null);
  const [commentsState, setCommentsState] = useState(null);
  
  const [content, setContent] = useState(
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!'
  );
  const [isEdit, setIsEdit] = useState(false);

  const clickEdit = () => {
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    axios
      .get(`http://3.36.125.16:8080/moae/board/connect/${boardNo.boardId}/14`)
      .then((res) => {
        setBoardOneState(res.data.boardData)
        setCommentsState(res.data.comments)
      })
      .catch((err) =>{console.log('err', err)})
  }, [])
  
//boardOneState.boardData.nickname == 작성자 이름
//boardOneState.boardData.boardInDate == 날짜
//boardOneState.boardData.title == 제목
//boardOneState.boardData.description == 내용
//boardOneState.boardData.hit == 조회수

  const deleteComment = () => {
    console.log('1 :>> ', '삭제 시이이이이이잉이바');
  };

  const showComments = () => {
    return commentsState && commentsState.slice(0, 5).map((comment) => {
    return (
      <Fragment key={comment.cmtId}>
        <Row padding="5px 0 0" key={comment.nickname}>
          <div>
            <Text>icon</Text>
            <Text>{comment.nickname}</Text>
          </div>
          {<button onClick={deleteComment}>삭제</button>}
        </Row>
        <Row>
          <Text>{comment.description}</Text>
          <Text>{comment.inDate}</Text>
        </Row>
      </Fragment>
      )})};


  const { boardId } = useParams();

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
                    <Link to={`/board/${boardId}/edit`}>수정</Link>
                    <button>삭제</button>
                  </div>
                </Row>
                <Col align="flex-start">{boardOneState && boardOneState.boardInDate}</Col>
              </Col>
            </Row>
            <h1>{boardOneState && boardOneState.title}</h1>
            <ContentBox>{content}</ContentBox>
            <Row>
              <div>
                <span>댓글수:{boardOneState && boardOneState.comments_length}</span>
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
                <span>버튼</span>
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
          <button>글목록</button>
        </div>
      </Col>
      <Box width="len3">
        <HotBoard />
      </Box>
    </Row>
  );
}

export default BoardOne;
