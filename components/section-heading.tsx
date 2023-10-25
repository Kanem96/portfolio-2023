import React, { FunctionComponent } from "react";

export interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: FunctionComponent<SectionHeadingProps> = ({
  children,
}) => {
  return (
    <div className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </div>
  );
};

export default SectionHeading;
