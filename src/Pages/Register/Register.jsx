import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsGithub } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { BsEye } from 'react-icons/bs';
import toast from "react-hot-toast";


const Register = () => {
    const { googleLogin, githubLogin, createUser } = useContext(AuthContext);
    const [type, setType] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, email, password);

    createUser(email, password)
    .then(() => {
      toast.success('Successfully Account Created!');
    })
    .catch(error => {
        console.log(error.message);
    })
  };

  // Google login.
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success('Successfully Login!');
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  // Github Login
  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success('Successfully Login!');
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  return (
    <div className=" min-h-screen">
      <div className="max-w-7xl  mx-auto py-10 items-center justify-between grid grid-cols-1 lg:grid-cols-2">
        <div className="md:w-3/4 mx-auto px-5 md:px-10 lg:px-0  md:pb-8 rounded-lg">
          <div className="md:px-14 px-8 py-6 rounded-md border border-[#7cb908]">
            <h1 className="font-bold text-2xl text-[#7cb908]">Create an Account</h1>
            <form onSubmit={handleLogin}>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Full Name"
                  className="mt-6 outline-none border-b-2 border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5]  bg-transparent  w-full"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Photo URL"
                  className="mt-6 outline-none border-b-2 border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5]  bg-transparent  w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Username or Email"
                  className="mt-6 outline-none border-b-2 border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5]  bg-transparent  w-full"
                />
              </div>
              <div className="relative">
                <input
                  type={type? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  placeholder="Password"
                  className={`${type? "text-base py-3" : ""} mt-4 outline-none placeholder:font-normal placeholder:text-base text-2xl font-bold border-b-2  border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5] bg-transparent w-full`}
                />
                <span onClick={()=>setType(!type)} className="absolute bottom-4 right-0">
                  {
                    type? <BsEye></BsEye>: <BsEyeSlash></BsEyeSlash>
                  }
                  </span>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    required
                    className="cursor-pointer h-5 w-5 mr-3"
                  />
                  <label htmlFor="check" className="">
                    Trams and Condition
                  </label>
                </div>
              </div>
              <button className="w-full py-3 text-white bg-[#7cb908]  font-semibold text-lg mt-10">
                Register
              </button>
            </form>
            <p className="mt-6 text-center">
              Already have an account?
              <Link to="/login" className="text-[#7cb908] ml-2 underline">
                Login
              </Link>
            </p>
          </div>
          <div className="divider px-10 text-[#C5C5C5]">Or</div>
          <div className="space-y-3 px-10">
            <button onClick={handleGoogleLogin} className="w-full border-2 border-sky-600 py-2  rounded-lg">
              <FcGoogle className="inline mr-5 text-lg" />
              Continue with Google
            </button>
            <button onClick={handleGithubLogin} className="w-full border-2 border-sky-600 py-2  rounded-lg">
              <BsGithub className="inline mr-5 text-lg" />
              Continue with Github
            </button>
          </div>
        </div>
        <div className="hidden lg:visible lg:block">
          <img src='../assets/account.png' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
