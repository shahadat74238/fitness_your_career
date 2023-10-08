import { NavLink } from "react-router-dom";

const Footer = () => {

    const navLinks = (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#7cb908] underline font-semibold"
                  : "hover:text-[#7cb908] hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "text-[#7cb908] underline font-semibold"
                  : "hover:text-[#7cb908] hover:underline"
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive
                  ? "text-[#7cb908] underline font-semibold"
                  : "hover:text-[#7cb908] hover:underline"
              }
            >
              About Us
            </NavLink>
          </li>
        </>
      );

  return (
    <footer className="footer footer-center p-10 text-white bg-[#0a0d1d] rounded">
      <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-8 text-lg">{navLinks}</ul>
        </div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>icon</a>
          <a>icon</a>
          <a>icon</a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by Fitness.</p>
      </aside>
    </footer>
  );
};

export default Footer;
