import React from 'react';
import styled from 'styled-components';
import { Box } from '../../components';

const MyPageWrap = styled.div`
  width: 1168px;
  height: 790px;

  margin-left: 172px;
  margin-top: 25px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: teal;
`;

const LeftWrap = styled.div`
  width: 479px;
  height: 710px;

  margin-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: teal;
`;

const RightWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const ProfileAndTextWrap = styled.div`
  width: 200px;
  height: 212px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: yellow;
`;

function MyPagePresenter(props) {
  const { drawingBox } = props;

  return (
    <MyPageWrap>
      <Box width={'len11'} padding={'16px'}>
        <h2>마이페이지</h2>
      </Box>
      {/* <LeftWrap>
        <ProfileAndTextWrap>
          <Box width="len14" padding={'10px'}></Box>
          <Box width="len1" padding={'10px'}></Box>
          <Box width="len15" padding={'10px'}></Box>
        </ProfileAndTextWrap>
        <Box width="479px" height="90px" margin="30px 0px 0px 0px" />
        <Box width="479px" height="362px" />
      </LeftWrap>
      <RightWrap>
        <Box width="673px" height="720px" />
        <Box size="large"></Box>
      </RightWrap> */}
    </MyPageWrap>
  );
}

export default MyPagePresenter;
