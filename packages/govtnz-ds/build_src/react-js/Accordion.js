import React from "react";

const Accordion = ({ children }) => (
  <div className="g-accordion" role="contentinfo">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example Accordion content </React.Fragment>
    )}
  </div>
);

export default Accordion;
