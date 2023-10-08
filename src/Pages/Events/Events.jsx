import { Link, useLoaderData } from "react-router-dom";
import { BiDotsHorizontal } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Events = () => {
  const events = useLoaderData();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full -mt-16">
      <div
        style={{
          backgroundImage: "url('../assets/bg.png')",
        }}
        className="h-[40vh] bg-cover bg-no-repeat bg-center"
      >
        <h1 className="text-3xl pt-[20vh] text-white font-bold text-center uppercase">
          Our Events
        </h1>
      </div>
      <div className="max-w-7xl mx-auto py-5 md:py-10">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 max-w-7xl mx-auto px-10">
          {events.map((event) => (
            <div data-aos="fade-up" key={event.id}>
              <div className="rounded-lg hover:shadow-md bg-[#f5f5f5] relative">
                <div className="">
                  <img
                    className="rounded-t-lg h-60 w-full object-cover"
                    src={event.image}
                    alt="Loading image"
                  />
                </div>

                <div className="p-5 bg-[#f5f5f5] rounded-b-lg">
                  <div className="flex gap-3 justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={event.trainer_img}
                        alt="Loading image"
                      />
                      <div>
                        <p className="text-[#818181] font-semibold text-lg">
                          Trainer
                        </p>
                        <p className="text-[#818181] ">{event.trainer}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#818181]">Entry Fee</p>
                      <p className="text-[#7cb908] text-lg font-semibold">
                        ${event.price}
                      </p>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#7cb908]">
                      {event?.title}
                    </h5>
                    <p className="mb-3 font-normal text-justify text-[#818181]">
                      {event?.description.length > 200 ? (
                        <span>
                          {event.description.slice(0, 70)}{" "}
                          <BiDotsHorizontal className="inline text-lg" />
                        </span>
                      ) : (
                        event.description
                      )}
                    </p>
                    <Link
                      to={`/event/${event?.id}`}
                      className="font-semibold text-lg hover:text-[#61861c] text-[#7cb908]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
