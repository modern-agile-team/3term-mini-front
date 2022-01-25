import React from "react";
import Graybox from "../../components/graybox/Graybox";
import styled from "styled-components";

const HomeLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 180px 0 164px;
  width: 100%;
  height: 100%;
  border: 1px solid gray;
`;

const Side = styled.div`
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

const MainContent = styled.div`
  width: 972px;
  height: 100%;
  border: 1px solid gray;
  position: relative;
`;

const CenterTop = styled.div`
  width: 100%;
  height: 165px;
  border: 1px solid gray;
  margin: 32px 0 17px;
`;

const Col = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const DummyBox = styled.div`
  display: inline-block;
  width: 620px;
  height: 250px;
  border: 1px solid gray;
  margin-right: 18px;
`;
const DummyBox2 = styled.div`
  display: inline-block;
  line-height: 200px;
  border: 1px solid gray;
  width: 334px;
  height: 200px;
`;
const DummyBox3 = styled.div`
  display: inline-block;
  width: 620px;
  height: 291px;
  border: 1px solid gray;
`;

function HomePage() {
  return (
    <HomeLayout>
      <Side>
        {/* <Graybox width="180px" height="227px" />
        <Graybox width="180px" height="86px" />
        <Graybox width="180px" height="120px" />
        <Graybox width="180px" height="120px" />
        <Graybox width="180px" height="120px" /> */}
      </Side>
      <MainContent>
        <CenterTop></CenterTop>
        <Col>
          <DummyBox />
          <DummyBox2 />
        </Col>
        <DummyBox3 />
      </MainContent>
      {/* <CenterTop><Graybox width="972px" height="165px" /></CenterTop> */}
      {/* <CenterBottom> */}
      {/* <Graybox width="620px" height="250px" />
         <Graybox width="620px" height="291px" /> */}
      {/* </CenterBottom> */}
      {/* <Right><Graybox width="336px" height="200px" /></Right> */}
    </HomeLayout>
  );
}

export default HomePage;
