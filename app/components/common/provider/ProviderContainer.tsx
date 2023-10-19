"use client";

import { store } from "@/app/services/store/store";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

type Props = {
  children: React.ReactNode;
};

const ProviderContainer = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <Toaster position="bottom-right" closeButton richColors />
      <Theme>{children}</Theme>
    </Provider>
  );
};

export default ProviderContainer;
