import React from "react";

const PostAuthLayout = React.lazy(() => import("./layout/PostAuthLayout"));
const PreAuthLayout = React.lazy(() => import("./layout/PreAuthLayout"));
const Login = React.lazy(() => import("./pages/login/Login"));
const Register = React.lazy(() => import("./pages/register/Register"));
const Home = React.lazy(() => import("./pages/home/Home"));
const Company = React.lazy(() => import("./pages/company/Company"));
const Reviews = React.lazy(() => import("./pages/reviews/Reviews"));

export {
  Company,
  Home,
  Login,
  PostAuthLayout,
  PreAuthLayout,
  Register,
  Reviews,
};
