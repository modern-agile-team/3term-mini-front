import React from "react";
import styled from "styled-components";

const WholeWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 1512px;
  height: 982px;
  background-color: #94f5dd;
`;

const HeaderBox = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0 86px 0 150px;
  width: 1512px;
  height: 80px;
  border-bottom: 0.5px solid #c4c4c4;
  background: #FFFFFF;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;


function Layout(props) {
  const { main } = props;
  return (
    <WholeWrapper>
      <HeaderBox>
        <div>1</div>
        <div>2</div>
      </HeaderBox>
      {main}
    </WholeWrapper>
  );
}


export default Layout;
