import React from 'react';
import styled from 'styled-components';

export const BoxWrap = styled.div.attrs(({ height, width }) => ({
  row: height,
  col: width,
}))`
  height: ${(props) => props.row};
  width: ${(props) => props.col};
  background-color: #F9F9F9;
  border: 1px solid #D6D6D6;
`

function Box(props) {
  const { children, width, height } = props;
  return (
  <BoxWrap 
    height={height} 
    width={width}
  >{children}</BoxWrap>);
};

export { Box };