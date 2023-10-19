import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../../actions/auth/auth";
import { AppDispatch, useAppSelector } from "../../../services/store/store";
import { tokenManager } from "../../../utils/tokenManager/tokenManager";

type Props = {};

const AuthCheck = ({}: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = tokenManager.getAccessToken();

    if (token) {
      dispatch(getCurrentUser({ token }));
    }
  }, [dispatch]);
  return <></>;
};

export default AuthCheck;
