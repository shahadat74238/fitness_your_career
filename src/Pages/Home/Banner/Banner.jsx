
const Banner = () => {


  return (
    <div className="h-screen w-full bg-[url('../assets/banner1.jpg')] bg-no-repeat bg-cover">
      <div className="max-w-7xl h-full mx-auto text-white flex items-center justify-center">
        <div className="w-3/4 ">
          <h3 className="text-3xl text-center font-semibold">Be an inspiration</h3>
          <h1 className="text-7xl text-center font-bold">Exercise Your Mind <br /> and Body</h1>
          <p className="w-3/4 mx-auto text-xl  text-center">
            If you’ve ever experienced “barre shake” while bent-ing or trembled
            during a plank, you might have wondered what makes your muscles
            occasionally feel shaky when you’re working out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
