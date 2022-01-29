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
  // const [modalVisible1, setModalVisible1] = useState(false);
  // const [modalVisible2, setModalVisible2] = useState(false);
  // const [modalVisible3, setModalVisible3] = useState(false);

  const handleModalState = (modalVisible) => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const { main } = props;
  return (
    <WholeWrapper>
      <HeaderBox>
        {'need Header contents'}
        <LoginBtn onClick={() => handleModalState(modalVisible)}>
          {'로그인'}
        </LoginBtn>
        {/* <HomeModal visible={modalVisible} handleModalState={handleModalState} /> */}
        <Alert
          // 모달 comp
          visible={modalVisible}
          // 띄우기 여부 변수를 visible 로 넘겨주고
          width="len7"
          // 모달창 크기 알려주고
          close={closeModal}
          // 띄우기 여부 변수 -> false 로 만드는 함수 넘겨주고
          padding={'144px 0'}
        >
          {<HomeModal></HomeModal>}
        </Alert>
        {/* <Alert visible={modalVisible1} width="len7" backColor="white">
          2
        </Alert> */}
        {/* <Alert visible={modalVisible2} width="len7" backColor="white">
          3
        </Alert>
        <Alert visible={modalVisible3} width="len7" backColor="white">
          4
        </Alert> */}
      </HeaderBox>
      <MainBox>{main}</MainBox>
      <FooterBox>{'need Footer contents'}</FooterBox>
    </WholeWrapper>
  );
}
export default Layout;
