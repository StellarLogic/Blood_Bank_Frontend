"use client";

import { login } from "@/app/actions/auth/auth";
import { AppDispatch, useAppSelector } from "@/app/services/store/store";
import { TextFieldInput } from "@radix-ui/themes";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(3).label("Password"),
});

const LoginForm = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "atul@gmail.com",
      password: "atul",
    },

    validationSchema: schema,

    onSubmit: async (values) => {
      const res = await dispatch(login(values));
      if (!login.rejected.match(res)) {
        return router.push("/");
      }
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="">
        <TextFieldInput
          placeholder="Enter Email"
          value={values.email}
          onChange={handleChange}
          name="email"
        />
        {errors.email && touched.email && (
          <span className="text-xs text-red-500">{errors.email}</span>
        )}
      </div>
      <div className="">
        <TextFieldInput
          placeholder="Enter Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          name="password"
        />
        {errors.password && touched.password && (
          <span className="text-xs text-red-500">{errors.password}</span>
        )}
      </div>
      <button
        className="py-2 text-sm text-white bg-red-500 rounded-md"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Loading" : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
