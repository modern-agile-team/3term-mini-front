import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Text } from '../../components';
import { Col, Row } from '../../style';
import { HotBoard } from '../../components';

const HomeLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 180px 0 164px;
  width: 100%;
  height: fit-content;
  max-height: 100%;
  overflow: hidden;
`;

const Side = styled(Col)`
  width: 180px;
  max-height: 696px;
  justify-content: space-between;
  * {
    margin-bottom: 6px;
  }
  & :nth-child(1) {
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
  background-color: aqua;
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

function HomePage({ showBoards }) {
  // api 만들면 => state

  return (
    <HomeLayout>
      <Side>
        <Box height={'len6'}>profile</Box>
        <Box height={'len3'}>list btn</Box>
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
