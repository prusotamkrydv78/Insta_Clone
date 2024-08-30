import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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
import Threads from "./Components/Threads/Threads.jsx";
import More from "./Components/More/More.jsx";

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
        path: "explore",
        element: <Explore />,
      },
      {
        path: "reels",
        element: <Reels />,
      },
      {
        path: "messages",
        element: <Message />,
      },
      {
        path: "notifications",
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
      {
        path: "threads",
        element: <Threads />,
      },
      {
        path: "more",
        element: <More />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
