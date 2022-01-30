import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.button.attrs(
  ({
    width,
    height,
    bgColor = '#C62935',
    fontSize = '18px',
    fontColor = 'white',
    borderRadius = '14px',
  }) => ({
    col: width,
    row: height,
    bgColor,
    fontSize,
    fontColor,
    borderRadius,
  })
)`
  width: ${(props) => props.col};
  height: ${(props) => props.row};
  background-color: ${(props) => props.bgColor};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  border-radius: ${(props) => props.borderRadius};
  border: none;
  text-align: center;
`;

const Button = (props) => {
  const {
    width,
    height,
    bgColor,
    fontSize,
    fontColor,
    borderRadius,
    children,
  } = props;

  return (
    <ButtonWrap
      height={height}
      width={width}
      bgColor={bgColor}
      fontSize={fontSize}
      fontColor={fontColor}
      borderRadius={borderRadius}>
      {children}
    </ButtonWrap>
  );
};

export default Button;
