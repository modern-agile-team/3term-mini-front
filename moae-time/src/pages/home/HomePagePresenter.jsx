import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Text, Button } from '../../components';
import { Col, Row } from '../../style';
import { HotBoard } from '../../components';
import ProfileImg from '../../style/image/BasicProfile.png';

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
  /* background-color: #f9f9f9; */
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

function HomePage({ showProfile, showBoards }) {
  // api 만들면 => state

  return (
    <HomeLayout>
      <Side>
        <Box padding={'32px 16px'}>
          <Col>
            <ProfileIcon src={ProfileImg} />
          </Col>
          <Col padding={'11px 0 0 0'}>
            {showProfile()}
            <Row padding={'16px 0 0 0'}>
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
