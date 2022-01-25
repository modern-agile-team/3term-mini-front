import React from 'react';
import Graybox from '../../components/graybox/Graybox';
import styled from 'styled-components';
import SideBar from '../../components/sidebar/SideBar';

const SearchWrap = styled.div`
  width: 816px;

  display: flex;
  justify-content: space-between;
`
const CenterWrap = styled.div`
  width: 816px;

  margin-left: 172px;
`
const WholeWrap = styled.div`
  display: flex;
`

function BoardPage() {
  return (
    <WholeWrap>
      <CenterWrap>
        <Graybox height="65px" width="816px"/>
        <SearchWrap>
          <Graybox height="50px" width="100px" />
          <Graybox height="50px" width="656px" />
          <Graybox height="50px" width="50px" />
        </SearchWrap>
        <Graybox height="601px" width="816px"/>
      </CenterWrap>
      <SideBar height="240px" width="336px"/>
    </WholeWrap>
  );
}

export default BoardPage;
