import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="dark:bg-slate-800">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
