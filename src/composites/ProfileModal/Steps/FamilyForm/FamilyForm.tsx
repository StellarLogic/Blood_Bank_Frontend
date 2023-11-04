import Button from "@/components/button/Button";
import { Select, Text, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { FormikProvider, useFormik } from "formik";
import { initialValues } from "./constant";

type Props = {
  nextStep: () => void;
};

const FamilyForm = ({ nextStep }: Props) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(
        "🚀 ~ file: ProfileModal.tsx:24 ~ ProfileModal ~ values:",
        values
      );
    },
  });

  return (
    <div className="py-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-primary-500">
          Let's update your profile...
        </h3>
        <Text size="xl" className="col-span-2">
          Because employers love and prefer good completed profiles
        </Text>
      </div>
      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-2 gap-4 py-3"
        >
          <TextInput
            placeholder="First Name"
            name="firstName"
            label="First Name"
          />
          <TextInput
            placeholder="Last Name"
            name="lastName"
            label="Last Name"
          />

          <Select
            label="Blood Group"
            data={[
              {
                label: "Male",
                value: "male",
              },
              {
                label: "Female",
                value: "female",
              },
              {
                label: "Other",
                value: "other",
              },
            ]}
            placeholder="Gender"
            name="gender"
          />
          <Select
            label="Relation"
            data={[
              {
                label: "Male",
                value: "male",
              },
              {
                label: "Female",
                value: "female",
              },
              {
                label: "Other",
                value: "other",
              },
            ]}
            placeholder="Gender"
            name="gender"
          />
          <Select
            label="Medical History"
            data={[
              {
                label: "Male",
                value: "male",
              },
              {
                label: "Female",
                value: "female",
              },
              {
                label: "Other",
                value: "other",
              },
            ]}
            placeholder="Gender"
            name="gender"
          />
          <DatePickerInput placeholder="Date of birth" label="Date Of Birth" />

          <Text size="xl" className="col-span-2">
            Contact Info
          </Text>
          <TextInput placeholder="Email" label="Email" name="email" />
          <TextInput placeholder="Phone" label="Phone" name="phone" />

          <div className="col-span-2 text-center">
            <Button type="submit" onClick={nextStep}>
              Next step
            </Button>
          </div>
        </form>
      </FormikProvider>
    </div>
  );
};

export default FamilyForm;
