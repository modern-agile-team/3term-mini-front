import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import selectImg from '../../style/image/button.png';
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
  &::placeholder {
    color: #757575;
  }
  &::-webkit-input-placeholder {
    color: #757575;
  }
  &:-ms-input-placeholder {
    color: #757575;
  }
  &:focus {
    border: 1px solid #c62935;
  }
  & option:hover {
    background: #d6d6d6;
  }
`;

const CheckBox = styled.input.attrs(({ marginRight = '9px' }) => ({
  type: 'checkbox',
  marginRight: marginRight,
}))`
  width: 15px;
  height: 15px;
  margin-right: ${(props) => props.marginRight};
  -webkit-appearance: none;
  cursor: pointer;
  outline: none !important;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  background: #fbfbfb;
  &:checked {
    background-color: #c62935;
  }
`;

const SelectBox = styled.select`
  width: 451px;
  height: 41px;
  padding-left: 9px;
  border-radius: ${MainStyle.checkRadius.radius4};
  border: 1px solid #ededed;
  outline: none;
  -webkit-appearance: none;
  color: #757575;

  font-size: ${MainStyle.checkFontSize.size8};
  & option {
    color: #757575;
  }
  & option:hover {
    background: #d6d6d6;
  }
  &:focus {
    border: 1px solid #c62935;
  }
`;

const SelectIcon = styled.img`
  width: 12px;
  height: 6px;
  position: absolute;
  bottom: 305px;
  right: 122px;
  /* cursor: pointer; */
`;

const Label = styled.label.attrs(
  ({
    fontSize = 'default',
    fontColor = 'default',
    margin,
    display = 'inline-block',
    fontWeight = 'default',
  }) => ({
    fontSize: MainStyle.checkFontSize[fontSize],
    fontColor: MainStyle.checkColor[fontColor],
    margin: margin,
    display: display,
    fontWeight: MainStyle.checkWeight[fontWeight],
  })
)`
  width: fit-content;
  height: fit-content;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  font-weight: ${(props) => props.fontWeight};
