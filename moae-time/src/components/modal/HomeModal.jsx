import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import searchImg from '../../style/image/search.png';
import { Box, Button, Text } from '../';
import { Col, Row, MainStyle } from '../../style';

const LoginInput = styled(Col)`
  & :not(:last-child) {
    margin-bottom: 5px;
  }
`;

const InputInfo = styled.input.attrs(
  ({
    width = '100%',
    margin,
    padding = 'default',
    borderRadius = 'default',
    fontSize = 'default',
    fontColor = 'default',
  }) => ({
    col: width,
    margin: margin,
    padding: MainStyle.checkPadding[padding],
    borderRadius: MainStyle.checkRadius[borderRadius],
    fontSize: MainStyle.checkFontSize[fontSize],
    fontColor: MainStyle.checkColor[fontColor],
  })
)`
  width: ${(props) => props.col};
  height: fit-content;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  padding-left: 10px;

  outline: none;
  border-radius: ${(props) => props.borderRadius};
  border: 1px solid #ededed;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
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
  border: 1px solid #ededed;
  outline: none;
  -webkit-appearance: none;
  font-size: ${MainStyle.checkFontSize.size8};
`;

const Label = styled.label.attrs(
  ({
    to,
    fontSize = 'default',
    fontColor = 'default',
    margin,
    display = 'inline-block',
  }) => ({
    for: to,
    fontSize: MainStyle.checkFontSize[fontSize],
    fontColor: MainStyle.checkColor[fontColor],
    margin: margin,
    display: display,
  })
)`
  width: fit-content;
  height: fit-content;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
`;

const Search = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  bottom: 206px;
  right: 122px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 93px;
  height: 93px;
  background-color: ${MainStyle.checkColor.red};
