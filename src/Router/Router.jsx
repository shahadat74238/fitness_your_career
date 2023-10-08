import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Events from "../Pages/Events/Events";
import AboutUs from "../Pages/AboutUs/AboutUs";
import EventDetails from "../Pages/EventDetails/EventDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../gym_data.json"),
      },
      {
        path: "/events",
        element: <Events />,
        loader: () => fetch("../gym_data.json"),
      },
      {
        path: "/event/:eventId",
        element: (
          <PrivetRoute>
            <EventDetails />
          </PrivetRoute>
        ),
        loader: () => fetch("../gym_data.json"),
      },
      {
        path: "/blog",
        element: (
          <PrivetRoute>
            <Blog />
          </PrivetRoute>
        ),
        loader: () => fetch("../blog.json"),
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