`;

const Search = styled.img`
  width: 19px;
  height: 18px;
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
    inputId && inputPw ? login() : alert('???????????? ??????????????? ???????????????.');
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
          <Text size={'size7'} color={'gray2'} weight={'500'}>
            {'??????'}
            <b>{'???-??? ??????'}</b>
            {'??? ???????????????!'}
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
            borderRadius={'default'}>
            {'?????????'}
          </Button>
        </LoginInput>
        <Row padding={'12px 10px 29px'}>
          <div>
            <CheckBox name="keeping" id="check" />
            <Label htmlFor="check" fontSize={'size5'} fontColor={'gray4'}>
              <b>{'????????? ??????'}</b>
            </Label>
          </div>
          <Text size={'size5'} color={'gray2'} weight={'light'}>
            {'?????????/???????????? ??????'}
          </Text>
        </Row>
        <Row padding={'0 46px'}>
          <Text size={'size8'} color={'gray4'}>
            {'???-??? ????????? ???????????????????'}
          </Text>
          <Button
            onClick={next}
            width={'len20'}
            fontSize={'size8'}
            fontColor={'red'}
            backColor={'gray5'}
            weight={'bold'}>
            {'????????????'}
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
    ???????????????: 0,
    ???????????????: 1,
  };
  const clickNext = () => {
    const selectedInform = {
      year: year[selectedYear],
      school: school[selectedSchool],
    };

    selectedYear && selectedSchool
      ? next(selectedInform)
      : alert('?????? ??????????????????');
  };

  const joinModal1 = () => {
    return (
      <Col align={'left'}>
        <Col align={'left'} padding={'0 0 6px'}>
          <Text size={'default'} color={'gray1'} weight={'bold'}>
            {'???-??? ?????? ????????????'}
          </Text>
        </Col>
        <Col align={'left'} padding={'0 0 48px'}>
          <Text size={'size7'} color={'gray8'} weight={'default'}>
            {'?????? ?????? ???????????? '}
            <b>{'????????????, ???-??? ?????? '}</b>
            {'??? '}
          </Text>
          <Text size={'size7'} color={'gray8'} weight={'default'}>
            {'????????? ????????? ???????????? ?????? ???????????? ??? ????????????.'}
          </Text>
        </Col>
        <Col align={'left'} padding={'0 0 25px'}>
          <Text size={'default'} color={'gray1'} weight={'bold'}>
            {'?????? ??????'}
          </Text>
        </Col>
        <Label margin={'0 0 6px 0'} fontSize={'size4'} fontColor={'gray8'}>
          <b>{'????????????'}</b>
        </Label>
        <SelectBox onChange={targetYear}>
          <option key={0} value={false}>
            {'?????? ??????'}
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
        <SelectIcon src={selectImg} />
        <Label
          margin={'28px 0 6px 0'}
          display="inline-block"
          fontSize={'size4'}
          fontColor={'gray8'}>
          <b>{'??????'}</b>
        </Label>
        <Row>
          <InputInfo
            list="schools"
            placeholder={'?????? ????????? ???????????????'}
            margin={'0 0 25px 0'}
            padding={'len2'}
            fontSize={'size8'}
            fontColor={'gray8'}
            borderRadius={'radius4'}
            onChange={targetSchool}
          />
          <datalist id="schools">
            <option key={1} value="???????????????">
              ???????????????
            </option>
            <option key={2} value="???????????????">
              ???????????????
            </option>
          </datalist>
          <Search src={searchImg} />
        </Row>
        <Button padding={'len2'} onClick={clickNext} weight={'bold'}>
          {'??????'}
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
      : alert('?????? ????????? ?????? ??????????????????.');
  };

  const joinModal2 = () => {
    return (
      <Col align={'left'}>
        <Col align={'left'} padding={'0 0 26px'}>
          <Text size={'default'} color={'gray1'} weight={'bold'}>
            {'?????? ??????'}
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
            fontColor={'gray1'}>
            {'?????? ????????? ?????? ???????????????.'}
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
            fontColor={'gray3'}>
            {'????????????????????? ??????(??????)'}
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
            fontColor={'gray3'}>
            {'???????????? ?????? ??? ?????? ?????? (??????)'}
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
            fontColor={'gray3'}>
            {'???????????????????????? ?????? (??????)'}
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
            fontColor={'gray3'}>
            {'????????? ?????? ?????? ?????? (??????)'}
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
            fontColor={'gray1'}>
            {'?????? ????????? ???????????? ????????? ?????????????????????. (??????)'}
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
            fontColor={'gray3'}>
            {'??? 14??? ???????????????. (??????)'}
          </Label>
        </div>
        <Col align={'left'} padding={'20px 0 36px'}>
          <Text size={'size5'} color={'gray4'} weight={'light'}>
            {
              '??? -??? ????????? ?????? ???????????? ?????? ???????????????, ?????? ????????? ?????? ??? 14??? ????????? ????????? ??? ????????????.'
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
            }}>
            {'????????? ??????'}
          </Button>
        </Col>
        <Button
          backColor={'gray7'}
          padding={'len2'}
          fontSize={'size8'}
          fontColor={'gray3'}
          weight={'bold'}>
          {'????????? ??????'}
        </Button>
      </Col>
    );
  };

  let regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

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
          <Text color={'gray1'} weight={'bold'}>
            {'???-??? ??????  ????????????'}
          </Text>
        </Col>
        <Label
          fontSize={'size4'}
          fontColor={'gray8'}
          margin={'0 0 6px 0'}
          fontWeight={'bold'}>
          {'?????????'}
        </Label>
        <InputInfo
          id={'id'}
          onChange={getInfo}
          type={'text'}
          placeholder={'???????????? ???????????????.'}
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
            top={'208px'}>
            {'????????? ??????????????????.'}
          </InvisibleText>
        </InvisibleSpan>
        <Label
          fontSize={'size4'}
          fontColor={'gray8'}
          margin={'31px 0 6px 0'}
          fontWeight={'bold'}>
          {'????????????'}
        </Label>
        <InputInfo
          id={'password'}
          onChange={getInfo}
          type={'password'}
          placeholder={'??????????????? ???????????????.'}
          ref={joinInputPassword}
          margin={'0 0 0 0'}
          padding={'len2'}
          borderRadius={'radius4'}
          fontSize={'size8'}
          fontColor={'gray1'}
        />
        <Label
          fontSize={'size4'}
          fontColor={'gray8'}
          margin={'31px 0 6px 0'}
          fontWeight={'bold'}>
          {'?????????'}
        </Label>
        <InputInfo
          id={'mail'}
          onChange={getInfo}
          type={'email'}
          placeholder={'???????????? ???????????????.'}
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
            padding={'3px 0 12px 10px'}>
            {'????????? ???????????????.'}
          </InvisibleText>
        </InvisibleSpan>
        <InvisibleSpan>
          <InvisibleText
            visible={MailVisible2}
            size={'size3'}
            color={'red'}
            padding={'3px 0 12px 10px'}>
            {'???????????? ?????? ???????????????.'}
          </InvisibleText>
        </InvisibleSpan>
        <Label
          fontSize={'size4'}
          fontColor={'gray8'}
          margin={'31px 0 6px 0'}
          fontWeight={'bold'}>
          {'?????????'}
        </Label>
        <InputInfo
          id={'nickname'}
          onChange={getInfo}
          placeholder={'???????????? ???????????????.'}
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
            padding={'3px 0 0 10px'}>
            {'????????? ??????????????????.'}
          </InvisibleText>
        </InvisibleSpan>
        <Col padding={'47px 0 0 0'}>
          <Button
            padding={'len2'}
            onClick={() => {
              if (!(info.id && info.password && info.mail && info.nickname)) {
                alert('?????? ??????????????????.');
              }

              if (regEmail.test(info.mail)) {
                setMailVisible2(false);
              } else {
                setMailVisible(false);
                setMailVisible2(true);
                // joinInputMail.current.value = '';
                info.mail = '';
              }
              if (info.nickname === '?????????') {
                alert('????????? ????????? ??????????????????.');
                setNicknameVisible(false);
                joinInputNickname.current.value = '';
                info.nickname = '';
              }

              let joinInfo = { ...info, ...data };
              const agreement = { id: joinInfo.id, ...checkResult };

              if (info.id && info.password && info.mail && info.nickname) {
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
                        // console.log(res.data.msg);
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
            weight={'bold'}>
            {'????????????'}
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
    undefined: <div>????????? ???????????????</div>,
  };

  const renderMain = () => {
    return main[content];
  };

  return <>{renderMain()}</>;
}

export default HomeModal;
