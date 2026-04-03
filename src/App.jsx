import { createBrowserRouter, RouterProvider } from "react-router";
import {
  About,
  Home,
  HowWeWork,
  LandingLayout,
  Learn,
  PrivacyPolicy,
  Product,
  ServiceDetails,
  Services,
} from "./pages";

const routes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:slug",
        element: <ServiceDetails />,
      },
      {
        path: "/how-we-work",
        element: <HowWeWork />,
      },
      {
        path: "/learn",
        element: <Learn />,
      },
      {
        path: "/produce",
        element: <Product />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
