import { Link, NavLink } from "react-router-dom";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

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
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#7cb908] underline font-semibold"
              : "hover:text-[#7cb908] hover:underline"
          }
        >
          Contact
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
      <div className="navbar-center">
        <ul className="flex md:flex-row flex-col px-1 md:gap-8 text-lg">{navLinks}</ul>
      </div>
      <nav>
        <div className="grid gap-4 grid-cols-4">
          <Link target={'_blank'} to="https://www.facebook.com/Shahadat.74238">
            <FaFacebookSquare className="text-[#7cb908] text-3xl" />
          </Link>
          <Link target={'_blank'} to="https://www.linkedin.com/in/md-shahadat-hosen-801164288/">
            <FaLinkedin className="text-[#7cb908] text-3xl" />
          </Link>
          <Link target={'_blank'} to="https://www.instagram.com/mdshahadathosen74238/">
            <FaInstagramSquare className="text-[#7cb908] text-3xl" />
          </Link>
          <Link target={'_blank'} to="https://github.com/shahadat74238">
            <FaGithubSquare className="text-[#7cb908] text-3xl" />
          </Link>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by FITNESS.</p>
      </aside>
    </footer>
  );
};

export default Footer;
