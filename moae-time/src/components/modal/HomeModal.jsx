import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Box, Button } from '../';
import { Col, Row } from '../../style';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  overflow: auto;
`;

const ModalBox = styled(Box)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border-radius: 24px;
  overflow: auto;
`;

const ModalContainer = styled.div`
  /* background-color: red; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function HomeModal(props) {
  const { visible, handleModalState } = props;

  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      handleModalState(visible);
    }
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  const closeBtn = () => {
    handleModalState(visible);
  };

  const Description = styled.span`
    width: 211px;
    height: 24px;
    font-size: 20px;
    border: 1px solid gray;
  `;

  const InputInfo = styled.input`
    width: 371px;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    margin-bottom: 5px;
  `;

  const CheckBox = styled.input.attrs(({}) => ({
    type: 'checkbox',
  }))`
    width: 12px;
    height: 12px;
    margin-right: 6px;
  `;

  const Label = styled.label.attrs(({ to }) => ({
    for: to,
  }))`
    width: 12px;
    height: 12px;
    margin-right: 6px;
    background-color: aqua;
  `;

  const Icon = styled.img`
    width: 93px;
    height: 93px;
    background-color: #c62935;
  `;

  const TagA = styled.a`
    width: 125px;
    height: 20px;
    background-color: aqua;
  `;

  const loginModal = () => {
    return (
      <Col padding={'0 145px'}>
        <Row padding={'0 0 15px'} align={'flex-end'}>
          <Icon /> <Description>description</Description>
        </Row>
        <InputInfo placeholder={'Id'}></InputInfo>
        <InputInfo placeholder={'PassWord'}></InputInfo>
        <Button height={'42px'} margin={'0 0 12px 0'}>
          {'로그인 버튼'}
        </Button>
        <Row padding={'0 0 29px'}>
          <div>
            <CheckBox name="keeping" id="check" />
            <Label to="check">keep info</Label>
          </div>
          <TagA>find...</TagA>
        </Row>
        <Row padding={'0 120px'}>
          <spzn>{'처음?'}</spzn>
          <Link to={'/board'}>{'가입'}</Link>
        </Row>
      </Col>
    );
  };

  return (
    <ModalWrapper visible={visible} onClick={onCloseModal}>
      <ModalBox width="len7" height="len15">
        <ModalContainer>
          {/* <button onClick={closeBtn}>Close</button> */}
          {loginModal()}
          {/* 여기에 loginModal 처럼 만들어서 테스트 */}
        </ModalContainer>
      </ModalBox>
    </ModalWrapper>
  );
}

export default HomeModal;
