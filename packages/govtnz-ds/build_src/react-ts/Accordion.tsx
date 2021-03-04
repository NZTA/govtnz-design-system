import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Accordion = ({ children }: Props) => (
  <div className="g-accordion" role="contentinfo">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example Accordion content </React.Fragment>
    )}
  </div>
);

export default Accordion;
