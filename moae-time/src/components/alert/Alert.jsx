import React, { useEffect, cloneElement } from 'react';
import styled from 'styled-components';
import { Col, MainStyle } from '../../style';
import deleteImg from '../../assets/delete.png';

const Background = styled.div.attrs(({ visible }) => ({
  visible,
}))`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  z-index: 1;
  overflow: auto;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const ModalWrapper = styled.div.attrs(({ width, padding }) => ({
  width: MainStyle.checkWidth[width],
  padding,
}))`
  position: fixed;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
  z-index: 2;
  border-radius: 24px;
  position: relative;
  width: ${(props) => props.width};
  /* height: 600px; */
  padding: ${(props) => props.padding};

  background-color: #f9f9f9;
`;

const Close = styled.img`
  outline: none;
  position: absolute;
  z-index: 5;

  width: 25px;
  height: 25px;

  right: 40px;
  top: 40px;
  cursor: pointer;
`;

function Alert(props) {
  const { children, visible, width, padding, close, next } = props;

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      close();
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
    <Background visible={visible} onClick={closeModal}>
      <ModalWrapper width={width} padding={padding}>
        <Close src={deleteImg} onClick={closeModal}>
          {}
        </Close>
        {/* {children} */}
        {cloneElement(children, { next })}
      </ModalWrapper>
    </Background>
  );
}

export default Alert;
