"use client";

import { AppDispatch, useAppSelector } from "@/app/services/store/store";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Calendar from "../common/calendar/Calendar";
import Select from "../common/select/Select";
import { CITIES, STATES } from "./constants";

const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(3).label("Password"),
});

type Props = {};

const ProfileForm = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      number: "",
      date: "",
      gender: "",
      donorStatus: false,
      address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
    },

    validationSchema: schema,

    onSubmit: async (values) => {},
  });

  const handleDateChange = (value: string) => {
    setFieldValue("date", value);
  };

  const handleDonorStatusChange = (value: boolean) => {
    setFieldValue("donorStatus", value);
  };

  const handleChangeState = (value: string) => {
    setFieldValue("address.city", "");
    setFieldValue("address.state", value);
  };

  const handleChangeCity = (value: string) => {
    setFieldValue("address.city", value);
  };
  const { errors, touched, values, setFieldValue, handleChange, handleSubmit } =
    formik;
  console.log("🚀 ~ file: ProfileForm.tsx:44 ~ ProfileForm ~ values:", values);

  if (!mounted) return <div>Loading</div>;

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Enter Phone Number"
          value={values.number}
          name="number"
          onChange={handleChange}
        />
        <Select
          placeholder="Gender"
          name="gender"
          value={values.gender}
          handleChange={handleChange}
          options={[
            { value: "male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "other", label: "Other" },
          ]}
        />
        <Calendar value={values.date} onChange={handleDateChange} />
        <div className="flex items-center justify-between border rounded-m">
          <label className="flex items-center justify-between flex-1 px-3 text-sm ">
            <span className="">Donor Status</span>
            <Switch
              checked={values.donorStatus}
              name="donorStatus"
              onCheckedChange={handleDonorStatusChange}
            />
          </label>
        </div>
        <p className="col-span-2 text-ms">Address</p>
        <div className="col-span-2">
          <Input
            placeholder="Enter Street"
            value={values.address.street}
            name="address.street"
            onChange={handleChange}
          />
        </div>

        <Select
          placeholder="Enter State"
          name="address.state"
          value={values.address.state}
          handleChange={handleChangeState}
          options={STATES}
        />
        {CITIES[values.address.state] && (
          <Select
            placeholder="Enter City"
            name="address.city"
            value={values.address.city}
            handleChange={handleChangeCity}
            options={CITIES[values.address.state]}
          />
        )}
        <Select
          placeholder="Enter Country"
          name="address.country"
          value={values.address.country}
          handleChange={handleChangeCity}
          options={[{ label: "India", value: "India" }]}
        />
        <Input
          placeholder="Enter Postal Code"
          value={values.address.postalCode}
          name="address.postalCode"
          onChange={handleChange}
          type="number"
        />
      </form>
    </div>
  );
};

export default ProfileForm;
