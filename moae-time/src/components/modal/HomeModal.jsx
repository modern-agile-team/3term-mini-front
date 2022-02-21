import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import searchImg from '../../style/image/search.png';
import everytime from '../../style/image/everytimeNoBack.png';
import { Box, Button, Text } from '../index';
import { Col, Row, MainStyle } from '../../style';

const InvisibleSpan = styled.span`
  position: relative;
`;

const InvisibleText = styled.span.attrs(
  ({
    size = 'default',
    color = 'default',
    weight = 'default',
    padding,
    visible,
  }) => ({
    size: MainStyle.checkFontSize[size],
    color: MainStyle.checkColor[color],
    weight: MainStyle.checkWeight[weight],
    padding,
    visible,
  })
)`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  padding: ${(props) => props.padding};
  vertical-align: middle;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  position: absolute;
  top: 3px;
`;

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
  const { content, next, close, data, checkResult, func } = props;

  const [userNo, setUserNo] = useState(0);
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const getUserNoInModal = (number) => {
    setUserNo(number ? func(number) : func(number));
  };

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
          getUserNoInModal(res.data.userNo);
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
  const [getData, setData] = useState(props.data);
  const [info, setInfo] = useState({});

  const getInfo = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const targetYear = (e) => {
    setSelectedYear(e.target.value);
  };

  const targetSchool = (e) => {
    setSelectedSchool(e.target.value);
  };

  const year = {
    2016: 0,
    2017: 1,
    2018: 2,
    2019: 3,
    2020: 4,
    2021: 5,
  };

  const school = {
    광운대학교: 0,
    인덕대학교: 1,
  };
  const clickNext = () => {
    const selectedInform = {
      year: year[selectedYear],
      school: school[selectedSchool],
    };

    selectedYear && selectedSchool
      ? next(selectedInform)
      : alert('모두 선택해주세요');
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
            <option key={1} value="광운대학교">
              광운대학교
            </option>
            <option key={2} value="인덕대학교">
              인덕대학교
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
      setCheckedInputs([0, 1, 2, 3, 4, 5]);
    } else {
      setCheckedInputs([]);
    }
  };

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };

  useEffect(() => {
    if (checkedInputs.length >= 6) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [checkedInputs]);

  const clickNext2 = (data, checkResult) => {
    checkedInputs.includes(0) &&
    checkedInputs.includes(1) &&
    checkedInputs.includes(2) &&
    checkedInputs.includes(4) &&
    checkedInputs.includes(5)
      ? next(data, checkResult)
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
              changeHandler(e.currentTarget.checked, 0);
            }}
            checked={checkedInputs.includes(0) ? true : false}
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
              changeHandler(e.currentTarget.checked, 1);
            }}
            checked={checkedInputs.includes(1) ? true : false}
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
              changeHandler(e.currentTarget.checked, 2);
            }}
            checked={checkedInputs.includes(2) ? true : false}
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
              changeHandler(e.currentTarget.checked, 3);
            }}
            checked={checkedInputs.includes(3) ? true : false}
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
              changeHandler(e.currentTarget.checked, 4);
            }}
            checked={checkedInputs.includes(4) ? true : false}
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
              changeHandler(e.currentTarget.checked, 5);
            }}
            checked={checkedInputs.includes(5) ? true : false}
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
            onClick={() => {
              const checkResult = {};
              const check = [0, 1, 2, 3, 4, 5];
              check.forEach((el) => {
                checkResult[el] = checkedInputs.includes(el) ? true : false;
              });
              clickNext2(data, checkResult);
            }}
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
            const checkResult = {};
            const check = [0, 1, 2, 3, 4, 5];
            check.forEach((el) => {
              checkResult[el] = checkedInputs.includes(el) ? true : false;
            });
          }}
        >
          {'아이핀 인증'}
        </Button>
      </Col>
    );
  };

  let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const joinInputId = useRef(null);
  const joinInputPassword = useRef(null);
  const joinInputMail = useRef(null);
  const joinInputNickname = useRef(null);
  const [idVisible, setIdVisible] = useState(false);
  const [MailVisible, setMailVisible] = useState(false);
  const [MailVisible2, setMailVisible2] = useState(false);
  const [nicknameVisible, setNicknameVisible] = useState(false);

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
          id={'id'}
          onChange={getInfo}
          type={'text'}
          placeholder={'아이디를 입력하세요.'}
          ref={joinInputId}
          margin={'0 0 0 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray1'}
        />
        <InvisibleSpan>
          <InvisibleText
            visible={idVisible}
            size={'size3'}
            color={'red'}
            padding={'3px 0 12px 10px'}
            top={'208px'}
          >
            {'중복된 아이디입니다.'}
          </InvisibleText>
        </InvisibleSpan>
        <Label fontSize={'size4'} fontColor={'gray8'} margin={'31px 0 6px 0'}>
          {'비밀번호'}
        </Label>
        <InputInfo
          id={'password'}
          onChange={getInfo}
          type={'password'}
          placeholder={'비밀번호를 입력하세요.'}
          ref={joinInputPassword}
          margin={'0 0 0 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray1'}
        />
        <Label fontSize={'size4'} fontColor={'gray8'} margin={'31px 0 6px 0'}>
          {'이메일'}
        </Label>
        <InputInfo
          id={'mail'}
          onChange={getInfo}
          type={'email'}
          placeholder={'이메일을 입력하세요.'}
          ref={joinInputMail}
          margin={'0 0 0 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray1'}
        />
        <InvisibleSpan>
          <InvisibleText
            visible={MailVisible}
            size={'size3'}
            color={'red'}
            padding={'3px 0 12px 10px'}
          >
            {'중복된 메일입니다.'}
          </InvisibleText>
        </InvisibleSpan>
        <InvisibleSpan>
          <InvisibleText
            visible={MailVisible2}
            size={'size3'}
            color={'red'}
            padding={'3px 0 12px 10px'}
          >
            {'올바르지 않은 형식입니다.'}
          </InvisibleText>
        </InvisibleSpan>
        <Label fontSize={'size4'} fontColor={'gray8'} margin={'31px 0 6px 0'}>
          {'닉네임'}
        </Label>
        <InputInfo
          id={'nickname'}
          onChange={getInfo}
          placeholder={'닉네임을 입력하세요.'}
          ref={joinInputNickname}
          margin={'0 0 0 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray1'}
        />
        <InvisibleSpan>
          <InvisibleText
            visible={nicknameVisible}
            size={'size3'}
            color={'red'}
            padding={'3px 0 0 10px'}
          >
            {'중복된 닉네임입니다.'}
          </InvisibleText>
        </InvisibleSpan>
        <Col padding={'47px 0 0 0'}>
          <Button
            padding={'len2'}
            onClick={() => {
              if (!(info.id && info.password && info.mail && info.nickname)) {
                alert('모두 입력해주세요.');
              }

              if (regEmail.test(info.mail)) {
                setMailVisible2(false);
              } else {
                setMailVisible(false);
                setMailVisible2(true);
                joinInputMail.current.value = '';
                info.mail = '';
              }
              if (info.nickname === '운영자') {
                alert('사용이 불가한 닉네임입니다.');
                setNicknameVisible(false);
                joinInputNickname.current.value = '';
                info.nickname = '';
              }

              let joinInfo = { ...info, ...data };
              const agreement = { id: joinInfo.id, ...checkResult };

              if (info.mail !== '' && info.nickname !== '') {
                axios
                  .post('http://3.36.125.16:8080/moae/user/register', joinInfo)
                  .then((res) => {
                    alert(res.data.msg);
                    setIdVisible(false);
                    setMailVisible(false);
                    setNicknameVisible(false);
                    axios
                      .post(
                        'http://3.36.125.16:8080/moae/user/agreement',
                        agreement
                      )
                      .then((res) => {
                        console.log(res.data.msg);
                        close();
                      })
                      .catch((error) => {
                        console.log(error.response.data.msg);
                      });
                  })
                  .catch((error) => {
                    let errorMsg = error.response.data.msg;
                    errorMsg.includes('id')
                      ? setIdVisible(true)
                      : setIdVisible(false);
                    errorMsg.includes('mail')
                      ? setMailVisible(true)
                      : setMailVisible(false);
                    errorMsg.includes('nickname')
                      ? setNicknameVisible(true)
                      : setNicknameVisible(false);
                  });
              }
            }}
            weight={'bold'}
          >
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
  };

  const renderMain = () => {
    return main[content];
  };

  return <>{renderMain()}</>;
}

export default HomeModal;
