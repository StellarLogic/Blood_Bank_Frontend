import { getCurrentUserProfile } from "@/app/actions/profile/profile";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../../actions/auth/auth";
import { AppDispatch, useAppSelector } from "../../../services/store/store";
import { tokenManager } from "../../../utils/tokenManager/tokenManager";

type Props = {
  children: React.ReactNode;
};

const AuthCheck = ({ children }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const token = tokenManager.getAccessToken();

    if (token) {
      dispatch(getCurrentUser({ token }));
    }
  }, [dispatch]);

  // useEffect(() => {
  //   if (!isLoading && isAuthenticated) {
  //     dispatch(getCurrentUserProfile({}));
  //   }
  // }, [dispatch, isAuthenticated, isLoading]);

  return <>{children}</>;
};

export default AuthCheck;
