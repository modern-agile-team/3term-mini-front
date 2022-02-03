import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row } from '../../style';

const PageNationNumber = styled.button.attrs(({ marginValue }) => ({
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
  const {
    clickLeft, 
    clickRight, 
    clickPageNationOne, 
    clickPageNationTwo, 
    clickPageNationThr} = props;

  return (
    <Row width={'len2'} padding={'25px 0 0'}>
      <PageNationArrow direction={'left'} onClick={clickLeft}></PageNationArrow>
      <Row width={'len13'}>
        <PageNationNumber onClick={clickPageNationOne}></PageNationNumber>
        <PageNationNumber onClick={clickPageNationTwo}></PageNationNumber>
        <PageNationNumber onClick={clickPageNationThr}></PageNationNumber>
      </Row>
      <PageNationArrow direction={'right'} onClick={clickRight}></PageNationArrow>
    </Row>
  );
}

export default PageNation;
