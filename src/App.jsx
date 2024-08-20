import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import EventDetails from "./pages/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "event/:id",
    element: <EventDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
