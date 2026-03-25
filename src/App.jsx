import { createBrowserRouter, RouterProvider } from "react-router";
import { Home, LandingLayout } from "./pages";

const routes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
