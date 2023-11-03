import { getUserProfile } from "@/actions/auth/auth";
import Header from "@/composites/header/Header";
import { AppDispatch } from "@/services/store";
import { tokenManager } from "@/utils/tokenManager";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const PreAuthLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const prepareState = async () => {
      const { accessToken } = tokenManager.getTokens();
      if (accessToken) {
        await dispatch(getUserProfile(accessToken));
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
