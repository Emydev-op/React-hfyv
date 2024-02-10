import { Outlet } from "react-router-dom";
import Navbar from "../components/Rootlayout/Navbar";
import Footer from "../components/Rootlayout/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="dark:bg-slate-800">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
