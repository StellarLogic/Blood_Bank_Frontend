import {
  Company,
  Home,
  Login,
  PostAuthLayout,
  PreAuthLayout,
  Register,
  Reviews,
} from "@/views";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    index: true,
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <PreAuthLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/company/:companyId/:tabId",
        element: <Company />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
    ],
  },
  {
    path: "/",
    element: <PostAuthLayout />,
    children: [
      {
        path: "/home",
        element: (
          //   <ProtectedRoute>
          <Home />
          //   </ProtectedRoute>
        ),
      },
      {
        path: "/home",
        element: (
          //   <ProtectedRoute>
          <Home />
          //   </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
