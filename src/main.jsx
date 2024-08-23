import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Search from "./Components/Search/Search.jsx";
import Explore from "./Components/Explore/Explore.jsx";
import Reels from "./Components/Reels/Reels.jsx";
import Message from "./Components/Messages/Messages.jsx";
import Notification from "./Components/Notifications/Notifications.jsx";
import Create from "./Components/Create/Create.jsx";
import Profile from "./Components/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "reels",
        element: <Reels />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "profile",
        element: <Profile />,
      }, 
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
