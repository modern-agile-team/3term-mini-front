import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Text, Button } from '../../components';
import { Col, Row, MainStyle } from '../../style';
import { HotBoard } from '../../components';
import ProfileImg from '../../style/image/BasicProfile.png';
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
  margin: 0 0 17px;
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

  const homePageCompo = useRef(null);
  const [userNo, setUserNo] = useState(0);

  useEffect(() => {
    let loginNo = homePageCompo.current.parentElement.id;
    setUserNo(Number(loginNo));
  });

  useEffect(() => {
    axios.get(`http://3.36.125.16:8080/moae/profile/${userNo}`).then((res) => {
      setLoginUserInfo({
        userNickname: res.data.profile.nickname,
        userId: res.data.profile.id,
        userMail: res.data.profile.mail,
      });
    });
  }, [userNo]);

  const showProfile = () => (
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

  const showBoards = () => {
    return board.slice(0, 5).map((board) => (
      <NewRow key={board.boardNo} padding={'10px'}>
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
    <HomeLayout ref={homePageCompo}>
      <Side>
        <Box padding={'32px 16px'}>
          {userNo ? (
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
                      border={'1px solid #D6D6D6'}
                    >
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
                  >
                    {'로그아웃'}
                  </Button>
                </Row>
              </Col>
            </>
          ) : (
            <Col padding={'11px 0 0 0'}>{'비회원'}</Col>
          )}
        </Box>
        <Box>list btn</Box>
        <SideAdBox>ad1</SideAdBox>
        <SideAdBox>ad2</SideAdBox>
        <SideAdBox>ad3</SideAdBox>
      </Side>
      <MainContent>
        <TopAd></TopAd>
        <Row width="100%" height="100px" align="left">
          <Box width={'len5'} height={'len12'} backColor={'white'}>
            <Col>
              <Col padding={'10px'} align={'left'}>
                <Text size={'size6'} color={'red'} weight={'medium'}>
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
