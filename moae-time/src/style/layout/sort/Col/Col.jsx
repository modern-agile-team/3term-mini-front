import React from 'react';
import styled from 'styled-components';

const Col = styled.div.attrs(({ width, height }) => ({
  width: width,
  height: height,
}))`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.col ? props.col : '100%')};
  height: fit-content;
  max-height: ${(props) => props.maxRow};
  background-color: blue;
`;

export default Col;
