import React from 'react';
import styled from 'styled-components';
import { Row } from '../../style';

const PageNationNumber = styled.div.attrs(({ marginValue }) => ({
  margin: marginValue,
}))`
  width: 28px;
  height: 28px;
  background-color: #f9f9f9;
  border: 1px solid #d6d6d6;
  border-radius: 50%;

  margin-right: ${(props) => props.margin};
`;

const PageNationArrow = styled.i.attrs(({ direction = 'right' }) => ({
  direction,
}))`
  width: 11px;
  height: 11px;
  border: solid 1px #c62935;
  border-width: 0 1px 1px 0;
  display: inline-block;
  transform: ${(props) =>
    props.direction === 'right' ? 'rotate(-45deg)' : 'rotate(135deg)'};
  -webkit-transform: ${(props) =>
    props.direction === 'right' ? 'rotate(-45deg)' : 'rotate(135deg)'};

  &:hover {
    cursor: pointer;
  }
`;

function PageNation(props) {
  return (
    <Row width={'len2'} padding={'25px 0 0'}>
      <PageNationArrow direction={'left'}></PageNationArrow>
      <Row width={'len13'}>
        <PageNationNumber>{}</PageNationNumber>
        <PageNationNumber></PageNationNumber>
        <PageNationNumber></PageNationNumber>
      </Row>
      <PageNationArrow direction={'right'}></PageNationArrow>
    </Row>
  );
}

export default PageNation;
