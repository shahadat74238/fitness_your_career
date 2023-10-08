const RightSideNav = () => {
  return (
    <div>
      <div className="bg-[#f5f5f5] p-5 mb-10">
        <h1 className="text-[#7cb908] font-bold text-lg">
          WE ARE GOING TO OPEN OUR EVENT
        </h1>
        <p className="mt-5 text-[#818181] text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit ducimus inventore quaerat ea magnam porro placeat,
          repudiandae, corporis non consectetur natus at, tempora voluptate. In
          ipsum ducimus impedit rem sequi, labore repudiandae distinctio nobis
          illo ut perspiciatis totam tempore ullam harum nemo libero iste
          dolorum nam? Illum rem sit quisquam.
        </p>
        <div className="mt-8">
          <button className="h-10 w-36 bg-[#7cb908] text-white font-semibold rounded hover:bg-white hover:text-[#7cb908] hover:border hover:border-[#7cb908] text-sm">
            DOWNLOAD INFO
          </button>
        </div>
      </div>
      <div className="bg-[#f5f5f5] p-5">
        <h1 className="text-[#7cb908] font-bold text-lg">
          REGISTER AND JOIN EVENT
        </h1>
        <form>
          <div>
            <input
              className="w-full py-2 px-4 my-3"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              className="w-full py-2 px-4 my-3"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <input
              className="w-full py-2 px-4 my-3"
              type="text"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="flex gap-10 my-2">
            <div>
              <input type="checkbox" className="checkbox checkbox-xs" />
              <label className="ml-2 font-semibold">Male</label>
            </div>
            <div>
              <input type="checkbox" className="checkbox checkbox-xs" />
              <label className="ml-2 font-semibold">Female</label>
            </div>
          </div>
          <div className="mt-8">
            <button className="h-10 w-36 bg-[#7cb908] text-white font-semibold rounded hover:bg-white hover:text-[#7cb908] hover:border hover:border-[#7cb908] text-sm">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightSideNav;
