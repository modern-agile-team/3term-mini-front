import React from "react";
import styled from "styled-components";

const ToptitleWRap = styled.button.attrs(({ height, width }) => ({
  row: height,
  col: width,
}))`
width: ${ (props) => props.row };
`

function Toptitle(props) {
  const { height, width } = props

  return (
    <ToptitleWRap 
      height={height} 
      width={width}
    />
  )
}

export default Toptitle;