import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, HomeModal } from '../../../components';

const WholeWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 1512px;
  height: 982px;
  position: relative;
`;

const HeaderBox = styled.div`
  margin: 0;
  padding: 0 86px 0 150px;
  width: 1512px;
  height: 80px;
  border-bottom: 0.5px solid #c4c4c4;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a8b0b8;
`;

const MainBox = styled.div`
  width: 100%;
  height: 852px;
`;

const FooterBox = styled.div`
  width: 1512px;
  height: 50px;
  background-color: green;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0 400px;
`;

const LoginBtn = styled.button`
  width: 84px;
  height: 32px;
`;

function Layout(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalState = (modalVisible) => {
    setModalVisible(!modalVisible);
  };

  const { main } = props;
  return (
    <WholeWrapper>
      <HeaderBox>
        {'need Header contents'}
        <LoginBtn onClick={() => handleModalState(modalVisible)}>
          {'로그인'}
        </LoginBtn>
        <HomeModal visible={modalVisible} handleModalState={handleModalState} />
      </HeaderBox>
      <MainBox>{main}</MainBox>
      <FooterBox>{'need Footer contents'}</FooterBox>
    </WholeWrapper>
  );
}
export default Layout;
