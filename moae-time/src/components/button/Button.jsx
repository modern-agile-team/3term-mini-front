import React from 'react';
import styled from 'styled-components';
import { MainStyle } from '../../style';

const ButtonWrap = styled.button.attrs(
  ({
    width = 'default',
    padding = 'default',
    backColor = 'red',
    fontSize = 'size8',
    fontColor = 'white',
    weight = 'default',
    borderRadius = 'radius5',
    border = 'none',
  }) => ({
    width: MainStyle.checkWidth[width],
    padding: MainStyle.checkPadding[padding],
    backColor: MainStyle.checkColor[backColor],
    fontSize: MainStyle.checkFontSize[fontSize],
    fontColor: MainStyle.checkColor[fontColor],
    weight: MainStyle.checkWeight[weight],
    borderRadius: MainStyle.checkRadius[borderRadius],
    border,
  })
)`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  height: fit-content;
  background-color: ${(props) => props.backColor};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => props.weight};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
`;

const Button = (props) => {
  const {
    width,
    padding,
    backColor,
    fontSize,
    fontColor,
    weight,
    borderRadius,
    border,
    children,
    onClick,
  } = props;

  return (
    <ButtonWrap
      width={width}
      padding={padding}
      backColor={backColor}
      fontSize={fontSize}
      fontColor={fontColor}
      weight={weight}
      borderRadius={borderRadius}
      border={border}
      onClick={onClick}>
      {children}
    </ButtonWrap>
  );
};

export default Button;
