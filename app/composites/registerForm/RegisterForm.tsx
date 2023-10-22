"use client";

import { register } from "@/app/actions/auth/auth";
import { AppDispatch, useAppSelector } from "@/app/services/store/store";
import { TextFieldInput } from "@radix-ui/themes";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  username: Yup.string().required().label("User Name"),
  password: Yup.string().required().min(3).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .label("Confirm Password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
const RegisterForm = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: schema,

    onSubmit: async (values) => {
      const { confirmPassword, ...payload } = values;
      const res = await dispatch(register(payload));
      if (!register.rejected.match(res)) {
        return router.push("/");
      }
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <div className="">
        <TextFieldInput
          placeholder="Enter First Name"
          value={values.firstName}
          onChange={handleChange}
          name="firstName"
        />
        {errors.firstName && touched.firstName && (
          <span className="text-xs text-red-500">{errors.firstName}</span>
        )}
      </div>
      <div className="">
        <TextFieldInput
          placeholder="Enter Last Name"
          value={values.lastName}
          onChange={handleChange}
          name="lastName"
        />
        {errors.lastName && touched.lastName && (
          <span className="text-xs text-red-500">{errors.lastName}</span>
        )}
      </div>
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
          placeholder="Enter Username"
          type="username"
          value={values.username}
          onChange={handleChange}
          name="username"
        />
        {errors.username && touched.username && (
          <span className="text-xs text-red-500">{errors.username}</span>
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
      <div className="">
        <TextFieldInput
          placeholder="Confirm Password"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <span className="text-xs text-red-500">{errors.confirmPassword}</span>
        )}
      </div>
      <button
        className="text-white bg-red-500 py-2 text-sm rounded-md col-span-2"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Loading" : "Login"}
      </button>
    </form>
  );
};

export default RegisterForm;
