import React from 'react';
import styled from 'styled-components';

export const BoxWrap = styled.div.attrs(({ height, width, margin }) => ({
  row: height,
  col: width,
  margin: margin,
}))`
  height: ${(props) => props.row};
  width: ${(props) => props.col};

  margin: ${(props) => props.margin};

  background-color: #F9F9F9;
  border: 1px solid #D6D6D6;
`

function Box(props) {
  const { children, width, height, margin } = props;
  return (
  <BoxWrap 
    height={height} 
    width={width}
    margin={margin}
  >{children}</BoxWrap>);
};

export { Box };