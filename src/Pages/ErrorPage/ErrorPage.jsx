import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div>
        <h1 className="text-6xl font-bold uppercase text-center">
          404-Page Not found
        </h1>
        <div className="flex justify-center">
          <Link to="/">
            <button className="uppercase btn bg-[#7cb908] text-white font-semibold hover:bg-[#4b7006] mt-10">
              Go to homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
