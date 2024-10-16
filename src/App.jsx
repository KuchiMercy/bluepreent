
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import { AppProvider } from "./context/useContext";
import LandingPage from "./pages/LandingPage";
import Layout from "./layout/Layout";
import FindMentors from "./pages/FindMentors";
import AboutMentor from "./pages/AboutMentor";
import MentorSignup from "./pages/Signup/MentorSignup";
import MentorLogin from "./pages/Login/MentorLogin";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import GuardianLogin from "./pages/Login/GuardianLogin";
import GuardianSignup from "./pages/Signup/GuardianSignup";
import MentorDashboardLayout from "./layout/MentorDashboardLayout";
import Home from "./pages/Dashboard/Mentor/Home";
import Wards from "./pages/Dashboard/Mentor/Wards";
import Requests from "./pages/Dashboard/Mentor/Requests";
import Settings from "./pages/Dashboard/Mentor/Settings";
import GuardianDashboardLayout from "./layout/GuardianDashboardLayout";
import Homepage from "./pages/Dashboard/Guardian/Homepage";
import Wardspage from "./pages/Dashboard/Guardian/Wardspage";
import Mentorspage from "./pages/Dashboard/Guardian/Mentorspage";
import Settingspage from "./pages/Dashboard/Guardian/Settingspage";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <ScrollRestoration />

        <Outlet />
      </Layout>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "find-mentor",
        element: <FindMentors />,
      },
      {
        path: "mentor/:id",
        element: <AboutMentor />,
      },
    ],
  },
  {
    path: "/signup-mentor",
    element: <MentorSignup />,
  },
  {
    path: "/login-mentor",
    element: <MentorLogin />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/login-guardian",
    element: <GuardianLogin />,
  },
  {
    path: "/signup-guardian",
    element: <GuardianSignup />,
  },
  {
    path: "/guardian-dashboard",
    element: (
      <PrivateRoute>
        <GuardianDashboardLayout>
          <ScrollRestoration />
          <Outlet />
        </GuardianDashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "wards", element: <Wardspage /> },
      { path: "mentors", element: <Mentorspage /> },
      { path: "settings", element: <Settingspage /> },
    ],
  },
  {
    path: "/mentor-dashboard",
    element: (
      <PrivateRoute>
        <MentorDashboardLayout>
          <ScrollRestoration />
          <Outlet />
        </MentorDashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "wards", element: <Wards /> },
      { path: "requests", element: <Requests /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);
function App() {
  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
}

export default App;
