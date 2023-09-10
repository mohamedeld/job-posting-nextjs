import React, { ReactNode } from "react";

const BgColor = ({ children }: { children: ReactNode }) => {
  return <div className=" h-screen flex items-center justify-center   bg-gray-900">{children}</div>;
};

export default BgColor;
