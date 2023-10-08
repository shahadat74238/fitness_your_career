const Trainer = () => {
  return (
    <div className="w-full mb-5 md:mb-20 bg-[#0a0d1d]">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h1 className="text-[#7cb908] text-3xl font-bold text-center pt-5 lg:pt-20">OUR TRAINERS</h1>
        <div className="grid grid-cols-1 py-5 lg:py-20 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* card 1 */}
          <div className="bg-[#7cb908]">
            <div>
              <img className="w-full h-80 object-cover"
                src="https://template.unicoderbd.com/unifit/images/trainer/trainer2.jpg"
                alt="Loadin Image"
              />
            </div>
            <div className="text-center my-5 ">
                <h1 className="text-2xl text-white font-bold">David Lee</h1>
                <p className="font-semibold">Boxing Trainer </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="bg-[#7cb908]">
            <div>
              <img className="w-full h-80 object-cover"
                src="https://www.personaltrainercentral.com/images/fit_happy_fitness_trainer.jpg"
                alt="Loading Image"
              />
            </div>
            <div className="text-center my-5 ">
                <h1 className="text-2xl text-white font-bold">Jane Smith</h1>
                <p className="font-semibold">Cardio Workout</p>
            </div>
          </div>
          {/* card 3 */}
          <div className="bg-[#7cb908]">
            <div>
              <img className="w-full h-80 object-cover"
                src="https://media.licdn.com/dms/image/C5603AQFXz9d_vkAVDA/profile-displayphoto-shrink_800_800/0/1655045683046?e=2147483647&v=beta&t=6ZJUfSAYwVw0hu2lHei5QqphQbDtxudzo1nJI-aiKDs"
                alt="Loading Image"
              />
            </div>
            <div className="text-center my-5 ">
                <h1 className="text-2xl text-white font-bold">John Doe</h1>
                <p className="font-semibold">Strength Training</p>
            </div>
          </div>
          {/* card 4 */}
          <div className="bg-[#7cb908]">
            <div>
              <img className="w-full h-80 object-cover"
                src="https://img.freepik.com/premium-photo/handsome-trainer-smiling-camera_13339-296967.jpg?w=2000"
                alt="Loading Image"
              />
            </div>
            <div className="text-center my-5 ">
                <h1 className="text-2xl text-white font-bold">Michelle White</h1>
                <p className="font-semibold">Bootcamp Training</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
