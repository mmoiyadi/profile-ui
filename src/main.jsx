import React from "react";
import ReactDOM from "react-dom/client";
import Posts, {loader as postLoader} from "./routes/Posts.jsx";
import Strava, {loader as stravaLoader} from "./routes/Strava.jsx";
import Marathon from "./routes/Marathon.jsx";
import "./index.css";
import PostDetails, {loader as postDetailsLoader} from "./routes/PostDetails.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, {action as newPostAction} from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import FitnessLayout from "./routes/FitnessLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts/>,
        loader: postLoader,
        children: [
          { path: "/create-post", element: <NewPost/>, action: newPostAction },
          { path: "/:id", element: <PostDetails/>, loader: postDetailsLoader }
        ],
      }
    ],
  },
  {
    path: "/fitness",
    element: <FitnessLayout />,
    children: [
      {
        path: "strava",
        element: <Strava/>,
        loader: stravaLoader
        // children: [
        //   { path: "/create-post", element: <NewPost/>, action: newPostAction },
        //   { path: "/:id", element: <PostDetails/>, loader: postDetailsLoader }
        // ],
      },
      {
        path: "marathon",
        element: <Marathon/>,
        //loader: marathonLoader
        // children: [
        //   { path: "/create-post", element: <NewPost/>, action: newPostAction },
        //   { path: "/:id", element: <PostDetails/>, loader: postDetailsLoader }
        // ],
      }
    ],
  },
  {
    path: "/reading",
    element: <FitnessLayout />,
    children: [
      {
        path: "strava",
        element: <Strava/>,
        loader: stravaLoader
        // children: [
        //   { path: "/create-post", element: <NewPost/>, action: newPostAction },
        //   { path: "/:id", element: <PostDetails/>, loader: postDetailsLoader }
        // ],
      },
      {
        path: "marathon",
        element: <Marathon/>,
        //loader: marathonLoader
        // children: [
        //   { path: "/create-post", element: <NewPost/>, action: newPostAction },
        //   { path: "/:id", element: <PostDetails/>, loader: postDetailsLoader }
        // ],
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
