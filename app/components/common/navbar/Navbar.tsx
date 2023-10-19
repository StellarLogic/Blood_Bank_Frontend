"use client";

import { logOut } from "@/app/reducers/auth/auth";
import { AppDispatch, useAppSelector } from "@/app/services/store/store";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

type Props = {};

const Navbar = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogOut = () => {
    toast.success("Successfully logged out");
    dispatch(logOut());
  };

  return (
    <ul className="flex justify-end items-center gap-4">
      {navList.map(({ label, id, href, isButton }) => {
        const isActive = pathname === href;

        if (isAuthenticated && label === "Register") return null;

        if (isAuthenticated && label === "Login")
          return (
            <button
              className="px-4 py-2 rounded-md text-sm font-medium bg-red-200 border-2 border-red-200 text-red-500 hover:bg-transparent hover:border-red-500"
              onClick={handleLogOut}
              key={id}
            >
              Log Out
            </button>
          );

        return (
          <Link
            href={href}
            className={classNames("px-4 py-2 rounded-md text-sm font-medium", {
              "bg-red-200 border-2 border-red-200 text-red-500 hover:bg-transparent hover:border-red-500":
                isButton,
              "text-gray-500 ": !isActive && !isButton,
              "text-black": isActive && !isButton,
            })}
            key={id}
          >
            {label}
          </Link>
        );
      })}
    </ul>
  );
};

export default Navbar;

const navList = [
  {
    id: 0,
    label: "Home",
    href: "/",
  },
  {
    id: 1,
    label: "About",
    href: "/about",
  },
  {
    id: 2,
    label: "Contact Us",
    href: "/contact-us",
  },
  {
    id: 3,
    label: "Login",
    href: "/login",
    isButton: true,
  },
  {
    id: 4,
    label: "Register",
    href: "/register",
    isButton: true,
  },
  // {
  //   id: 3,
  //   label: "SUPPORT",
  //   href: "/login",
  //   isButton: true,
  // },
];
