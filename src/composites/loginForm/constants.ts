import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  userName: Yup.string().required().label("User Name"),
  password: Yup.string().required().label("Password"),
});

export const initialValues = {
  // userName: "",
  // password: "",
  userName: "Ankit",
  password: "Password@1234",
};
