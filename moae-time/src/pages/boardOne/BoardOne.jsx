import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Box,
  SideBar,
  PageNation,
  BigModal,
  Text,
  HotBoard,
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

function BoardOne() {
  const comments = [
    { commentId: 1, userName: '성제', date: '02/13 08:13', content: '123' },
    { commentId: 2, userName: 'Lee', date: '02/13 08:13', content: '456' },
    { commentId: 3, userName: 'Kim', date: '02/13 08:13', content: '789' },
  ];

  const deleteComment = () => {
    console.log('1 :>> ', '삭제 시이이이이이잉이바');
  };

  const showComments = () =>
    comments.map((comment) => (
      <>
        <Row padding="5px 0 0" key={comments.commentId}>
          <div>
            <Text>icon</Text>
            <Text>{comment.userName}</Text>
          </div>
          {<button onClick={deleteComment}>삭제</button>}
        </Row>
        <Row>
          <Text>{comment.content}</Text>
          <Text>{comment.date}</Text>
        </Row>
      </>
    ));

  const [content, setContent] = useState(
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laborum consequatur nostrum molestiae evenietnihil, tempore sequi eos nesciunt iusto maiores temporibus doloresquas dolore quis quos! Quae, beatae laboriosam!'
  );
  const [isEdit, setIsEdit] = useState(false);

  const clickEdit = () => {
    setIsEdit(!isEdit);
  };

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
                  <Text color={'gray1'}>작성자 이름</Text>
                  <div>
                    <Link to={'/edit'}>수정</Link>
                    <button>삭제</button>
                  </div>
                </Row>
                <Col align="flex-start">날짜</Col>
              </Col>
            </Row>
            <h1>게시글 제목</h1>
            <ContentBox>{content}</ContentBox>
            <Row>
              <div>
                <span>댓글 수</span>
                <span>조회 수</span>
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
