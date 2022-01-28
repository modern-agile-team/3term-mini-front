import React from 'react';
import styled from 'styled-components';

const Col = styled.div.attrs(
  ({ width = '100%', height = 'fit-content', padding = '0 0 0 0' }) => ({
    col: width,
    row: height,
  })
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.col};
  /* height: fit-content;
  max-height: ${(props) => props.row}; */
  height: ${(props) => props.row};
  padding: ${(props) => props.padding};
`;

export default Col;
