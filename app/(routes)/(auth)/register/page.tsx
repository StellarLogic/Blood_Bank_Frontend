import Container from "@/app/components/common/container/Container";
import RegisterForm from "@/app/composites/registerForm/RegisterForm";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Container>
      <div className="flex flex-col gap-4 h-[90vh] items-stretch justify-center w-1/2 mx-auto">
        <h2 className="text-lg font-bold">Register</h2>
        <RegisterForm />
      </div>
    </Container>
  );
};

export default page;
