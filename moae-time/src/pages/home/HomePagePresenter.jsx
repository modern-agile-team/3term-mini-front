import React, { useState } from 'react';
import styled from 'styled-components';
import { BoxWrap, HomeModal } from '../../components';

const HomeLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 180px 0 164px;
  width: 100%;
  height: 100%;
  /* border: 1px solid gray; */
`;

const Side = styled(BoxWrap)`
  margin: 32px 0 0;
  width: 180px;
  height: 696px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & :nth-child(1) {
    margin-bottom: -1px;
  }
`;

const MainContent = styled(BoxWrap)`
  width: 972px;
  height: 100%;
  border: none;
  position: relative;
`;

const CenterTop = styled(BoxWrap)`
  width: 100%;
  height: 165px;
  border: 1px solid gray;
  margin: 32px 0 17px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled(BoxWrap)`
  display: flex;
  border: none;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const DummyBox = styled(BoxWrap)`
  display: inline-block;
  width: 620px;
  height: 250px;
  border: 1px solid gray;
  margin-right: 18px;
`;
const DummyBox2 = styled(BoxWrap)`
  display: inline-block;
  line-height: 200px;
  border: 1px solid gray;
  width: 334px;
  height: 200px;
`;
const DummyBox3 = styled(BoxWrap)`
  display: inline-block;
  width: 620px;
  height: 291px;
  border: 1px solid gray;
`;

function HomePage(props) {
  return (
    <HomeLayout>
      <Side />
      <MainContent>
        <CenterTop>
          <button onClick={props.handleModalState}>Modal</button>
          {
            <HomeModal
              visible={props.modalVisible}
              handleModalState={props.handleModalState}
            />
          }
        </CenterTop>
        <Row>
          <DummyBox />
          <DummyBox2 />
        </Row>
        <DummyBox3 />
      </MainContent>
    </HomeLayout>
  );
}

export default HomePage;
