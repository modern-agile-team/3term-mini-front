import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BasicProfile from '../../style/image/BasicProfile.png';
import { Box, Text, HotBoard } from '../../components';
import { Col, Row } from '../../style';
import BoardReportModal from '../../components/boardreport/BoardReportModal';
import Writing from '../../style/image/writing.png';



const ContentBox = styled(Box)`
  border: none;
  max-height: 173px;
  overflow: auto;
  overflow-x: hidden;
`;

const Input = styled.textarea`
  width: 700px;
  height: 20px;
  max-height: 173px;
  overflow: scroll;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  vertical-align: top;
  resize: none;
  overflow: auto;
`;

const LinkToBoardBtn = styled.button`
  width: 70px;
  height: 37px;
  color: #737373;
  border-radius: 3px;
  border: 1px solid #D6D6D6;
  background-color: white;
`;

const GrayBtn = styled.button`
  border: none;
  background: #F9F9F9;
  font-size: 14px;
  color: #A6A6A6;
  margin-left: 15px;
`
const WriteImg = styled.img`
  outline: none;
  padding: 15px;
  margin-top: 3px;
  border: 1px solid #d6d6d6;
  background: #C62935;
  height: 52px;
  width: 52px;
`;

const Img = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: ${(props) => props.radius};
  margin: ${(props) => props.margin};
`;

function BoardOne({ id }) {
  const userNo = id;
  const boardNo = useParams();
  const [rerander, setRerander] = useState(true);
  const [boardReport, setBoardReport] = useState(false);
  const [boardOneState, setBoardOneState] = useState(null);
  const [commentsState, setCommentsState] = useState(null);
  const [postCommentState, setPostCommentState] = useState();

  const getBoardOneData = () => {
    axios
      .get(`http://3.36.125.16:8080/moae/board/connect/${boardNo.boardId}/${userNo}`)
      .then((res) => {
        setBoardOneState(res.data.boardData);
        setCommentsState(res.data.comments);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };
  
  const deletePost = () => {
    axios
      .delete(
        `http://3.36.125.16:8080/moae/board/deleteBoard/${boardNo.boardId}`
      )
      .then((res) => {
        setTimeout(() => {
          alert(res.data.msg);
        }, 500);
      });
  };

  useEffect(() => {
    getBoardOneData();
  }, [rerander]);

  const commentValue = (e) => {
    setPostCommentState(e.target.value);
  };

  const postComment = (e) => {
    const postData = {
      userNo: userNo,
      boardNo: boardOneState.boardNo,
      description: `${postCommentState}`,
    };
    e.target &&
      axios
        .post('http://3.36.125.16:8080/moae/comment', postData)
        .then((res) => {
          console.log('res :>> ', res);
          getBoardOneData();
        })
        .catch((err) => {
          console.log('err.response', err.response);
        });
  };

  const deleteComment = (cmtId) => {
    axios
      .delete(`http://3.36.125.16:8080/moae/comment/${cmtId}`)
      .then((res) => {
        console.log('res :>> ', res);
      })
      .catch((err) => {
        console.log('에러 :>> ', err.response);
      });
    setCommentsState(
      [...commentsState].filter((comment) => comment.cmtId !== cmtId)
    );
  };

  const showComments = () => {
    return (
      commentsState &&
      commentsState.slice(0, 3).map((comment, i) => {
        return (
          <Fragment key={comment.cmtId}>
            <Row padding="5px 0 0">
              <Img
                src={BasicProfile}
                size={'20px'}
                radiius={'2px'}
                margin={'0 10px 0 0'}
              />
              <Row>
                <Text size={'size3'} color={'gray1'}>
                  {comment.nickname}
                </Text>
                {commentsState && userNo === commentsState[i].commentUserNo ? (
                  <GrayBtn onClick={() => deleteComment(comment.cmtId)}>
                    삭제
                  </GrayBtn>
                ) : (
                  <></>
                )}
              </Row>
            </Row>
            <Row>
              <Text size={'size7'} color={'gray2'}>
                {comment.description}
              </Text>
              <Text size={'size3'} color={'gray4'}>
                {comment.inDate}
              </Text>
            </Row>
          </Fragment>
        );
      })
    );
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
            <Row padding={'0 0 15px 0'}>
              <Img
                src={BasicProfile}
                size={'40px'}
                radius={'6px'}
                margin={'0 10px 0 0'}
              ></Img>
              <Col>
                <Row>
                  <Text color={'gray1'}>
                    {boardOneState && boardOneState.nickname}
                  </Text>
                  <div>
                    {boardOneState &&
                    userNo === boardOneState.boardWriteUserNo ? (
                      <>
                        <Link to={`/board/${boardNo.boardId}/edit`}>
                          <GrayBtn>수정</GrayBtn>
                        </Link>
                        <Link to={'/board'}>
                          <GrayBtn onClick={deletePost}>삭제</GrayBtn>
                        </Link>
                      </>
                    ) : (
                      <>
                        <GrayBtn onClick={() => setBoardReport(true)}>
                          {'신고'}
                        </GrayBtn>
                        <BoardReportModal
                          setBoardReport={setBoardReport}
                          boardReport={boardReport}
                          boardOneState={boardOneState}
                        ></BoardReportModal>
                      </>
                    )}
                  </div>
                </Row>
                <Col align="flex-start">
                  {boardOneState && boardOneState.boardInDate}
                </Col>
              </Col>
            </Row>
            <h1>{boardOneState && boardOneState.title}</h1>
            <ContentBox>
              {boardOneState && boardOneState.description}
            </ContentBox>
            <Row>
              <div>
                <span>
                  댓글:{boardOneState && boardOneState.comments_length}{' '}
                </span>
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
                  <Img
                    src={BasicProfile}
                    size={'20px'}
                    radiius={'2px'}
                    margin={'0 10px 0 0'}
                  />
                  <Input
                    type="text"
                    placeholder="댓글을 입력하세요."
                    onChange={commentValue}
                  ></Input>
                </Row>
              </div>
            </Row>
          </Box>
          <WriteImg 
            src={Writing}
            onClick={postComment}
          />
        </Row>
        <Col padding="5px 0 ">
          <Box padding="15px">
            <Col>{showComments()}</Col>
          </Box>
        </Col>
        <div>
          <LinkToBoardBtn>
            <Link to="/board">글목록</Link>
          </LinkToBoardBtn>
        </div>
      </Col>
      <Box width="len3">
        <HotBoard 
        rerander={rerander}
        setRerander={setRerander}
        />
      </Box>
    </Row>
  );
}

export default BoardOne;
