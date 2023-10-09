import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Social from "../Pages/Shared/Social/Social";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Social />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
