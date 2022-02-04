import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, HomeModal, Alert, Text, Button } from '../../../components';
import { Link } from 'react-router-dom';
import { Row, Col } from '../../';
import EveryTime from '../../image/everytime.png';

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
`;

const MainIcon = styled(Link)`
  width: 66px;
  height: 66px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center auto;
`;

const MenuWrapper = styled.div`
  & > * {
    margin-right: 30px;
  }

  & :last-child {
    margin-right: 0;
  }

  & :nth-last-child(2) {
    margin-right: 70px;
  }
`;

const MainBox = styled.div`
  width: 100%;
  height: 852px;
`;

const FooterBox = styled.div`
  width: 1512px;
  height: 50px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0 594px;
  background-color: #f9f9f9;
`;

const LoginBtn = styled.button`
  width: 84px;
  height: 32px;
`;

function Layout(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const handleModalState = (modalVisible) => {
    // loginModal 에 대한 토글
    setModalVisible(!modalVisible);
  };

  const clickNext = () => {
    // joinModal1로 전환
    setModalVisible(false);
    setModalVisible1(true);
  };

  const clickNext1 = () => {
    // joinModal2로 전환
    setModalVisible1(false);
    setModalVisible2(true);
  };

  const clickNext2 = () => {
    // joinModal3로 전환
    setModalVisible2(false);
    setModalVisible3(true);
  };

  const closeAll = () => {
    setModalVisible(false);
    setModalVisible1(false);
    setModalVisible2(false);
    setModalVisible3(false);
  };

  const closeModal = () => {
    closeAll();
  };

  const basicMenu = [
    { name: '자유 게시판', url: '/board' },
    { name: '공지 게시판', url: '/notice' },
    { name: 'Q & A', url: '/QandA' },
  ];

  const menuButtons = () =>
    basicMenu.map((menu) => (
      <Link key={menu.url} to={menu.url}>
        <Text size={'size8'} weight={'medium'} color={'gray1'}>
          {menu.name}
        </Text>
      </Link>
    ));

  const footerMenu = [
    { name: '이용약관', url: '/notice' },
    { name: '개인정보처리방침', url: '/notice' },
    { name: '문의하기', url: '/QandA' },
    { name: '모-애타임', url: '/' },
  ];

  const footerButtons = () =>
    footerMenu.map((menu) => (
      <Link key={menu.url} to={menu.url}>
        <Text size={'size5'} weight={'light'} color={'gray4'}>
          {menu.name}
        </Text>
      </Link>
    ));

  const { main } = props;
  return (
    <WholeWrapper>
      <HeaderBox>
        {modalVisible && (
          <Alert
            visible={modalVisible}
            width="len7"
            close={closeModal}
            padding={'144px 133px'}
            next={clickNext}
          >
            {<HomeModal content={'loginModal'}></HomeModal>}
          </Alert>
        )}
        {modalVisible1 && (
          <Alert
            visible={modalVisible1}
            width="len7"
            close={closeModal}
            padding={'124px 105px'}
            next={clickNext1}
          >
            {<HomeModal content={'joinModal1'}></HomeModal>}
          </Alert>
        )}
        {modalVisible2 && (
          <Alert
            visible={modalVisible2}
            width="len7"
            close={closeModal}
            padding={'71px 105px'}
            next={clickNext2}
          >
            {<HomeModal content={'joinModal2'}></HomeModal>}
          </Alert>
        )}
        {modalVisible3 && (
          <Alert
            visible={modalVisible3}
            width="len7"
            close={closeModal}
            padding={'90px 105px'}
          >
            {<HomeModal content={'joinModal3'}></HomeModal>}
          </Alert>
        )}
        <div>
          <Row>
            <MainIcon img={EveryTime} to="/"></MainIcon>
            <Col width={'len19'}>
              <Text size={'size4'} color={'red'} weight={'medium'}>
                모-애 타임
              </Text>
              <Text color={'gray1'} weight={'light'}>
                인덕대
              </Text>
            </Col>
          </Row>
        </div>
        <div>
          <MenuWrapper>
            {menuButtons()}
            <Button
              width={'len20'}
              borderRadius={'radius2'}
              padding={'len1'}
              onClick={() => handleModalState(modalVisible)}
            >
              {'로그인'}
            </Button>
          </MenuWrapper>
        </div>
      </HeaderBox>
      <MainBox>{main}</MainBox>
      <FooterBox>{footerButtons()}</FooterBox>
    </WholeWrapper>
  );
}
export default Layout;
