import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Box } from '../';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  overflow: auto;
`;

const ModalBox = styled(Box)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border-radius: 24px;
  overflow: auto;
`;

const ModalContainer = styled(Box)`
  width: 100%;
  height: 700px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function HomeModal(props) {
  const { visible, handleModalState } = props;

  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      handleModalState(visible);
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

  const closeBtn = () => {
    handleModalState(visible);
  };

  return (
    <ModalWrapper visible={visible} onClick={onCloseModal}>
      <ModalBox
        width="662px"
        height="670px"
        // onClick={(e) => e.stopPropagation()}
      >
        <ModalContainer>
          <button onClick={closeBtn}>Close</button>
        </ModalContainer>
      </ModalBox>
    </ModalWrapper>
  );
}

export default HomeModal;
