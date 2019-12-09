import React from "react";
import styled from "styled-components";

export default () => (
  <StyledFooter>
    ©2019, Built with React v{React.version} and Apollo Client v2.6.
  </StyledFooter>
);

const StyledFooter = styled.div`
  height: 40px;
  margin: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