`;

function HomeModal(props) {
  const { content, next, close } = props;

  const loginModal = () => {
    return (
      <Col>
        <Row padding={'0 0 15px'} align={'flex-end'}>
          <Icon />{' '}
          <Text size={'size7'} color={'gray2'} weight={'medium'}>
            description
          </Text>
        </Row>
        <LoginInput>
          <InputInfo
            placeholder={'Id'}
            height={'41px'}
            fontSize={'size6'}
            fontColor={'gray1'}
            padding={'len2'}
          />
          <InputInfo
            placeholder={'PassWord'}
            height={'41px'}
            fontSize={'size6'}
            fontColor={'gray1'}
            padding={'len2'}
          />
          <Button padding={'len2'} borderRadius={'default'}>
            {'로그인'}
          </Button>
        </LoginInput>
        <Row padding={'12px 0 29px'}>
          <div>
            <CheckBox name="keeping" id="check" />
            <Label to="check" fontSize={'size5'}>
              keep info
            </Label>
          </div>

          <Text size={'size5'} color={'gray2'} weight={'light'}>
            find...
          </Text>
        </Row>
        <Row padding={'0 120px'}>
          <Text size={'size8'} color={'gray4'}>
            {'처음?'}
          </Text>
          <Text
            to={'/board'}
            onClick={next}
            size={'size8'}
            color={'red'}
            weight={'medium'}
          >
            {'회원가입'}
          </Text>
        </Row>
      </Col>
    );
  };

  const [selectedYear, setSelectedYear] = useState('none');
  const [selectedSchool, setSelectedSchool] = useState('none');

  const targetYear = (e) => {
    setSelectedYear(e.target.value);
  };

  const targetSchool = (e) => {
    setSelectedSchool(e.target.value);
  };

  const clickNext = () => {
    next();
    console.log(
      'selectedYear, selectedSchool :>> ',
      selectedYear,
      selectedSchool
    );
  };

  const joinModal1 = () => {
    return (
      <Col align={'left'}>
        <Col align={'left'} padding={'0 0 6px'}>
          <Text size={'default'} color={'gray1'} weight={'medium'}>
            {'모-애 타임 회원가입'}
          </Text>
        </Col>
        <Col align={'left'} padding={'0 0 48px'}>
          <Text size={'size7'} color={'gray3'} weight={'default'}>
            {'모애 타임 계정으로 캠퍼스픽, 모-애 타임 등 '}
          </Text>
          <Text size={'size7'} color={'gray3'} weight={'default'}>
            {'다양한 대학생 서비스를 모두 이용하실 수 있습니다.'}
          </Text>
        </Col>
        <Col align={'left'} padding={'0 0 25px'}>
          <Text size={'default'} color={'gray1'} weight={'medium'}>
            {'학교 선택'}
          </Text>
        </Col>
        <Label margin={'0 0 6px 0'} fontSize={'size4'}>
          {'입학년도'}
        </Label>
        <SelectBox onChange={targetYear}>
          <option key={0} value={false}>
            연도 선택 (학번)
          </option>
          <option key={1} value="2017">
            2017
          </option>
          <option key={2} value="2018">
            2018
          </option>
          <option key={3} value="2019">
            2019
          </option>
          <option key={4} value="2020">
            2020
          </option>
          <option key={5} value="2021">
            2021
          </option>
        </SelectBox>
        <Label
          margin={'28px 0 6px 0'}
          display="inline-block"
          fontSize={'size4'}
        >
          {'학교'}
        </Label>
        <Row>
          <InputInfo
            list="schools"
            placeholder={'학교 이름을 검색하세요'}
            margin={'0 0 25px 0'}
            padding={'len2'}
            fontSize={'size8'}
            fontColor={'gray1'}
            borderRadius={'radius4'}
            onChange={targetSchool}
          />
          <datalist id="schools">
            <option key={1} value="인덕대학교">
              인덕대학교
            </option>
            <option key={2} value="ㅈ덕대학교">
              ㅈ덕대학교
            </option>
            <option key={3} value="광운대학교">
              광운대학교
            </option>
            <option key={4} value="망해라">
              망해라
            </option>
          </datalist>
          <Search src={searchImg} />
        </Row>
        <Button padding={'len2'} onClick={clickNext} weight={'bold'}>
          {'다음'}
        </Button>
      </Col>
    );
  };

  const joinModal2 = () => {
    return (
      <Col align={'left'}>
        <Col align={'left'} padding={'0 0 26px'}>
          <Text size={'default'} color={'gray1'} weight={'medium'}>
            {'Description'}
          </Text>
        </Col>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label
            to="check"
            width="163px"
            margin={'0 0 24px 0'}
            fontSize={'size5'}
          >
            keep info
          </Label>
        </div>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label
            to="check"
            width="150px"
            margin={'0 0 24px 0'}
            fontSize={'size5'}
          >
            keep info
          </Label>
        </div>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label
            to="check"
            width="186px"
            margin={'0 0 24px 0'}
            fontSize={'size5'}
          >
            keep info
          </Label>
        </div>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label
            to="check"
            width="165px"
            margin={'0 0 24px 0'}
            fontSize={'size5'}
          >
            keep info
          </Label>
        </div>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label
            to="check"
            width="158px"
            margin={'0 0 24px 0'}
            fontSize={'size5'}
          >
            keep info
          </Label>
        </div>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label
            to="check"
            width="253px"
            margin={'0 0 24px 0'}
            fontSize={'size5'}
          >
            keep info
          </Label>
        </div>
        <div>
          <CheckBox name="keeping" id="check" />
          <Label to="check" width="112px" fontSize={'size5'}>
            keep info
          </Label>
        </div>
        <Col align={'left'} padding={'20px 0 36px'}>
          <Text size={'size5'} color={'gray4'} weight={'light'}>
            {'dummy'}
          </Text>
        </Col>
        <Col align={'left'} padding={'0 0 10px'}>
          <Button
            padding={'len2'}
            fontSize={'size8'}
            weight={'bold'}
            onClick={next}
          >
            {'휴대폰 인증'}
          </Button>
        </Col>
        <Button
          backColor={'gray7'}
          padding={'len2'}
          fontSize={'size8'}
          fontColor={'gray3'}
          weight={'bold'}
          onClick={next}
        >
          {'아이핀 인증'}
        </Button>
      </Col>
    );
  };

  const joinModal3 = () => {
    return (
      <Col align={'left'}>
        <Col align={'left'} padding={'0 0 16px'}>
          <Text color={'gray1'} weight={'medium'}>
            {'Description'}
          </Text>
        </Col>
        <Label fontSize={'size4'} fontColor={'gray8'} margin={'0 0 6px 0'}>
          {'Label'}
        </Label>
        <InputInfo
          placeholder={'아이디 입력'}
          margin={'0 0 30px 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray4'}
        />
        <Label fontSize={'size4'} fontColor={'gray8'} margin={'0 0 6px 0'}>
          {'Label'}
        </Label>
        <InputInfo
          placeholder={'비밀번호 입력'}
          margin={'0 0 30px 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray4'}
        />
        <Label fontSize={'size4'} fontColor={'gray8'} margin={'0 0 6px 0'}>
          {'Label'}
        </Label>
        <InputInfo
          placeholder={'이메일 입력'}
          margin={'0 0 30px 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray4'}
        />
        <Label fontSize={'size4'} fontColor={'gray8'} margin={'0 0 6px 0'}>
          {'Label'}
        </Label>
        <InputInfo
          placeholder={'닉네임 입력'}
          margin={'0 0 30px 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray4'}
        />
        <Button padding={'len2'} onClick={close} weight={'bold'}>
          {'회원가입'}
        </Button>
      </Col>
    );
  };

  const main = {
    loginModal: loginModal(),
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
