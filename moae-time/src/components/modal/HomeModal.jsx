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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.span.attrs(
  ({ width, height, fontSize, margin }) => ({
    row: height,
    col: width,
    fontSize: fontSize,
    margin: margin,
  })
)`
  /* width: 211px;
  height: 24px;
  font-size: 20px; */
  width: ${(props) => props.col};
  height: ${(props) => props.row};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  border: 1px solid gray;
`;

const InputInfo = styled.input.attrs(({ width = '100%', height, margin }) => ({
  row: height,
  col: width,
  margin,
}))`
  width: ${(props) => props.col};
  height: ${(props) => props.row};
  margin: ${(props) => props.margin};

  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 11px;
  border: 1px solid gray;
`;

const CheckBox = styled.input.attrs(({ marginRight = '9px' }) => ({
  type: 'checkbox',
  marginRight: marginRight,
}))`
  width: 12px;
  height: 12px;
  margin-right: ${(props) => props.marginRight};
`;

const SelectBox = styled.select`
  width: 451px;
  height: 41px;
  border-radius: 11px;
  border: 1px solid gray;
`;

const Label = styled.label.attrs(
  ({ to, width, height, margin, display = 'inline-block' }) => ({
    for: to,
    row: height,
    col: width,
    margin: margin,
    display: display,
  })
)`
  width: ${(props) => props.col};
  height: ${(props) => props.row};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  background-color: aqua;
  border: 1px solid gray;
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

function HomeModal(props) {
  const { visible, handleModalState, content, next } = props;

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
          <span>{'처음?'}</span>
          <button to={'/board'}>{'가입'}</button>
        </Row>
      </Col>
    );
  };

  const joinModal1 = () => {
    return (
      <Col padding={'0 105px'}>
        <Description
          width="202px"
          height="35px"
          margin={'0 0 6px 0'}
        ></Description>
        <Description
          width="324px"
          height="44px"
          margin={'0 0 48px 0'}
        ></Description>
        <Description
          width="99px"
          height="35px"
          margin={'0 0 25px 0'}
        ></Description>
        <Label
          width="47px"
          height="18px"
          margin={'0 0 6px 0'}
          display="inline-block"
        ></Label>
        <SelectBox>
          <option key="dummy1" value="dummy1">
            dummy1
          </option>
          <option key="dummy2" value="dummy2">
            dummy2
          </option>
          <option key="dummy3" value="dummy3">
            dummy3
          </option>
        </SelectBox>
        <Label
          width="24px"
          height="18px"
          margin={'28px 0 6px 0'}
          display="inline-block"
        ></Label>
        <InputInfo
          placeholder={'학교 이름'}
          width="451px"
          height="41px"
          margin={'0 0 25px 0'}
        ></InputInfo>
        <Button height={'43px'} onClick={next}>
          {'다음'}
        </Button>
      </Col>
    );
  };

  const joinModal2 = () => {
    return (
      <Col padding={'0 105px'}>
        <Description
          width="202px"
          height="35px"
          margin={'0 0 26px 0'}
        ></Description>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label to="check" width="163px" margin={'0 0 24px 0'}>
            keep info
          </Label>
        </div>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label to="check" width="150px" margin={'0 0 24px 0'}>
            keep info
          </Label>
        </div>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label to="check" width="186px" margin={'0 0 24px 0'}>
            keep info
          </Label>
        </div>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label to="check" width="165px" margin={'0 0 24px 0'}>
            keep info
          </Label>
        </div>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label to="check" width="158px" margin={'0 0 24px 0'}>
            keep info
          </Label>
        </div>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label to="check" width="253px" margin={'0 0 24px 0'}>
            keep info
          </Label>
        </div>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label to="check" width="112px">
            keep info
          </Label>
        </div>
        <Description width="452px" height="38px" margin={'20px 0 36px 0'}>
          {'dummy'}
        </Description>
        <Button height={'43px'} margin={'0 0 10px 0'}>
          {'휴대폰 인증'}
        </Button>
        <Button height={'43px'}>{'아이핀 인증'}</Button>
      </Col>
    );
  };

  const joinModal3 = () => {
    return (
      <Col padding={'0 105px'}>
        <Description
          width="202px"
          height="35px"
          margin={'0 0 26px 0'}
        ></Description>
        <Label
          width="36px"
          height="18px"
          margin={'0 0 6px 0'}
          display="inline-block"
        ></Label>
        <InputInfo
          placeholder={'아이디 입력'}
          width="451px"
          height="41px"
          margin={'0 0 30px 0'}
        ></InputInfo>
        <Label
          width="47px"
          height="18px"
          margin={'0 0 6px 0'}
          display="inline-block"
        ></Label>
        <InputInfo
          placeholder={'비밀번호 입력'}
          width="451px"
          height="41px"
          margin={'0 0 30px 0'}
        ></InputInfo>
        <Label
          width="36px"
          height="18px"
          margin={'0 0 6px 0'}
          display="inline-block"
        ></Label>
        <InputInfo
          placeholder={'이메일 입력'}
          width="451px"
          height="41px"
          margin={'0 0 30px 0'}
        ></InputInfo>
        <Label
          width="36px"
          height="18px"
          margin={'0 0 6px 0'}
          display="inline-block"
        ></Label>
        <InputInfo
          placeholder={'닉네임 입력'}
          width="451px"
          height="41px"
          margin={'0 0 30px 0'}
        ></InputInfo>
        <Button height={'43px'}>{'회원가입'}</Button>
      </Col>
    );
  };

  const main = {
    joinModal1: joinModal1(),
    joinModal2: joinModal2(),
    joinModal3: joinModal3(),
    undefined: <div>잘못된 경로입니다</div>,
    // switch - case => lookup table
  };

  const renderMain = () => {
    return main[content];
  };

  return <>{renderMain()}</>;
}

export default HomeModal;
