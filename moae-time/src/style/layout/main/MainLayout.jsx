import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, HomeModal, Alert } from '../../../components';

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
  const [modalVisible1, setModalVisible1] = useState(false);
  // const [modalVisible2, setModalVisible2] = useState(false);
  // const [modalVisible3, setModalVisible3] = useState(false);

  const handleModalState = (modalVisible) => {
    // joinModal1 에 대한 토글
    setModalVisible(!modalVisible);
    setModalVisible1(false);
  };

  const clickNext = () => {
    setModalVisible(false);
    setModalVisible1(true);
  };

  const closeAll = () => {
    setModalVisible(false);
    setModalVisible1(false);
  };

  const closeModal = () => {
    closeAll();
  };

  const { main } = props;
  return (
    <WholeWrapper>
      <HeaderBox>
        {'need Header contents'}
        <LoginBtn onClick={() => handleModalState(modalVisible)}>
          {'로그인'}
        </LoginBtn>
        <Alert
          visible={modalVisible}
          width="len7"
          close={closeModal}
          padding={'124px 105px'}
          next={clickNext}
        >
          {<HomeModal content={'joinModal1'}></HomeModal>}
        </Alert>
        <Alert
          visible={modalVisible1}
          width="len7"
          close={closeModal}
          padding={'124px 105px'}
          next={clickNext2}
        >
          {<HomeModal content={'joinModal2'}></HomeModal>}
        </Alert>
      </HeaderBox>
      <MainBox>{main}</MainBox>
      <FooterBox>{'need Footer contents'}</FooterBox>
    </WholeWrapper>
  );
}
export default Layout;
