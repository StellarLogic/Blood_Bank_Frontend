import { getCurrentUser } from "@/actions/auth/auth";
import { getProfile } from "@/actions/profile/profile";
import Header from "@/composites/header/Header";
import { AppDispatch, useAppSelector } from "@/services/store";
import { tokenManager } from "@/utils/tokenManager";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const PreAuthLayout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const prepareState = async () => {
      const { accessToken, refreshToken } = tokenManager.getTokens();
      if (accessToken && refreshToken) {
        await dispatch(getCurrentUser({ accessToken, refreshToken }));
        await dispatch(getProfile());
      }
    };

    prepareState();
  }, [dispatch]);

  useEffect(() => {
    const prepareState = async () => {
      if (!isLoading && isAuthenticated) {
        await dispatch(getProfile());
      }
    };

    prepareState();
  }, [dispatch, isLoading, isAuthenticated]);

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
