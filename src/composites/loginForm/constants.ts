import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().label("Password"),
});

export const initialValues = {
  // userName: "",
  // password: "",
  email: "ankit@gmail.com",
  password: "ankit",
};
