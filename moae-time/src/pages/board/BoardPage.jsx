import React from 'react';
import Graybox from '../../components/graybox/Graybox';
import styled from 'styled-components';
import SideBar from '../../components/sidebar/SideBar';
import PageNation from '../../components/pagenation/PageNation';

const SearchWrap = styled.div`
  width: 821px;

  display: flex;
  justify-content: space-between;
`
const CenterWrap = styled.div`
  /* width: 816px; */
  /* height: 791px; */
  height: 767px;

  margin-top: 25px;
  margin-left: 172px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const WholeWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`

function BoardPage() {
  return (
    <WholeWrap>
      <CenterWrap>
        <Graybox height="65px" width="820px"/>
        <SearchWrap>
          <Graybox height="50px" width="100px"/>
          <Graybox height="50px" width="656px"/>
          <Graybox height="50px" width="50px"/>
        </SearchWrap>
        <Graybox height="601px" width="820px"/>
        <PageNation />
      </CenterWrap>
      <SideBar height="240px" width="336px"/>
    </WholeWrap>
  );
}

export default BoardPage;
