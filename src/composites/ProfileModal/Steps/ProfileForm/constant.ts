import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  phone: Yup.number().required().label("Phone Number"),
  gender: Yup.string().required().label("Gender"),
  // donorStatus: Yup.boolean().required().label("DonorStatus"),
  address: Yup.object().shape({
    street: Yup.string().required().label("Street"),
    city: Yup.string().required().label("City"),
    state: Yup.string().required().label("State"),
    country: Yup.string().required().label("Country"),
    postalCode: Yup.string().required().label("Postal Code"),
  }),
  dateOfBirth: Yup.object().shape({
    date: Yup.string().required().label("Date"),
    month: Yup.string().required().label("Month"),
    year: Yup.string().required().label("Year"),
  }),
});

export type MyFormValues = {
  phone: string;
  gender: string;
  donorStatus: boolean;
  dateOfBirth: {
    date: string;
    month: string;
    year: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
};

export const initialValues: MyFormValues = {
  phone: "",
  gender: "",
  dateOfBirth: {
    date: "",
    month: "",
    year: "",
  },

  donorStatus: false,
  address: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
};
