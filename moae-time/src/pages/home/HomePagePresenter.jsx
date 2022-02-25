import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Text, Button } from '../../components';
import { Col, Row, MainStyle } from '../../style';
import { HotBoard } from '../../components';
import ProfileImg from '../../style/image/BasicProfile.png';
import WriteImg from '../../style/image/writed.png';
import CommentImg from '../../style/image/comment.png';
import MainAdImg from '../../style/image/mainAd.png';
import SideAdImg1 from '../../style/image/mainSideAd1.png';
import SideAdImg2 from '../../style/image/mainSideAd2.png';
import SideAdImg3 from '../../style/image/mainSideAd3.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 180px 0 164px;
  width: 100%;
  height: fit-content;
  max-height: 100%;
  overflow: hidden;
`;

const ProfileIcon = styled.img`
  width: 63px;
  height: 63px;
`;

const Register = styled.span`
  width: 100%;
  text-align: center;
  padding: 51px 0;
  margin-top: -11px;
`;

const Side = styled(Col)`
  width: 180px;
  max-height: 696px;
  justify-content: space-between;
  & > * {
    margin-bottom: 6px;
  }
  & > :nth-child(1) {
    margin-bottom: 5px;
  }
  & :last-child {
    margin-bottom: 0;
  }
`;

const SideBtnBox = styled(Box)`
  & :hover {
    background-color: #c62935;
    color: white;
  }
  & > :first-of-type {
    border-bottom: 1px solid #ededed;
  }

  & > :first-of-type img {
    width: 11px;
    height: 7px;
    margin-right: 11px;
  }
`;

const SideBtn = styled(Link)`
  padding: 10px 17px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
`;

const SideBtnIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;

const SideAdBox = styled.div`
  border: none;
  width: 100%;
  height: 120px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center auto;
`;

const MainContent = styled.div`
  width: 972px;
  height: fit-content;
  max-height: 100%;
  border: none;
  position: relative;
`;

const TopAd = styled(Box)`
  width: 100%;
  height: 165px;
  margin: 0 0 20px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center auto;
  border: none;
`;

const NewRow = styled(Row)`
  & {
    border-top: 1px solid ${MainStyle.checkColor.gray9};
  }
`;

const NewText = styled(Text)`
  display: block;
  width: ${MainStyle.checkWidth.len16};
  font-size: ${MainStyle.checkFontSize.size7};
  font-weight: ${MainStyle.checkWeight.light} !important;
  color: ${MainStyle.checkColor.gray2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

function HomePage({ id }) {
  const [loginUserInfo, setLoginUserInfo] = useState({
    userNickname: '',
    userId: '',
    userMail: '',
  });

  useEffect(() => {
    id &&
      axios.get(`http://3.36.125.16:8080/moae/profile/${id}`).then((res) => {
        setLoginUserInfo({
          userNickname: res.data.profile.nickname,
          userId: res.data.profile.id,
          userMail: res.data.profile.mail,
        });
      });
  }, [id]);

  const showProfile = () =>
    id && (
      <>
        <span>{loginUserInfo.userNickname}</span>
        <span>{loginUserInfo.userId}</span>
        <span>{loginUserInfo.userMail}</span>
      </>
    );

  let [board, setBoard] = useState([]);

  useEffect(() => {
    axios.get('http://3.36.125.16:8080/moae/board').then((res) => {
      setBoard(res.data);
    });
  }, []);

  const reload = () => {
    window.location.reload();
  };

  const showBoards = () => {
    return board.slice(0, 8).map((board) => (
      <NewRow key={board.boardNo} padding={'14px 33px 14px 22px'}>
        <Row width={'len5'}>
          <NewText>
            <Link to={`/board/${board.boardNo}`}>{board.title}</Link>
          </NewText>
          <Text size={'size2'}>{board.inDate}</Text>
        </Row>
      </NewRow>
    ));
  };

  return (
    <HomeLayout>
      <Side>
        <Box padding={'32px 16px 17px'}>
          {id ? (
            <>
              <Col>
                <ProfileIcon src={ProfileImg} />
              </Col>
              <Col padding={'11px 0 0 0'}>
                {showProfile()}
                <Row padding={'16px 0 0 0'}>
                  <Link to="/mypage">
                    <Button
                      width={'len19'}
                      fontSize={'size3'}
                      borderRadius={'radius2'}
                      padding={'len6'}
                      backColor={'gray5'}
                      fontColor={'gray3'}
                      border={'1px solid #D6D6D6'}>
                      {'내 정보'}
                    </Button>
                  </Link>
                  <Button
                    width={'len20'}
                    fontSize={'size3'}
                    borderRadius={'radius2'}
                    padding={'len6'}
                    backColor={'gray5'}
                    fontColor={'gray3'}
                    border={'1px solid #D6D6D6'}
                    onClick={reload}>
                    {'로그아웃'}
                  </Button>
                </Row>
              </Col>
            </>
          ) : (
            <Register>{'비회원'}</Register>
          )}
        </Box>
        {id ? (
          <SideBtnBox>
            <SideBtn to="/mypage">
              <SideBtnIcon src={WriteImg} />
              {'내가 쓴 글'}
            </SideBtn>
            <SideBtn to="/mypage">
              <SideBtnIcon src={CommentImg} />
              {'댓글 단 글'}
            </SideBtn>
          </SideBtnBox>
        ) : null}

        <SideAdBox img={SideAdImg1} />
        <SideAdBox img={SideAdImg2} />
        <SideAdBox img={SideAdImg3} />
      </Side>
      <MainContent>
        <TopAd img={MainAdImg} />
        <Row width="100%" height="100px" align="left">
          <Box width={'len5'} height={'len12'} backColor={'white'}>
            <Col>
              <Col padding={'14px 24px'} align={'left'}>
                <Text size={'size6'} color={'red'} weight={'bold'}>
                  자유게시판
                </Text>
              </Col>
              {showBoards()}
            </Col>
          </Box>
          <Box width={'len3'} height={'len5'}>
            <HotBoard />
          </Box>
        </Row>
      </MainContent>
    </HomeLayout>
  );
}

export default HomePage;
