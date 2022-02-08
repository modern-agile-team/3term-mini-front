import React from 'react';
import styled from 'styled-components';
import { MainStyle } from '../../style';

const SpanText = styled.span.attrs(
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

function Text({ className, children, size, color, weight, padding }) {
  return (
    <SpanText
      size={size}
      color={color}
      weight={weight}
      padding={padding}
      className={className}
    >
      {children}
    </SpanText>
  );
}

export default Text;
