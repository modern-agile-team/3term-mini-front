import React from "react";
import styled from "styled-components";

const SideBarWrap = styled.div.attrs(({ height, width }) => ({
  row: height,
  col: width,
}))`
  height: ${(props) => props.row};
  width: ${(props) => props.col};
  background-color: #f9f9f9;
  border: 1px solid #d6d6d6;

  margin-top: 25px;
`;

function SideBar(props) {
  const { height, width, children } = props;

  return (
    <SideBarWrap height={height} width={width}>
      {children}
    </SideBarWrap>
  );
}

export default SideBar;
