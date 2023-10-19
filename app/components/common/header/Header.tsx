import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className="flex justify-between py-2 items-center ">
      <Link href="/">
        <Image src="../logo.svg" alt="Logo" width={50} height={50} />
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
