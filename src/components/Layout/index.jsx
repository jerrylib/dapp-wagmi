import React from "react";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-full text-gray-700 bg-gray-900">
      <div className="flex min-h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
