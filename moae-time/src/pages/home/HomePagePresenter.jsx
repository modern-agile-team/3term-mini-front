import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '../../components';
import { Col, Row } from '../../style';

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

const MainContent = styled.div`
  width: 972px;
  height: fit-content;
  max-height: 100%;
  border: none;
  /* background-color: gray; */
  position: relative;
`;

const CenterTop = styled(Box)`
  width: 100%;
  height: 165px;
  margin: 0 0 17px;
`;

const DummyBox = styled(Box)`
  display: inline-block;
  margin-right: 18px;
  width: 620px;
  height: 250px;
`;
const DummyBox2 = styled(Box)`
  display: inline-block;
  line-height: 200px;
  width: 334px;
  height: 200px;
`;
const DummyBox3 = styled(Box)`
  display: inline-block;
  width: 620px;
  height: 291px;
  border: 1px solid gray;
`;

const SideFirst = styled(Box)`
  width: 100%;
  height: 227px;
`;

const SideSecond = styled(Box)`
  width: 100%;
  height: 86px;
  /* height: fit-content;
  max-height: 86px; */
`;

const SideThird = styled(Box)`
  border: none;
  width: 100%;
  height: 120px;
  /* height: fit-content;
max-height: 120px; */
`;

function HomePage(props) {
  return (
    <HomeLayout>
      <Side>
        <SideFirst>profile</SideFirst>
        <SideSecond>list btn</SideSecond>
        <SideThird>ad1</SideThird>
        <SideThird>ad2</SideThird>
        <SideThird>ad3</SideThird>
      </Side>
      <MainContent>
        <CenterTop></CenterTop>
        <Row width="100%" height="100px">
          <DummyBox>
            <Box height="50px">22</Box>
            <Box height="50px">22</Box>
            <Box height="50px">22</Box>
          </DummyBox>
          <DummyBox2 />
        </Row>
        <DummyBox3></DummyBox3>
      </MainContent>
    </HomeLayout>
  );
}

export default HomePage;
