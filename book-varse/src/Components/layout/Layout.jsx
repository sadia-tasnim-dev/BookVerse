import { Outlet } from "react-router-dom";
import { Navbar } from "../Shared/Nav/Navbar";
import { Footer } from "../../Pages/Homepage/footer";

export const Layout = () => {
  return (
    <div>
      <div className="px-8 max-w-screen-xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
