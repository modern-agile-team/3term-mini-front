import React from 'react';
import styled from 'styled-components';

const checkColor = {
  red: '#c62935',
  green: '28b0b8',
  gray1: '#000000',
  gray2: '#444444',
  gray3: '#737373',
  gray4: '#a6a6a6',
  gray5: '#f9f9f9',
  gray6: '#ededed',
  default: '#d6d6d6',
};

const checkWidth = {
  len1: '100px',
  len2: '180px',
  len3: '336px',
  len4: '479px',
  len5: '620px',
  len6: '637px',
  len7: '662px',
  len8: '816px',
  len9: '907px',
  len10: '972px',
  len11: '1168px',
  default: '100%',
};

const checkMaxHeight = {
  len1: '50px',
  len2: '65px',
  len3: '86px',
  len4: '165px',
  len5: '200px',
  len6: '227px',
  len7: '239px',
  len8: '240px',
  len9: '250px',
  len10: '291px',
  len11: '339px',
  len12: '452px',
  len13: '590px',
  len14: '601px',
  len15: '670px',
  default: 'fit-content',
};

// const checkPadding = {}

const Box = styled.div.attrs(
  ({ width = 'default', height = 'default', color = 'default', padding }) => ({
    col: checkWidth[width],
    row: checkMaxHeight[height],
    color: checkColor[color],
    padding: padding,
  })
)`
  height: ${(props) => props.row};
  /* 일단 눈으로 확인하기 위해서 height로 했고
  레이아웃 끝나고 내부에 컨텐츠 들어간 후엔 아래 두 코드로 변경할겁니다 */
  /* height: fit-content;
  max-height:${(props) => props.row}; */

  width: ${(props) => props.col};
  padding: ${(props) => props.padding};
  background-color: #f9f9f9;
  /* background-color: blue; */
  border: 1px solid ${(props) => props.color};
  display: flex;
  flex-direction: column;

  /* border 3항 -> dafault D6D6D6
  * 
  */
`;

export default Box;
