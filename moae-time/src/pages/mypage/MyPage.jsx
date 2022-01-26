import React from "react";
import styled from "styled-components";
import { Box } from "../../components/box/Box";

const MyPageWrap = styled.div`
  width: 1168px;
  height: 790px;

  margin-left: 172px;
  margin-top: 25px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const LeftWrap = styled.div`
  width: 479px;
  height: 710px;

  margin-top: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const RightWrap = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;
`

const ProfileAndTextWrap = styled.div`
  width: 200px;
  height: 212px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const ForMargin = styled.div`
  margin: 30px;
`

function MyPage() {
  return (
    <MyPageWrap>
      <Box width="1168px" height="65px" />
      <LeftWrap>
        <ProfileAndTextWrap>
          <Box width="155px" height="155px"/>
          <Box width="100px" height="15px" />
          <Box width="200px" height="32px" />
        </ProfileAndTextWrap>
        <Box width="479px" height="90px" margin="30px 0px 0px 0px" />
        <Box width="479px" height="362px" />
      </LeftWrap>
      <RightWrap>
        <Box width="673px" height="720px" />
      </RightWrap>
    </MyPageWrap>
  )
}

export default MyPage;