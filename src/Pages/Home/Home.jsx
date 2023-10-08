import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import EventCard from "./EventCard/EventCard";
import Pricing from "./Pricing/Pricing";
import Trainer from "./Trainer/Trainer";


const Home = () => {
  const events = useLoaderData();

  return (
    <div className="-mt-16">
      <Banner />
      <EventCard events={events} />
      <Trainer />
      <Pricing />
    </div>
  );
};

export default Home;
