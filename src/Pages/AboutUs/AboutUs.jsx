/* eslint-disable react/no-unescaped-entities */

const AboutUs = () => {
  return (
    <div className="min-h-screen -mt-16">
      <div
        style={{
          backgroundImage: "url('../assets/bg.png')",
        }}
        className="h-[40vh] bg-cover bg-no-repeat bg-center"
      >
        <h1 className="text-3xl pt-[20vh] text-white font-bold text-center uppercase">
          About Us
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center md:flex-row gap-5 flex-col-reverse">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-10">WHY CHOOSE US ?</h1>
            <p className="text-justify text-[#818181]">
              Choosing a fitness gym offers a multitude of benefits that cater
              to one's health and well-being. Firstly, it provides access to a
              wide range of exercise equipment and facilities, allowing
              individuals to customize their workouts to meet their specific
              goals, whether it's building muscle, losing weight, or improving
              cardiovascular fitness.
              <br /> <br />
              Additionally, gyms often offer a supportive environment with
              experienced trainers and like-minded individuals, fostering
              motivation and accountability. Regular gym attendance can lead to
              improved physical health, increased energy levels, reduced stress,
              and even enhanced mental clarity. Ultimately, the choice to join a
              fitness gym empowers individuals to take control of their health
              and embark on a journey towards a happier and healthier life.
            </p>
          </div>
          <div className="flex-1 hidden  lg:flex justify-end">
            <img
              className="h-screen"
              src="https://template.unicoderbd.com/unifit/images/bg/woman1_bg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
