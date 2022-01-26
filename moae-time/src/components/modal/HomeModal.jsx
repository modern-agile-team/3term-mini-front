import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Box, BoxWrap } from '../';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  overflow: auto;
`;

const ModalBox = styled(BoxWrap)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border-radius: 24px;
  overflow: auto;
`;

const ModalContainer = styled(BoxWrap)`
  width: 100%;
  height: 700px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function HomeModal({ visible, handleModalState }) {
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      handleModalState();
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

  return (
    <ModalWrapper visible={visible} onClick={onCloseModal}>
      <ModalBox width="662px" height="670px">
        <ModalContainer>
          <button onClick={handleModalState}>Close</button>
        </ModalContainer>
      </ModalBox>
    </ModalWrapper>
  );
}

export default HomeModal;
