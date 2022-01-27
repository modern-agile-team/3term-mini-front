import React from 'react';
import styled from 'styled-components';

const Box = styled.div.attrs(({ height, width, margin }) => ({
  row: height,
  col: width,
  margin: margin,
}))`
  height: ${(props) => props.row};
  width: ${(props) => props.col};
  margin: ${(props) => props.margin};
  background-color: #f9f9f9;
  border: 1px solid #d6d6d6;
`;

// const BoxComponent = ({ children, size }) => {
//   const heigth = () => {
//     switch (size) {
//       case 'large':
//         return 700;
//       case 'medium':
//         return 500;
//       default:
//         return 300;
//     }
//   };

//   return <Box height={height()}>{children}</Box>;
// };

export default Box;
