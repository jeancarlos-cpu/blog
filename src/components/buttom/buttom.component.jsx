import React from "react";
import styled from "styled-components";

export default ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  border-radius: 10px;
  border: 0px;
  margin: 0px auto;
  padding: 8px 2em;
  background: ${props => (props.inverted ? "white" : "#3da9fc")};
  border: ${props => (props.inverted ? "solid 2px #3da9fc" : null)};
  color: ${props => (props.inverted ? "#3da9fc" : "white")};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
