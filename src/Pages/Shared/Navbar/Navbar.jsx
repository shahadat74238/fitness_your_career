import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success('Successfully created!');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#7cb908] underline"
              : "hover:text-[#7cb908] hover:underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-[#7cb908] underline"
              : "hover:text-[#7cb908] hover:underline"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/event"
          className={({ isActive }) =>
            isActive
              ? "text-[#7cb908] underline"
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
              ? "text-[#7cb908] underline"
              : "hover:text-[#7cb908] hover:underline"
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full bg-[#0a0d1d] text-white">
      <div className="navbar max-w-7xl mx-auto px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost pl-0 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu-sm bg-[#0a0d1d] dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-32"
            >
              {navLinks}
            </ul>
          </div>
          <h1 className="md:text-4xl text-2xl font-bold">
            <span className="text-[#7cb908]">FIT</span>NESS
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-8 text-lg">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogout}
              className="md:py-2 md:px-4 py-1 px-3 rounded-lg bg-[#7cb908] font-semibold text-lg"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="md:py-2 md:px-4 py-1 px-3 rounded-lg bg-[#7cb908] font-semibold text-lg">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
