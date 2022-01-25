import React from "react";
import styled from "styled-components";

const SideBarWrap = styled.div.attrs(({ height, width }) => ({
  row: height,
  col: width,
}))`
  height: ${(props) => props.row};
  width: ${(props) => props.col};
  background-color: #F9F9F9;
  border: 1px solid #D6D6D6;

  margin-top: 25px;
`

function SideBar(props) {
  const { height, width } = props

  return (
    <SideBarWrap 
      height={height} 
      width={width}
    />
  )
}

export default SideBar;