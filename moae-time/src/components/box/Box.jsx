import React from 'react';
import styled from 'styled-components';
import { MainStyle } from '../../style';

const Box = styled.div.attrs(
  ({ width = 'default', color = 'default', padding }) => ({
    col: MainStyle.checkWidth[width],
    color: MainStyle.checkColor[color],
    padding,
  })
)`
  /* 일단 눈으로 확인하기 위해서 height로 했고
  레이아웃 끝나고 내부에 컨텐츠 들어간 후엔 아래 두 코드로 변경할겁니다 */
  height: fit-content;

  width: ${(props) => props.col};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: #f9f9f9;
  /* background-color: blue; */
  border: 1px solid ${(props) => props.color};
  display: flex;
  flex-direction: column;
`;

export default Box;
