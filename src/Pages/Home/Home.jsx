import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import EventCard from "./EventCard/EventCard";
import Pricing from "./Pricing/Pricing";


const Home = () => {
  const events = useLoaderData();

  return (
    <div>
      <Banner />
      <EventCard events={events} />
      <Pricing />
    </div>
  );
};

export default Home;
