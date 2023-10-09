import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="fixed top-52 hidden lg:flex flex-col justify-center items-center">
        <p className="rotate-90 mb-14 text-[#7cb908] font-semibold">Follow Us</p>
        <hr className="w-10 border border-[#7cb908] rotate-90" />
      <div className=" space-y-2 mt-8">
        <li className="list-none">
          <Link target={"_blank"} to="https://www.facebook.com/Shahadat.74238">
            <FaFacebookSquare className="text-[#7cb908] hover:text-[#61861c] text-2xl" />
          </Link>
        </li >
        <li className="list-none">
          <Link
            target={"_blank"}
            to="https://www.linkedin.com/in/md-shahadat-hosen-801164288/"
          >
            <FaLinkedin className="text-[#7cb908] hover:text-[#61861c] text-2xl" />
          </Link>
        </li >
        <li className="list-none">
          <Link
            target={"_blank"}
            to="https://www.instagram.com/mdshahadathosen74238/"
          >
            <FaInstagramSquare className="text-[#7cb908] hover:text-[#61861c] text-2xl" />
          </Link>
        </li>
        <li className="list-none">
          <Link target={"_blank"} to="https://github.com/shahadat74238">
            <FaGithubSquare className="text-[#7cb908] hover:text-[#61861c] text-2xl" />
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Social;
