import React, { cloneElement } from 'react';
import styled from 'styled-components';
import { Col, MainStyle } from '../../style';

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

const Close = styled.button`
  outline: none;
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  z-index: 5;

  width: 25px;
  height: 0px;
  left: 620px;
  top: 30px;
  cursor: pointer;

  border: 2px solid #444444;
  transform: rotate(-45deg);

  &::after {
    content: '100';
    position: absolute;
    z-index: 6;
    left: 620px;
    top: 30px;

    width: 25px;
    height: 0px;
    border: 2px solid #444444;
    transform: rotate(45deg);
  }
`;

function Alert(props) {
  const {
    children,
    visible,
    onCloseModal,
    width,
    padding,
    close,
    next,
  } = props;

  const closeModal = () => {
    close();
  };

  return (
    <Background visible={visible} onClick={onCloseModal}>
      <ModalWrapper width={width} padding={padding}>
        <Close onClick={closeModal}>{}</Close>
        {/* {children} */}
        {cloneElement(children, { next })}
      </ModalWrapper>
    </Background>
  );
}

export default Alert;
