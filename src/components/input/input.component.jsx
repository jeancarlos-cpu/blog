import React from "react";
import styled from "styled-components";

export default function Input({ ...props }) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  margin: 10px;
  padding: 8px 0;
  border: 2px solid var(--secondary);
  font-size: 20px;
`;
