import React from 'react';
import styled from 'styled-components';
import { MainStyle } from '../../style';

const BoardBox = styled.div.attrs(
  ({ width = 'default', padding = '0 0 0 0', align = 'center' }) => ({
    // width,
    // padding,
    // align,
  })
)`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => props.align};

  width: ${(props) => props.width};
  height: fit-content;

  padding: ${(props) => props.padding};

  background-color: aqua; */
`;

export default BoardBox;
