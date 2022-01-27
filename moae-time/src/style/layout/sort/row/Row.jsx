import React from 'react';
import styled from 'styled-components';

const Row = styled.div.attrs(({ width, height }) => ({
  width: width,
  height: height,
}))`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.col};
  height: fit-content;
  max-height: ${(props) => props.maxRow || '100%'};
  /* overflow: scroll; */
  /* background-color: blue; */
`;

export default Row;
