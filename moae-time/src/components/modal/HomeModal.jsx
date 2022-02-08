import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import searchImg from '../../style/image/search.png';
import everytime from '../../style/image/everytimeNoBack.png';
import { Box, Button, Text } from '../index';
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
    fontSize = 'default',
    fontColor = 'default',
    margin,
    display = 'inline-block',
  }) => ({
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
  width: 80px;
  height: 80px;
  position: relative;
  top: 15px;
`;

function HomeModal(props) {
  const { content, next, close } = props;

  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    inputId && inputPw ? login() : alert('아이디와 비밀번호를 입력하세요.');
    function login() {
      axios
        .post('http://3.36.125.16:8080/moae/user/login', {
          id: inputId,
          password: inputPw,
        })
        .then((res) => {
          alert(res.data.msg);
          if (res.data.success) {
            close();
          }
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
    }
  };

  const loginModal = () => {
    return (
      <Col>
        <Row padding={'0 0 15px'} align={'flex-end'}>
          <Icon src={everytime} />
          <Text size={'size7'} color={'gray2'} weight={'medium'}>
            {'지금 모-애 타임을 시작하세요!'}
          </Text>
        </Row>
        <LoginInput>
          <InputInfo
            type={'text'}
            name={'input_id'}
            value={inputId}
            placeholder={'Id'}
            onChange={handleInputId}
            height={'41px'}
            fontSize={'size6'}
            fontColor={'gray1'}
            padding={'len2'}
          />
          <InputInfo
            type={'password'}
            name={'input_pw'}
            value={inputPw}
            onChange={handleInputPw}
            placeholder={'PassWord'}
            height={'41px'}
            fontSize={'size6'}
            fontColor={'gray1'}
            padding={'len2'}
          />
          <Button
            onClick={onClickLogin}
            padding={'len2'}
            borderRadius={'default'}
          >
            {'로그인'}
          </Button>
        </LoginInput>
        <Row padding={'12px 10px 29px'}>
          <div>
            <CheckBox name="keeping" id="check" />
            <Label htmlFor="check" fontSize={'size5'} fontColor={'gray4'}>
              {'로그인 유지'}
            </Label>
          </div>
          <Text size={'size5'} color={'gray2'} weight={'light'}>
            {'아이디/비밀번호 찾기'}
          </Text>
        </Row>
        <Row padding={'0 46px'}>
          <Text size={'size8'} color={'gray4'}>
            {'모-애 타임에 처음이신가요?'}
          </Text>
          <Button
            onClick={next}
            width={'len20'}
            fontSize={'size8'}
            fontColor={'red'}
            backColor={'gray5'}
            weight={'medium'}
          >
            {'회원가입'}
          </Button>
        </Row>
      </Col>
    );
  };

  const [selectedYear, setSelectedYear] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(false);

  const targetYear = (e) => {
    setSelectedYear(e.target.value);
  };

  const targetSchool = (e) => {
    setSelectedSchool(e.target.value);
  };

  const clickNext = () => {
    selectedYear && selectedSchool ? next() : alert('모두 선택해주세요');
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

  const [allChecked, setAllChecked] = useState(false);
  const [checkedInputs, setCheckedInputs] = useState([]);

  const allCheckHandler = (checked) => {
    setAllChecked(!allChecked);
    if (checked) {
      setCheckedInputs([1, 2, 3, 4, 5, 6]);
      console.log('전체 선택 완료');
    } else {
      setCheckedInputs([]);
      console.log('전체 해제 완료');
    }
  };

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      console.log('체크 반영 완료');
    } else {
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
      console.log('체크 해제 반영 완료');
    }
  };

  useEffect(() => {
    if (checkedInputs.length >= 6) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [checkedInputs]);

  const clickNext2 = () => {
    checkedInputs.includes(1) &&
    checkedInputs.includes(2) &&
    checkedInputs.includes(3) &&
    checkedInputs.includes(5) &&
    checkedInputs.includes(6)
      ? next()
      : alert('필수 항목을 모두 체크해주세요.');
  };

  const joinModal2 = () => {
    return (
      <Col align={'left'}>
        <Col align={'left'} padding={'0 0 26px'}>
          <Text size={'default'} color={'gray1'} weight={'medium'}>
            {'약관 동의'}
          </Text>
        </Col>
        <div>
          <CheckBox
            name="keeping"
            id="check1"
            onChange={(e) => {
              allCheckHandler(e.currentTarget.checked);
            }}
            checked={allChecked}
          />
          <Label
            htmlFor="check1"
            width="163px"
            margin={'0 0 24px 0'}
            fontSize={'size5'}
            fontColor={'gray1'}
          >
            {'아래 약관에 모두 동의합니다.'}
          </Label>
        </div>
        <div>
          <CheckBox
            name="keeping"
            id="check2"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, 1);
            }}
            checked={checkedInputs.includes(1) ? true : false}
          />
          <Label
            htmlFor="check2"
            width="150px"
            margin={'0 0 24px 0'}
            fontSize={'size5'}
            fontColor={'gray3'}
          >
            {'서비스이용약관 동의(필수)'}
          </Label>
        </div>
        <div>
          <CheckBox
            name="keeping"
            id="check3"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, 2);
            }}
            checked={checkedInputs.includes(2) ? true : false}
          />
          <Label
            htmlFor="check3"
            width="186px"
            margin={'0 0 24px 0'}
            fontSize={'size5'}
            fontColor={'gray3'}
          >
            {'개인정보 수집 및 이용 동의 (필수)'}
          </Label>
        </div>
        <div>
          <CheckBox
            name="keeping"
            id="check4"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, 3);
            }}
            checked={checkedInputs.includes(3) ? true : false}
          />
          <Label
            htmlFor="check4"
            width="165px"
            margin={'0 0 24px 0'}
            fontSize={'size5'}
            fontColor={'gray3'}
          >
            {'커뮤니티이용규칙 확인 (필수)'}
          </Label>
        </div>
        <div>
          <CheckBox
            name="keeping"
            id="check5"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, 4);
            }}
            checked={checkedInputs.includes(4) ? true : false}
          />
          <Label
            htmlFor="check5"
            width="158px"
            margin={'0 0 24px 0'}
            fontSize={'size5'}
            fontColor={'gray3'}
          >
            {'광고성 정보 수신 동의 (선택)'}
          </Label>
        </div>
        <div>
          <CheckBox
            name="keeping"
            id="check6"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, 5);
            }}
            checked={checkedInputs.includes(5) ? true : false}
          />
          <Label
            htmlFor="check6"
            width="253px"
            margin={'0 0 24px 0'}
            fontSize={'size5'}
            fontColor={'gray1'}
          >
            {'본인 명의를 이용하여 가입을 진행하겠습니다. (필수)'}
          </Label>
        </div>
        <div>
          <CheckBox
            name="keeping"
            id="check7"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, 6);
            }}
            checked={checkedInputs.includes(6) ? true : false}
          />
          <Label
            htmlFor="check7"
            width="112px"
            fontSize={'size5'}
            fontColor={'gray3'}
          >
            {'만 14세 이상입니다. (필수)'}
          </Label>
        </div>
        <Col align={'left'} padding={'20px 0 36px'}>
          <Text size={'size5'} color={'gray4'} weight={'light'}>
            {
              '모 -애 타임은 국내 대학생을 위한 서비스이며, 본인 인증을 통해 만 14세 이상만 가입할 수 있습니다.'
            }
          </Text>
        </Col>
        <Col align={'left'} padding={'0 0 10px'}>
          <Button
            padding={'len2'}
            fontSize={'size8'}
            weight={'bold'}
            onClick={clickNext2}
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
          onClick={() => {
            console.log(checkedInputs);
            const checkResult = {};
            const check = [1, 2, 3, 4, 5, 6];
            check.forEach((el) => {
              checkResult[el] = checkedInputs.includes(el) ? 1 : 0;
            });
            console.log(checkResult);
          }}
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
            {'모-애 타임  회원가입'}
          </Text>
        </Col>
        <Label fontSize={'size4'} fontColor={'gray8'} margin={'0 0 6px 0'}>
          {'아이디'}
        </Label>
        <InputInfo
          type={'text'}
          placeholder={'아이디를 입력하세요.'}
          margin={'0 0 -9px 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray1'}
        />
        {/* <ToggleText
          className={'shibal'}
          size={'size3'}
          color={'red'}
          padding={'len3'}
        >
          {'중복된 아이디 입니다.'}
        </ToggleText> */}
        <Label fontSize={'size4'} fontColor={'gray8'} margin={'12px 0 6px 0'}>
          {'비밀번호'}
        </Label>
        <InputInfo
          type={'password'}
          placeholder={'비밀번호를 입력하세요.'}
          margin={'0 0 31px 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray1'}
        />

        <Label fontSize={'size4'} fontColor={'gray8'} margin={'12px 0 6px 0'}>
          {'이메일'}
        </Label>
        <InputInfo
          type={'email'}
          placeholder={'이메일을 입력하세요.'}
          margin={'0 0 -9px 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray1'}
        />
        <Text size={'size3'} color={'red'} padding={'len3'}>
          {'올바르지 않은 형식입니다.'}
        </Text>
        <Label fontSize={'size4'} fontColor={'gray8'} margin={'12px 0 6px 0'}>
          {'닉네임'}
        </Label>
        <InputInfo
          placeholder={'닉네임을 입력하세요.'}
          margin={'0 0 -9px 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray1'}
        />

        <Text size={'size3'} color={'red'} padding={'len3'}>
          {'중복된 닉네임입니다.'}
        </Text>
        <Col padding={'28px 0 0 0'}>
          <Button padding={'len2'} onClick={close} weight={'bold'}>
            {'회원가입'}
          </Button>
        </Col>
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
