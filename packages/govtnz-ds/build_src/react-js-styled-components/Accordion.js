import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid red;
`;

const Accordion = ({ children }) => (
  <StyledDiv role="contentinfo">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example Accordion content </React.Fragment>
    )}
  </StyledDiv>
);

export default Accordion;
