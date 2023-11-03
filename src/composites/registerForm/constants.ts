import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  mobile: Yup.string().required().label("Number"),
  userName: Yup.string().required().label("User name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
  confirmPassword: Yup.string()
    .required()
    .label("Confirm password")
    .oneOf([Yup.ref("password")], "Both Passwords must match"),
});

export const initialValues = {
  userName: "",
  password: "",
  email: "",
  name: "",
  mobile: "",
  confirmPassword: "",
};
