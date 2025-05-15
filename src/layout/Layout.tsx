import { Outlet } from "react-router-dom";

import Header from "../component/molecules/Header.tsx";

function Layout() {
  return (
    <div className="bg-primary-900 text-primary-100 min-h-[100vh]">
      <Header />
      <div className="pt-24 mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
