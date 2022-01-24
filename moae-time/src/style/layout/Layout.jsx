import React from 'react';
import styled from 'styled-components';

const WholeWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 1512px;
  height: 982px;
  background-color: #28b0b8;
  position: relative;
`;

const HeaderBox = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0 86px 0 150px;
  width: 1512px;
  height: 80px;
  border-bottom: 0.5px solid #c4c4c4;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterBox = styled.div`
  box-sizing: border-box;
  width: 1512px;
  height: 50px;
  background-color: #f9f9f9;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0 400px;
`;

function Layout(props) {
  const { main } = props;
  return (
    <WholeWrapper>
      <HeaderBox>
        <div>1</div>
        <div>2</div>
      </HeaderBox>
      {main}
      <FooterBox>
        <div>이용약관</div>
        <div>개인정보처리방침</div>
        <div>문의하기</div>
        <div>모-애타임</div>
      </FooterBox>
    </WholeWrapper>
  );
}
export default Layout;
