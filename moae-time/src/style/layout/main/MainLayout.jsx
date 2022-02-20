import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HomeModal, Alert, Text, Button } from '../../../components';
import { MainStyle } from '../../';
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';
import { Row, Col } from '../../';
import EveryTime from '../../image/everytime.png';
import { HomePage } from '../../../pages';

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

const Menu = styled.span.attrs(
  ({
    size = 'default',
    color = 'default',
    weight = 'default',
    padding = 'default',
  }) => ({
    size: MainStyle.checkFontSize[size],
    color: MainStyle.checkColor[color],
    weight: MainStyle.checkWeight[weight],
    padding: MainStyle.checkPadding[padding],
  })
)`
  position: relative;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  padding: ${(props) => props.padding};
  vertical-align: middle;
`;

const UnderLine = styled.div`
  position: absolute;
  left: 0;
  top: 48px;
  width: 100%;
  height: 3px;
  background-color: #c62935;
`;

function Layout(props) {
  const { main, path } = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [getData, setData] = useState(null);
  const [getCheckResult, setCheckResult] = useState(null);
  const [getLoginUserData, setLoginUserData] = useState(null);

  const getUserNo = (userNo) => {
    console.log('MainLayout--Console :>> ', userNo);
    setLoginUserData(userNo);
  };

  const handleModalState = (modalVisible, loginUserData) => {
    // loginModal 에 대한 토글
    setModalVisible(!modalVisible);
    setLoginUserData(loginUserData);
  };

  const clickNext = () => {
    // joinModal1로 전환
    // 로그인창에서 next
    setModalVisible(false);

    setModalVisible1(true);
  };

  const clickNext1 = (data, checkResult) => {
    // joinModal2로 전환
    setData(data);
    setCheckResult(checkResult);
    setModalVisible1(false);
    setModalVisible2(true);
  };

  const clickNext2 = (data, checkResult) => {
    // joinModal3로 전환
    setData(data);
    setCheckResult(checkResult);
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

  const menuButtons = () => {
    const target = {
      true: 'red',
      false: 'gray1',
    };
    return basicMenu.map((menu) => (
      <Link key={menu.url} to={menu.url}>
        <Menu
          size={'size8'}
          weight={'medium'}
          color={target[path === menu.url]}
          underline={path === menu.url}>
          {menu.name}
          {path === menu.url && <UnderLine></UnderLine>}
        </Menu>
      </Link>
    ));
  };

  const footerMenu = [
    { name: '이용약관', url: '/notice' },
    { name: '개인정보처리방침', url: '/notice' },
    { name: '문의하기', url: '/QandA' },
    { name: '모-애타임', url: '/' },
  ];

  const footerButtons = () =>
    footerMenu.map((menu) => (
      <Link key={menu.name} to={menu.url}>
        <Text size={'size5'} weight={'light'} color={'gray4'}>
          {menu.name}
        </Text>
      </Link>
    ));

  return (
    <WholeWrapper>
      <HeaderBox>
        {modalVisible && (
          <Alert
            visible={modalVisible}
            width="len7"
            close={closeModal}
            padding={'144px 133px'}
            next={clickNext}>
            {<HomeModal func={getUserNo} content={'loginModal'}></HomeModal>}
          </Alert>
        )}
        {modalVisible1 && (
          <Alert
            visible={modalVisible1}
            width="len7"
            close={closeModal}
            padding={'124px 105px'}
            next={clickNext1}>
            {<HomeModal func={getUserNo} content={'joinModal1'}></HomeModal>}
          </Alert>
        )}
        {modalVisible2 && (
          <Alert
            visible={modalVisible2}
            width="len7"
            close={closeModal}
            padding={'71px 105px'}
            data={getData}
            checkResult={getCheckResult}
            next={clickNext2}>
            {
              <HomeModal
                func={getUserNo}
                content={'joinModal2'}
                data={getData}></HomeModal>
            }
          </Alert>
        )}
        {modalVisible3 && (
          <Alert
            visible={modalVisible3}
            width="len7"
            close={closeModal}
            padding={'90px 105px'}>
            {
              <HomeModal
                func={getUserNo}
                content={'joinModal3'}
                data={getData}
                checkResult={getCheckResult}></HomeModal>
            }
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
                {'인덕대'}
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
              onClick={() => handleModalState(modalVisible)}>
              {'로그인'}
            </Button>
          </MenuWrapper>
        </div>
      </HeaderBox>
      <MainBox id={getLoginUserData}>{main}</MainBox>
      <FooterBox>{footerButtons()}</FooterBox>
    </WholeWrapper>
  );
}
export default Layout;
