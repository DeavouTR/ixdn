import { createBrowserRouter } from "react-router-dom";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Layout from "../components/layout";
import Dashboard from "../components/dashboard";
import Comments from "../components/comments";
import Profile from "../components/profile";
import Users from "../components/users";
import Home from "../components/dashboard/dash";
import Idcard from "../components/profile/idindex"
import Idcardf from "../components/profile/ixdcard"
export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";
export const HOME = "/protected/dashboard/dash";
export const IDCARD = "/protected/profile/idindex";
export const IDCARDF = "/protected/profile/ixdcard";
export const router = createBrowserRouter([
  { path: ROOT, element: <Login />},
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },

      {
        path: HOME,
        element: <Home/>,
      },
      {
        path: USERS,
        element: <Users />,
      },
      {
        path: PROFILE,
        element: <Profile />,
      },
      {
        path: COMMENTS,
        element: <Comments />,
      },
      {
        path: IDCARD,
        element: <Idcard />,
      },
   
    {
      path: IDCARDF,
      element: <Idcardf />,
    },
  ],
  },
]);
