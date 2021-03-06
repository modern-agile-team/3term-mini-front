import React from 'react';
import styled from 'styled-components';
import { MainStyle } from '../../../';

const Row = styled.div.attrs(
  ({ width = 'default', padding = '0 0 0 0', align = 'center' }) => ({
    width: MainStyle.checkWidth[width],
    padding,
    align,
  })
)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${(props) => props.align};

  width: ${(props) => props.width};
  height: fit-content;

  padding: ${(props) => props.padding};
`;

export default Row;
