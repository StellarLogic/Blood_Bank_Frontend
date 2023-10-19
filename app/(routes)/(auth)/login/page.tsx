import Container from "@/app/components/common/container/Container";
import LoginForm from "@/app/composites/loginForm/LoginForm";

import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Container>
      <div className="flex flex-col gap-4 h-[90vh] items-stretch justify-center w-1/3 mx-auto">
        <h2 className="text-lg font-bold">Login</h2>
        <LoginForm />
      </div>
    </Container>
  );
};

export default page;
