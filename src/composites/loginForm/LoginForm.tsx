import { login } from "@/actions/auth/auth";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import { AppDispatch } from "@/services/store";
import { Form, FormikProvider, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { initialValues, validationSchema } from "./constants";

type Prop = {
  successCallBack: () => void;
};

const LoginForm = ({ successCallBack = () => {} }: Prop) => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await dispatch(login(values));
        if (!login.rejected.match(res)) {
          return successCallBack();
        }
      } catch (error) {}
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form className="grid grid-cols-1 gap-4">
        <Input
          placeholder="User Name/Email"
          label="User Name/Email"
          name="userName"
        />
        <Input
          placeholder="Password"
          type="password"
          label="Password"
          name="password"
          intent="primary"
        />
        <div className="text-center">
          <Button type="submit" intent="danger" width="fit">
            LOGIN
          </Button>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
