import React from "react";
import styled from "styled-components";
import { Box, SideBar, PageNation, BigModal } from "../../components";

const SearchWrap = styled.div`
  width: 821px;
  display: flex;
  justify-content: space-between;
`;

const CenterWrap = styled.div`
  height: 767px;

  margin-top: 25px;
  margin-left: 172px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WholeWrap = styled.div`
  width: 1350px;

  display: flex;
  justify-content: space-between;
`;

function BoardPage() {
  return (
    <WholeWrap>
      <CenterWrap>
        <Box height="65px" width="820px" />
        <SearchWrap>
          <Box height="50px" width="100px" />
          <Box height="50px" width="656px" />
          <Box height="50px" width="50px" />
        </SearchWrap>
        <Box height="601px" width="820px">
          <BigModal />
        </Box>
        <PageNation />
      </CenterWrap>
      <SideBar height="240px" width="336px" />
    </WholeWrap>
  );
}

export default BoardPage;
