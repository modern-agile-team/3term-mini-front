import React from 'react';
import styled from 'styled-components';

const GrayWrap = styled.div.attrs(({ height, width }) => ({
  row: height,
  col: width,
}))`
  height: ${(props) => props.row};
  width: ${(props) => props.col};
  background-color: #F9F9F9;
  border: 1px solid #D6D6D6;
`

function Graybox(props) {
  const { children, width, height } = props;
  return (
  <GrayWrap 
    height={height} 
    width={width}
  >{children}</GrayWrap>);
};

export default Graybox;