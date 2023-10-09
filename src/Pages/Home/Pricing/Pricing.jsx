import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full mb-5 md:mb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h1 className="text-[#7cb908] text-3xl font-bold text-center pt-5 lg:pt-20">
        OUR PRICING
        </h1>
        <div className=" grid grid-cols-1 py-5 lg:py-20 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" py-10 text-center hover:shadow-md space-y-3 bg-[#f5f5f5]"
          >
            <h1 className="text-2xl font-bold text-[#7cb908]">BEGINNER</h1>
            <h3 className="text-xl font-semibold ">1 WEEK</h3>
            <div className="w-full p-2 bg-[#7cb908]">
              <p className="text-white text-lg font-medium">FREE</p>
            </div>
            <p className="pt-3 px-5 leading-8">
              Primary Health Check Health and Fitness Tips Personal Health
              Solution Basic Excreise Class Dancing and Swiming Membership Card
            </p>
            <button className="h-10 w-36 bg-[#7cb908] text-white font-semibold rounded hover:bg-white hover:text-[#7cb908] hover:border hover:border-[#7cb908] text-sm">
              JOIN NOW
            </button>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className=" py-10 text-center hover:shadow-md space-y-3 bg-[#f5f5f5]"
          >
            <h1 className="text-2xl font-bold text-[#7cb908]">BASIC</h1>
            <h3 className="text-xl font-semibold ">PER MONTH</h3>
            <div className="w-full p-2 bg-[#7cb908]">
              <p className="text-white text-lg font-medium">$ 80</p>
            </div>
            <p className="pt-3 px-5 leading-8">
              Primary Health Check Health and Fitness Tips Personal Health
              Solution Basic Excreise Class Dancing and Swiming Membership Card
            </p>
            <button className="h-10 w-36 bg-[#7cb908] text-white font-semibold rounded hover:bg-white hover:text-[#7cb908] hover:border hover:border-[#7cb908] text-sm">
              JOIN NOW
            </button>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className=" py-10 text-center hover:shadow-md space-y-3 bg-[#f5f5f5]"
          >
            <h1 className="text-2xl font-bold text-[#7cb908]">PRO</h1>
            <h3 className="text-xl font-semibold ">6 MONTHS</h3>
            <div className="w-full p-2 bg-[#7cb908]">
              <p className="text-white text-lg font-medium">$ 180</p>
            </div>
            <p className="pt-3 px-5 leading-8">
              Primary Health Check Health and Fitness Tips Personal Health
              Solution Basic Excreise Class Dancing and Swiming Membership Card
            </p>
            <button className="h-10 w-36 bg-[#7cb908] text-white font-semibold rounded hover:bg-white hover:text-[#7cb908] hover:border hover:border-[#7cb908] text-sm">
              JOIN NOW
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" py-10 text-center hover:shadow-md space-y-3 bg-[#f5f5f5]"
          >
            <h1 className="text-2xl font-bold text-[#7cb908]">VIP</h1>
            <h3 className="text-xl font-semibold ">1 YEAR</h3>
            <div className="w-full p-2 bg-[#7cb908]">
              <p className="text-white text-lg font-medium">$ 380</p>
            </div>
            <p className="pt-3 px-5 leading-8">
              Primary Health Check Health and Fitness Tips Personal Health
              Solution Basic Excreise Class Dancing and Swiming Membership Card
            </p>
            <button className="h-10 w-36 bg-[#7cb908] text-white font-semibold rounded hover:bg-white hover:text-[#7cb908] hover:border hover:border-[#7cb908] text-sm">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
