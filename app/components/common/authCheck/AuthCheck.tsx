import { getCurrentUserProfile } from "@/app/actions/profile/profile";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../../actions/auth/auth";
import { AppDispatch, useAppSelector } from "../../../services/store/store";
import { tokenManager } from "../../../utils/tokenManager/tokenManager";
import ProfileModel from "../../profileModal/ProfileModel";

type Props = {
  children: React.ReactNode;
};

const AuthCheck = ({ children }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isAuthenticated, user } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const token = tokenManager.getAccessToken();

    if (token) {
      dispatch(getCurrentUser({ token }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && isAuthenticated && user) {
      dispatch(getCurrentUserProfile({}));
    }
  }, [dispatch, isAuthenticated, isLoading, user]);

  return (
    <>
      <ProfileModel />
      {children}
    </>
  );
};

export default AuthCheck;
