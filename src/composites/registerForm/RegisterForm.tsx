import { register } from "@/actions/auth/auth";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import { Form, FormikProvider, useFormik } from "formik";
import { initialValues, validationSchema } from "./constants";

type Prop = {
  successCallBack: () => void;
};

const RegisterForm = ({ successCallBack }: Prop) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { confirmPassword, ...rest } = values;
        const res = await register(rest);
        formik.setSubmitting(false);
        if (!res.error) {
          return successCallBack();
        }
      } catch (error) {}
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form className="grid grid-cols-2 gap-4">
        <Input placeholder="Name" label="Name" name="name" intent="primary" />
        <Input placeholder="Phone Number" label="Mobile" name="mobile" />
        <Input placeholder="User Name" label="User Name" name="userName" />
        <Input placeholder="Email" label="Email" name="email" />

        <div className="col-span-2">
          <Input
            placeholder="Password"
            type="password"
            label="Password"
            name="password"
            intent="primary"
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Confirm Password"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            intent="primary"
          />
        </div>
        <div className="col-span-2 text-center">
          <Button type="submit" intent="danger" width="fit">
            {formik.isSubmitting ? "Loading" : "SIGN UP"}
          </Button>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default RegisterForm;
