import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RightSideNav from "./RightSideNav/RightSideNav";

const EventDetails = () => {
  const events = useLoaderData();
  const [event, setEvent] = useState({});
  const { eventId } = useParams();

  useEffect(() => {
    const findEvent = events.find((event) => event.id == eventId);
    setEvent(findEvent);
  }, [events, eventId]);

  return (
    <div>
      <div className="max-w-7xl mx-auto gap-10 px-10 my-20 rounded-lg grid md:grid-cols-6 grid-cols-1">
        <div className="md:col-span-4">
          <div>
            <h1 className="text-2xl mb-2 md:text-3xl font-bold ">
              {event.title}
            </h1>
            <h2 className="text-xl font-semibold mb-8">
              SPECIAL FOR THE YOUNG GENERATION THIS EVENT
            </h2>
            <img className=" w-full" src={event.image} alt="Loading Image" />
          </div>
          <div className="my-5 md:my-10">
            <h1 className="text-2xl font-bold">
              A SHORT DESCRIPTION ABOUT THE EVENT SUMMERY.
            </h1>
            <p className="text--[#818181] mt-4 text-justify ">
              {event.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
            <div>
              <h1 className="text-2xl font-semibold">EVENT CONTENT</h1>
              <div className="my-5">
              <li className="font-semibold text-lg">Health screenings</li>
              <li className="font-semibold text-lg">Healthy food vendors</li>
              <li className="font-semibold text-lg">Family-friendly workouts</li>
              <li className="font-semibold text-lg">Yoga for relaxation</li>
              <li className="font-semibold text-lg">Nutrition workshops</li>
              </div>
            </div>
            <div className="md:ml-20">
              <h1 className="text-2xl font-bold mb-5">TRAINER</h1>
              <img className="w-full h-56 object-cover" src={event.trainer_img} alt="Loading image" />
              <h2 className="text-lg font-semibold mt-3">Name: {event.trainer}</h2>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
