import { useState, useEffect } from "react";
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
  Errorpage,
  ContactUs,
  LearnDetails,
  EquiptmentListing,
  EquiptmentListingDetails,
  Jobs,
  JobDetails,
  AdminLayout,
  AdminDashboard,
  AdminSetting,
  AdminActivity,
  AdminEquipment,
  AdminEditEquipment,
  AdminJobManagement,
  AdminUserManagement,
  AdminAddEquipment,
  AdminPostJob,
  AdminEditJob,
  AdminManageArticle,
  AdminEditArticle,
  AdminPostArticle,
  AdminLogin,
} from "./pages";
import { ProtectedRoute } from "./components";
const routes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/services/:slug", element: <ServiceDetails /> },
      { path: "/how-we-work", element: <HowWeWork /> },
      { path: "/learn", element: <Learn /> },
      { path: "/learn/:id", element: <LearnDetails /> },
      { path: "/produce", element: <Product /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/equipment-listing", element: <EquiptmentListing /> },
      {
        path: "/equipment-listing-details/:id",
        element: <EquiptmentListingDetails />,
      },
      { path: "/job-listing", element: <Jobs /> },
      { path: "/job-listing-details/:id", element: <JobDetails /> },
    ],
  },

  // Admin login — public, no guard
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },

  // Admin routes — protected
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "manage-equipment", element: <AdminEquipment /> },
          { path: "add-equipment", element: <AdminAddEquipment /> },
          { path: "edit-equipment/:name", element: <AdminEditEquipment /> },
          { path: "manage-jobs", element: <AdminJobManagement /> },
          { path: "add-job", element: <AdminPostJob /> },
          { path: "edit-job/:id", element: <AdminEditJob /> },
          { path: "manage-users", element: <AdminUserManagement /> },
          { path: "manage-articles", element: <AdminManageArticle /> },
          { path: "add-article", element: <AdminPostArticle /> },
          { path: "edit-article/:id", element: <AdminEditArticle /> },
          { path: "settings", element: <AdminSetting /> },
          { path: "activity", element: <AdminActivity /> },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <Errorpage />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="border-t-4 border-b-4 rounded-full animate-spin h-14 w-14 border-bg-btn-primary"></div>
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;
