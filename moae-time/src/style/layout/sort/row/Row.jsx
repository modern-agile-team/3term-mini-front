import React from 'react';
import styled from 'styled-components';

const Row = styled.div.attrs(
  ({
    width = '100%',
    height = 'fit-content',
    padding = '0 0 0 0',
    align = 'center',
  }) => ({
    col: width,
    row: height,
  })
)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${(props) => props.align};

  width: ${(props) => props.col};
  height: fit-content;
  max-height: ${(props) => props.maxRow};

  padding: ${(props) => props.padding};
`;

export default Row;
