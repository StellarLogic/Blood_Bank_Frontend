import { getUserProfile } from "@/actions/auth/auth";
import Header from "@/composites/header/Header";
import { AppDispatch } from "@/services/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const PreAuthLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const prepareState = async () => {
      const token = await localStorage.getItem("token");
      if (token) {
        await dispatch(getUserProfile(token));
      }
    };

    prepareState();
  }, [dispatch]);

  return (
    <div>
      <Header />
      {/* <div className="sticky top-0 z-10 bg-transparent">
      </div> */}
      <div className="top-0">
        <Outlet />
      </div>
    </div>
  );
};

export default PreAuthLayout;
