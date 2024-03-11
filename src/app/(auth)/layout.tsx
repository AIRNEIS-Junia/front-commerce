import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"my-medium w-screen flex items-center min-h-[90vh]"}>
      <div className={"w-[400px] mx-auto"}>{children}</div>
    </div>
  );
};

export default Layout;
