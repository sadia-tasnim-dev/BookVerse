import { Outlet } from "react-router-dom";
import { Navbar } from "../Shared/Nav/Navbar";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
