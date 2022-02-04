import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BigModal, Box, PageNation } from '../../components';
import dummyBoard from '../../apis/dummyBoard.json';
import SmallModal from '../../components/smallmodal/SmallModal';


const MyPageWrap = styled.div`
  width: 1168px;
  height: 790px;

  margin-left: 172px;
  margin-top: 25px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f0e9e9;
`;

const LeftWrap = styled.div`
  width: 479px;
  height: 710px;

  margin-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #cfc3c3;
`;

const RightWrap = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 15px;
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

function MyPagePresenter() {
  const [myPageNation, setMyPageNation] = useState(0)

  const clickPageNationOne = () => {
    setMyPageNation(0)
  }

  const clickPageNationTwo = () => {
    setMyPageNation(1)
  }
  
  const clickPageNationThr = () => {
    setMyPageNation(2)
  }

  const clickRight = () => {
    if(myPageNation < 2) {
    setMyPageNation(myPageNation+1)
    } else {
    setMyPageNation(0)
    }
  }

  const clickLeft = () => {
    if(myPageNation > 0) {
      setMyPageNation(myPageNation-1)
      } else {
      setMyPageNation(2)
      }
  }

  const start = myPageNation*14
  const end = myPageNation*14+14;

  useEffect(() => {
    console.log('myPageNation :>> ', myPageNation);
  }, [myPageNation]);

  const mayPageMap = () =>
    dummyBoard.slice(start, end).map((post) => {
      return (
        <>
          <Box padding="10px">{post.title}, {post.inDate}</Box>
        </>
      )
    });

  return (
    <MyPageWrap>
      <Box width={'len11'} padding={'16px'}>
        <h2>마이페이지</h2>
      </Box>
      <LeftWrap>
        <ProfileAndTextWrap>
          <Box width={'len14'} padding={'10px'}>
            프로필
          </Box>
          <Box width={'len1'} padding={'10px'}>
            프로필 편집
          </Box>
          <Box width={'len15'} padding={'10px'}>
            사용자 이름(닉네임)
          </Box>
        </ProfileAndTextWrap>
        <Box width='479px' height='90px' margin='30px 0px 0px 0px'>
          사용자 정보
        </Box>
        <Box width='479px' height='362px'>
          인증 등등
        </Box>
      </LeftWrap>
      <RightWrap>
        <Box width='673px' height='720px'>
          <Box width="len7" padding="10px">내가 쓴 게시물</Box>
          {mayPageMap()}
          <Box padding="0 0 0 35%">
            <PageNation 
            clickPageNationOne={clickPageNationOne}
            clickPageNationTwo={clickPageNationTwo} 
            clickPageNationThr={clickPageNationThr}
            clickLeft={clickLeft} 
            clickRight={clickRight}/>
          </Box>
        </Box>
      </RightWrap>
    </MyPageWrap>
  );
}

export default MyPagePresenter;
