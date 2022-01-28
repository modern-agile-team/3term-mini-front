import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.button.attrs(
  ({ height = 'fit-content', width = '100%', margin = '0 0 0 0' }) => ({
    row: height,
    col: width,
  })
)`
  height: ${(props) => props.row};
  width: ${(props) => props.col};
  margin: ${(props) => props.margin};
  font-size: 20px;
`;

const Button = (props) => {
  const { height, width, margin, children } = props;

  return (
    <ButtonWrap height={height} width={width} margin={margin}>
      {children}
    </ButtonWrap>
  );
};

export default Button;
