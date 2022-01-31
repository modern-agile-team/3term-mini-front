import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, SideBar, PageNation, BigModal } from '../../components';
import { Col, Row } from '../../style';

function BoardOne() {
  const boards = {};

  return (
    <Row padding="25px 172px 0px" align="flex-start">
      <Col width="len8" align="flex-start">
        <Row padding="0 0 5px">
          <Box padding="15px">자유 게시판</Box>
        </Row>
        <Box width="len8" padding="15px">
          <Col align="flex-start">
            <Row>
              <div>icon</div>
              <Col>
                <Row>
                  <div>작성자 이름</div>
                  <div>
                    <a>수정</a>
                    <a>삭제</a>
                  </div>
                </Row>
                <Col align="flex-start">날짜</Col>
              </Col>
            </Row>
            <h1>게시글 제목</h1>
            <div>
              {/* max-height, scroll 고고 */}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus laborum consequatur nostrum molestiae eveniet
              nihil, tempore sequi eos nesciunt iusto maiores temporibus dolores
              quas dolore quis quos! Quae, beatae laboriosam!
            </div>
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
                <input id="익명" type="checkbox" />
                <label for="익명">익명</label>
                <span>버튼</span>
              </div>
            </Row>
          </Box>
        </Row>
        <Col padding="5px 0 ">
          <Box padding="15px">
            <Col>
              <Row padding="5px 0 0">
                <div>
                  <span>icon</span>
                  <span>댓글 단 사람1</span>
                </div>
              </Row>
              <Row>
                <div>댓글 내용</div>
                <span>날짜</span>
              </Row>
              {/* --- */}
              <Row padding="5px 0 0">
                <div>
                  <span>icon</span>
                  <span>댓글 단 사람1</span>
                </div>
              </Row>
              <Row>
                <div>댓글 내용</div>
                <span>날짜</span>
              </Row>
              {/* --- */}
              <Row padding="5px 0 0">
                <div>
                  <span>icon</span>
                  <span>댓글 단 사람1</span>
                </div>
              </Row>
              <Row>
                <div>댓글 내용</div>
                <span>날짜</span>
              </Row>
            </Col>
          </Box>
        </Col>
        <div>
          <button>글목록</button>
        </div>
      </Col>
      <Box width="len3">
        <Row padding="10px">
          <span>HOT 게시물</span> <Link to={'/'}>더 보기</Link>
        </Row>
      </Box>
    </Row>
  );
}

export default BoardOne;
