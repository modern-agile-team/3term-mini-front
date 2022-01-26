import React from "react";
import styled from "styled-components";

const PageNationWrap = styled.div`
  width: 163px;
  height: 30px;
  background-color: white;
  border: 1px solid #D6D6D6;

  margin-left: 322.5px;
  display: flex;
  align-items: center;
`

const PageNationNumber = styled.div.attrs(({marginValue}) => ({
  margin: marginValue,
}))`
  width: 28px;
  height: 28px;
  background-color: #F9F9F9;
  border: 1px solid #D6D6D6;

  margin-right: ${(props) => props.margin};
`

const PageNationArrow = styled.div.attrs(({marginValue}) => ({
  margin: marginValue,
}))`
  width: 4px;
  height: 9.25px;
  background-color: #F9F9F9;
  border: 1px solid #D6D6D6;

  margin-right: ${(props) => props.margin};
`

function PageNation() {
  return (
    <PageNationWrap>
      <PageNationArrow marginValue="24.5px"/>
      <PageNationNumber marginValue="10px"/>
      <PageNationNumber marginValue="10px"/>
      <PageNationNumber marginValue="24.5px"/>
      <PageNationArrow marginValue="0px"/>
    </PageNationWrap>
  )
}

export default PageNation;