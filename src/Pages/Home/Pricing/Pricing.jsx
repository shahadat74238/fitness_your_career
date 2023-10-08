const Pricing = () => {
  return (
    <div className="w-full mb-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">OUR PRICING</h1>
        <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 md:px-10">
          <div className=" py-10 text-center hover:shadow-md space-y-3 bg-[#f5f5f5]">
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
          <div className=" py-10 text-center hover:shadow-md space-y-3 bg-[#f5f5f5]">
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
          <div className=" py-10 text-center hover:shadow-md space-y-3 bg-[#f5f5f5]">
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
          <div className=" py-10 text-center hover:shadow-md space-y-3 bg-[#f5f5f5]">
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
