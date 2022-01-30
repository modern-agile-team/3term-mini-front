import React from 'react';
import styled from 'styled-components';
import { MainStyle } from '../../../';

const Col = styled.div.attrs(
  ({ width = 'default', padding = '0 0 0 0', align = 'center' }) => ({
    width: MainStyle.checkWidth[width],
    padding,
    align,
  })
)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => props.align};

  width: ${(props) => props.width};
  height: fit-content;

  padding: ${(props) => props.padding};

  /* background-color: aqua; */
`;

export default Col;
