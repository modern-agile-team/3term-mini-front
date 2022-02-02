import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import searchImg from '../../style/image/search.png';

import { Box, Button } from '../';
import { Col, Row, MainStyle } from '../../style';

const Description = styled.span.attrs(
  ({ margin = '0 0 0 0', fontSize = 'default' }) => ({
    margin,
    fontSize: MainStyle.checkFontSize[fontSize],
  })
)`
  /* width: 211px;
  height: 24px;
  font-size: 20px; */
  /* width: ${(props) => props.col}; */
  width: fit-content;
  height: fit-content;
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  border: 1px solid gray;
`;

const InputInfo = styled.input.attrs(
  ({
    width = '100%',
    height,
    margin,
    borderRadius = 'default',
    fontSize = 'default',
  }) => ({
    row: height,
    col: width,
    margin: margin,
    borderRadius: MainStyle.checkRadius[borderRadius],
    fontSize: MainStyle.checkFontSize[fontSize],
  })
)`
  width: ${(props) => props.col};
  height: ${(props) => props.row};
  margin: ${(props) => props.margin};
  padding-left: 10px;

  outline: none;
  border-radius: ${(props) => props.borderRadius};
  border: 1px solid gray;
  font-size: ${(props) => props.fontSize};
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
  padding-left: 9px;
  border-radius: ${MainStyle.checkRadius.radius4};
  border: 1px solid gray;
  font-size: ${MainStyle.checkFontSize.size8};
`;

const Label = styled.label.attrs(
  ({ to, margin, display = 'inline-block', fontSize = 'default' }) => ({
    for: to,
    margin: margin,
    display: display,
    fontSize: MainStyle.checkFontSize[fontSize],
  })
)`
  width: fit-content;
  height: fit-content;
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  font-size: ${(props) => props.fontSize};
  background-color: aqua;
  border: 1px solid gray;
`;

const Search = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  bottom: 205px;
  right: 122px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 93px;
  height: 93px;
  background-color: ${MainStyle.checkColor.red};
`;

const TagA = styled.a`
  width: 125px;
  height: 20px;
  background-color: aqua;
`;

function HomeModal(props) {
  const { content, next } = props;

  const loginModal = () => {
    return (
      <Col>
        <Row padding={'0 0 15px'} align={'flex-end'}>
          <Icon /> <Description fontSize={'size7'}>description</Description>
        </Row>
        <InputInfo
          placeholder={'Id'}
          height={'41px'}
          fontSize={'size6'}
          margin={'0 0 5px 0'}></InputInfo>
        <InputInfo
          placeholder={'PassWord'}
          height={'41px'}
          fontSize={'size6'}
          margin={'0 0 5px 0'}></InputInfo>
        <Button height={'42px'} padding={'10px 0'} borderRadius="default">
          {'로그인'}
        </Button>
        <Row padding={'12px 0 29px'}>
          <div>
            <CheckBox name="keeping" id="check" />
            <Label to="check" fontSize={'size5'}>
              keep info
            </Label>
          </div>
          <TagA>find...</TagA>
        </Row>
        <Row padding={'0 120px'}>
          <span>{'처음?'}</span>
          <button to={'/board'} onClick={next}>
            {'가입'}
          </button>
        </Row>
      </Col>
    );
  };

  const joinModal1 = () => {
    return (
      <Col align={'left'}>
        <Description margin={'0 0 6px 0'} fontSize={'default'}>
          {'Description'}
        </Description>
        <Description fontSize={'size7'}>{'Description'}</Description>
        <Description margin={'48px 0 25px 0'} fontSize={'default'}>
          {'Description'}
        </Description>
        <Label margin={'0 0 6px 0'} display="inline-block" fontSize={'size4'}>
          {'Label'}
        </Label>
        <SelectBox>
          <option key="dummy1" value="none">
            연도 선택 (학번)
          </option>
          <option key="dummy2" value="dummy2">
            dummy2
          </option>
          <option key="dummy3" value="dummy3">
            dummy3
          </option>
        </SelectBox>
        <Label
          margin={'28px 0 6px 0'}
          display="inline-block"
          fontSize={'size4'}>
          {'Label'}
        </Label>
        <Row>
          <InputInfo
            placeholder={'학교 이름을 검색하세요'}
            height="41px"
            margin={'0 0 25px 0'}
            fontSize={'size8'}
            borderRadius={'radius4'}></InputInfo>
          <Search src={searchImg} />
        </Row>
        <Button padding={'9px 0'} onClick={next}>
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
          margin={'0 0 26px 0'}></Description>
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
          margin={'0 0 26px 0'}></Description>
        <Label
          width="36px"
          height="18px"
          margin={'0 0 6px 0'}
          display="inline-block"></Label>
        <InputInfo
          placeholder={'아이디 입력'}
          width="451px"
          height="41px"
          margin={'0 0 30px 0'}></InputInfo>
        <Label
          width="47px"
          height="18px"
          margin={'0 0 6px 0'}
          display="inline-block"></Label>
        <InputInfo
          placeholder={'비밀번호 입력'}
          width="451px"
          height="41px"
          margin={'0 0 30px 0'}></InputInfo>
        <Label
          width="36px"
          height="18px"
          margin={'0 0 6px 0'}
          display="inline-block"></Label>
        <InputInfo
          placeholder={'이메일 입력'}
          width="451px"
          height="41px"
          margin={'0 0 30px 0'}></InputInfo>
        <Label
          width="36px"
          height="18px"
          margin={'0 0 6px 0'}
          display="inline-block"></Label>
        <InputInfo
          placeholder={'닉네임 입력'}
          width="451px"
          height="41px"
          margin={'0 0 30px 0'}></InputInfo>
        <Button height={'43px'}>{'회원가입'}</Button>
      </Col>
    );
  };

  const main = {
    loginModal: loginModal(),
    joinModal1: joinModal1(),
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
