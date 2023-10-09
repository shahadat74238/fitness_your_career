import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className=" min-h-screen bg-black/60">
        <div className=" max-w-7xl mx-auto flex justify-center items-center h-screen">
          <div data-aos="fade-up" className="text-white text-center">
            <h3 className="text-xl lg:text-3xl font-bold mb-2 md:mb-5">
              Be an inspiration
            </h3>
            <h1 className="text-3xl lg:text-7xl font-bold mb-2 md:mb-5">
              Exercise Your Mind and Body
            </h1>
            <p className=" md:text-lg w-3/4 mx-auto leading-8 md:tracking-wide ">
              If you’ve ever experienced “barre shake” while plié-ing or
              trembled during a plank, you might have wondered what makes your
              muscles occasionally feel shaky when you’re working out.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('../assets/banner1.jpg')",
        }}
        className="h-screen bg-no-repeat bg-cover bg-center -mt-[100vh] relative -z-10 "
      >
        <div className="flex items-center justify-center h-screen">
        <img className="lg:h-96 md:h-80 h-52" src="../assets/icon.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
