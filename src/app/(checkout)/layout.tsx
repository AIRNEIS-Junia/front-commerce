import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"my-medium w-screen flex items-center min-h-[90vh]"}>
      <div className={"w-mobileContainer md:w-tabletContainer mx-auto px-4"}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
