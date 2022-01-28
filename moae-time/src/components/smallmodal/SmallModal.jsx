import { React, useRef, useEffect, useState } from "react";
import { Box } from "..";
import styled from "styled-components";

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
`;

const ReportBoxAndTextWrap = styled.div`
  width: 250px;
  height: 20px;

  margin-left: 75px;
  margin-bottom: 7px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Btn = styled.button.attrs(({ height, width, margin }) => ({
  row: height,
  col: width,
  margin: margin,
}))`
  height: ${(props) => props.row};
  width: ${(props) => props.col};
  margin: ${(props) => props.margin};
`;



function SmallModal() {
  const modalEl = useRef();
  const [reportModalState, setReportModalState] = useState(false);

  const handleClickOutside = ({ target }) => {
    if (reportModalState && !modalEl.current.contains(target)) setReportModalState(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [reportModalState]);

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
      {
        reportModalState &&
          <ModalBackGround modalState={reportModalState}>
            <Modal 
              ref={modalEl} 
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
      }
    </>
  )
}

export default SmallModal;