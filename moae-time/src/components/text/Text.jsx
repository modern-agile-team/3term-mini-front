import React from 'react';
import styled from 'styled-components';
import { MainStyle } from '../../style';

const Text = styled.span.attrs(
  ({
    size = 'default',
    color = 'default',
    weight = 'default',
    padding = 'default',
  }) => ({
    size: MainStyle.checkFontSize[size],
    color: MainStyle.checkColor[color],
    weight: MainStyle.checkWeight[weight],
    padding: MainStyle.checkPadding[padding],
  })
)`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  padding: ${(props) => props.padding};
  vertical-align: middle;
`;

export default Text;
