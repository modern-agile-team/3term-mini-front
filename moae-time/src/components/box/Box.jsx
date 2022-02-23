import React from 'react';
import styled from 'styled-components';
import { MainStyle } from '../../style';

const Box = styled.div.attrs(
  ({ width = 'default', color = 'default', padding, backColor = 'gray5' }) => ({
    col: MainStyle.checkWidth[width],
    color: MainStyle.checkColor[color],
    padding,
    backColor: MainStyle.checkColor[backColor],
  })
)`
  height: fit-content;
  width: ${(props) => props.col};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backColor};
  border: 1px solid ${(props) => props.color};
  display: flex;
  flex-direction: column;
`;

export default Box;
