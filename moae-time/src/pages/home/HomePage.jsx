import React from 'react';
import Graybox from '../../components/graybox/Graybox';
import styled from 'styled-components';

const HomeLayout = styled.div`
  box-sizing: border-box;
  display: grid;
  width: 100%;
  height: auto;
  position: absolute;
  margin: 0;
  padding: 0;
  /* background-color: red; */
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 70px);
  grid-template-areas: 'item01 item02 item03 item04';
`;

const Side = styled.div`
  grid-area: item01;
  box-sizing: border-box;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 12;
  margin: 0;
  padding: 0;
`;

const CenterTop = styled.div`
  grid-area: item02;
  box-sizing: border-box;
  grid-column-start: 3;
  grid-column-end: 12;
  grid-row-start: 1;
  grid-row-end: 4;
  margin: 0;
  padding: 0;
  /* background-color: red; */
`;

const CenterBottom = styled.div`
  grid-area: item03;
  box-sizing: border-box;
  grid-column-start: 3;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 12;
  margin: 0;
  padding: 0;
`;

const Right = styled.div`
  grid-area: item04;
  box-sizing: border-box;
  grid-column-start: 9;
  grid-column-end: 12;
  grid-row-start: 4;
  grid-row-end: 7;
  margin: 0;
  padding: 0;
`;

function HomePage() {
  return (
    <HomeLayout>
      <Side>
        <Graybox width="180px" height="227px" />
        <Graybox width="180px" height="86px" />
        <Graybox width="180px" height="120px" />
        <Graybox width="180px" height="120px" />
        <Graybox width="180px" height="120px" />
      </Side>
      <CenterTop>
        <Graybox width="972px" height="165px" />
      </CenterTop>
      <CenterBottom>
        <Graybox width="620px" height="250px" />
        <Graybox width="620px" height="291px" />
      </CenterBottom>
      <Right>
        <Graybox width="336px" height="200px" />
      </Right>
    </HomeLayout>
  );
}

export default HomePage;
