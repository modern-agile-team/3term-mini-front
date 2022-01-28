import { React, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Box } from '../';

const Wrap = styled.div`
  width: 773.75px;
  height: 432px;

  display: flex;
  flex-direction: row;
`;
const CenterWrap = styled.div`
  width: 269.91px;
  height: 390px;

  display: flex;
  flex-direction: column;
  align-items: center;
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

function BigModal(props) {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Btn onClick={() => setModalState(true)}>O</Btn>
      <Wrap>
        <Modal isOpen={modalState}>
          <Btn width="19.5px" height="20.75px">
            R
          </Btn>
          <CenterWrap>
            <Box width="200px" height="200px" />
            <Box width="200px" height="32px" />
            <Box width="232px" height="29px" />
            <Box width="232px" height="29px" />
            <Box width="232px" height="29px" />
          </CenterWrap>
          <Btn onClick={() => setModalState(false)}>X</Btn>
        </Modal>
      </Wrap>
    </>
  );
}

export default BigModal;
