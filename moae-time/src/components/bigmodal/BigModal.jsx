import { React, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Box } from '../';
import SmallModal from '../smallmodal/SmallModal';
import BasicProfile from '../../style/image/BasicProfile.png';
import dummyBoard from '../../apis/dummyBoard.json';

const Modal = styled.div.attrs(
  ({ modalState, width, height, topMargin, leftMargin }) => ({
    state: modalState,
    row: height,
    col: width,
    top: topMargin,
    left: leftMargin,
  })
)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  position: fixed;
  top: ${(props) => props.topMargin};
  left: ${(props) => props.leftMargin};
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

  display: ${(props) => (props.modalState ? 'block' : 'none')};

  background-color: rgba(97, 94, 94, 0.7);
`;

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
`;

const WriterImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 0px 0px 20px 0px;
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
`;

function BigModal(props) {
  const modalEl = useRef();
  const {
    modalState,
    setModalState,
    smallModalState,
    setSmallModalState,
    nicknameState,
    userNoState
  } = props;

  const handleClickOutside = ({ target }) => {
    if (modalState && !modalEl.current.contains(target)) setModalState(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [modalState]);

  useEffect(() => {
    if (modalState) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [modalState]);


  return (
    <>
      {modalState && (
        <Wrap>
          <ModalBackGround modalState={modalState}>
            <Modal
              ref={modalEl}
              modalState={modalState}
              width="907px"
              height="590px"
              topMargin="66px"
              leftMargin="303px"
            >
              <SmallModal
                smallModalState={smallModalState}
                setSmallModalState={setSmallModalState}
                userNoState={userNoState}
              />
              <BtnWrap>
                <ReportBtnWrap>
                  <Btn
                    width="19.5px"
                    height="20.75px"
                    onClick={() => setSmallModalState(true)}
                  >
                    R
                  </Btn>
                  <Box width="19.5px" height="10px" />
                </ReportBtnWrap>
                <Btn
                  width="15.5px"
                  height="15.5px"
                  margin="0px 64.25px 0px 0px"
                  onClick={() => setModalState(false)}
                >
                  X
                </Btn>
              </BtnWrap>
              <CenterWrap CenterWrap>
                <WriterImage src={BasicProfile} />
                <Box width="200px" height="32px" margin="0px 0px 51px 0px">
                  {nicknameState}
                </Box>
                <Box
                  width="232px"
                  height="29px"
                  margin="0px 0px 21px 0px"
                ></Box>
                <Box
                  width="232px"
                  height="29px"
                  margin="0px 0px 21px 0px"
                ></Box>
                <Box
                  width="232px"
                  height="29px"
                  margin="0px 0px 98px 0px"
                ></Box>
              </CenterWrap>
            </Modal>
          </ModalBackGround>
        </Wrap>
      )}
    </>
  );
}

export default BigModal;
