import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Successfully created!");
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
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-[#7cb908] underline font-semibold"
              : "hover:text-[#7cb908] hover:underline"
          }
        >
          Blog
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
          <h1 className="md:text-5xl text-2xl font-bold">
            <span className="text-[#7cb908]">FIT</span>NESS
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-8 text-lg">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="">
                <div className="avatar online cursor-pointer">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL? user.photoURL : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"} />
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] mt-3  p-3 shadow  rounded-box bg-[#0a0d1d] w-36 md:w-52"
              >
                <p className="text-sm text-center md:text-lg md:font-semibold">{user.displayName ? user.displayName : "Username"}</p>
                <li>
                  <button
                    onClick={handleLogout}
                    className=" w-full hover:text-[#7cb908] lg:text-lg lg:font-semibold "
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="md:py-2 md:px-4 py-1 px-3 rounded-lg bg-[#7cb908] font-semibold text-lg hover:bg-[#0a0d1d] hover:text-[#7cb908] hover:border-2 hover:border-[#7cb908]">
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
