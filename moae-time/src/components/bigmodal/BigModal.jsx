import { React, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Box } from '../';

const Modal = styled.div.attrs(({ modalState, width, height, topMargin, leftMargin }) => ({
  state: modalState,
  row: height,
  col: width,
  top: topMargin,
  left: leftMargin,
}))`
  width: ${(props) => (props.width)};
  height: ${(props) => (props.height)};

  
  position: fixed;
  top: ${(props) => (props.topMargin)};
  left: ${(props) => (props.leftMargin)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  display: ${(props) => (props.modalState ? 'block' : 'none')};

  background-color: #f9f9f9;
  border: 1px solid #d6d6d6;
`;

const ModalBackGround = styled.div.attrs(({ modalState }) => ({
  state: modalState,
}))`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;

  display: ${(props) => props.modalState ? "block" : "none"};

  background-color: rgba(97, 94, 94, 0.7);
`

const Wrap = styled.div`
  width: 773.75px;
  height: 432px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CenterWrap = styled.div`
  width: 269.91px;
  height: 390px;

  margin-left: 325.44px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReportBoxAndTextWrap = styled.div`
  width: 250px;
  height: 20px;

  margin-left: 75px;
  margin-bottom: 7px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Btn = styled.button.attrs(({ height, width, margin }) => ({
  row: height,
  col: width,
  margin: margin,
}))`
  height: ${(props) => props.row};
  width: ${(props) => props.col};
  margin: ${(props) => props.margin};
`;

const BtnWrap = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 61.25px;

  display: flex;
  justify-content: space-between;
`;

const ReportBtnWrap = styled.div`
  width: 19.5px;
  height: 37.75px;

  margin: 0px 0px 0px 69px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

function BigModal() {
  const modalEl = useRef();
  const [modalState, setModalState] = useState(false);
  const [reportModalState, setReportModalState] = useState(false);
  const handleClickOutside = ({ target }) => {
    if (modalState && !modalEl.current.contains(target)) setModalState(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [modalState]);

  useEffect(() => {
    if (modalState) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [modalState]);

  const checkBoxNum = [1, 2, 3, 4, 5, 6, 7]
  const drawing = () => {
    return checkBoxNum.map((item, i) => 
      <ReportBoxAndTextWrap key={i}>
          <Box width="16px" height="16px" margin="0px 0px 12px 0px"/>
          <Box width="224px" height="16px" margin="0px 0px 20px 0px" />
      </ReportBoxAndTextWrap>
      )}
  return (
    <>  
      <Btn onClick={() => setModalState(true)}>O</Btn>
      {
        modalState &&
      <Wrap>
        <ModalBackGround modalState={modalState}>
          <Modal
            ref={modalEl} 
            modalState={modalState}
            width="907px"
            height="590px"
            topMargin="66px" 
            leftMargin="303px">
          <ModalBackGround modalState={reportModalState}>
            <Modal 
              modalState={reportModalState}
              width="400px"
              height="480px"
              topMargin="121px" 
              leftMargin="556px">
              <Btn
              width="9.69px"
              height="9.69px" 
              margin="21.66px 20.66px 0px 369.66px"
              onClick={() => setReportModalState(false)}></Btn>
              <Box width="250px" height="23px" margin="27px 0px 5px 75px"/>
              <Box width="250px" height="14px" margin="0px 0px 15px 75px"/>
              { drawing() }
              <Box width="250px" height="100px" margin="0px 0px 15px 75px"/>
              <Box width="46px" height="30px" margin="0px 0px 27px 177px"/>
            </Modal>
          </ModalBackGround>
          <BtnWrap>
            <ReportBtnWrap>
              <Btn 
                width="19.5px"
                height="20.75px"
                onClick={() => setReportModalState(true)}>R</Btn>
              <Box width="19.5px" height="10px"/>
            </ReportBtnWrap>
            <Btn
              width="15.5px"
              height="15.5px" 
              margin="0px 64.25px 0px 0px"
              onClick={() => setModalState(false)}>X</Btn>
          </BtnWrap>
          <CenterWrap>
            <Box width='200px' height='200px' margin="0px 0px 20px 0px"/>
            <Box width='200px' height='32px' margin="0px 0px 51px 0px"/>
            <Box width='232px' height='29px' margin="0px 0px 21px 0px"/>
            <Box width='232px' height='29px' margin="0px 0px 21px 0px"/>
            <Box width='232px' height='29px' margin="0px 0px 98px 0px"/>
          </CenterWrap>
          </Modal>
        </ModalBackGround>
      </Wrap>
      }
    </>
  );
}

export default BigModal;
