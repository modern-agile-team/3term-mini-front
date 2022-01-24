import React from "react";
import styled from "styled-components";

const ButtonWrap = styled.button.attrs(({ height, width }) => ({
  row: height,
  col: width,
}))`
height: ${ (props) => props.row }
width: ${ (props) => props.col };
`

function Button(props) {
  const { height, width } = props

  return (
    <ButtonWrap 
      height={height} 
      width={width}
    />
  )
}

export default Button;