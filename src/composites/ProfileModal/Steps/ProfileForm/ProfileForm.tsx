import { createProfile } from "@/actions/profile/profile";
import { Button, Select, Switch, Text, TextInput } from "@mantine/core";
import { DatePickerInput, DateValue } from "@mantine/dates";
import dayjs from "dayjs";
import { FormikProvider, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { initialValues, validationSchema } from "./constant";
type Props = {
  nextStep: () => void;
};

const ProfileForm = ({ nextStep }: Props) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const action = await dispatch(createProfile(values));

      if (!createProfile.rejected.match(action)) {
        nextStep();
      }
    },
  });

  const { values, errors, dirty, handleChange, setFieldValue } = formik;

  const handleDateChange = (value: DateValue) => {
    const date = dayjs(value).date();
    const month = dayjs(value).month();
    const year = dayjs(value).year();

    setFieldValue("dateOfBirth.date", `${date}`);
    setFieldValue("dateOfBirth.month", `${month}`);
    setFieldValue("dateOfBirth.year", `${year}`);
  };

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
            placeholder="phone"
            name="phone"
            label="Phone Number "
            value={values.phone}
            error={errors.phone}
            onChange={handleChange}
          />
          <DatePickerInput
            placeholder="Date of birth"
            label="Date Of Birth"
            name="date"
            error={
              errors.dateOfBirth?.date ||
              errors.dateOfBirth?.month ||
              errors.dateOfBirth?.year
            }
            onChange={handleDateChange}
          />
          <Select
            label="Gender"
            data={[
              {
                label: "Male",
                value: "Male",
              },
              {
                label: "Female",
                value: "Female",
              },
              {
                label: "Other",
                value: "Other",
              },
            ]}
            placeholder="Gender"
            name="gender"
            value={values.gender}
            error={errors.gender}
            onChange={(value) => setFieldValue("gender", value)}
          />
          <Text size="xl" className="col-span-2">
            Address
          </Text>
          <TextInput
            placeholder="Street"
            label="Street"
            className="col-span-2"
            name="address.street"
            value={values.address.street}
            error={errors.address?.street}
            onChange={handleChange}
          />
          <TextInput
            placeholder="City"
            label="City"
            name="address.city"
            value={values.address.city}
            error={errors.address?.city}
            onChange={handleChange}
          />
          <TextInput
            placeholder="State"
            label="State"
            name="address.state"
            value={values.address.state}
            error={errors.address?.state}
            onChange={handleChange}
          />
          <TextInput
            placeholder="Country"
            label="Country"
            name="address.country"
            value={values.address.country}
            error={errors.address?.country}
            onChange={handleChange}
          />
          <TextInput
            placeholder="PostalCode"
            label="PostalCode"
            name="address.postalCode"
            value={values.address.postalCode}
            error={errors.address?.postalCode}
            onChange={handleChange}
          />
          <Switch
            defaultChecked
            label="Are You Willing Donate Other"
            className="col-span-2"
            name="donorStatus"
            checked={values.donorStatus}
            onChange={handleChange}
          />

          <div className="col-span-2 text-center">
            <Button
              variant="outline"
              type="submit"
              // onClick={nextStep}
              color="violet"
              // disabled={!dirty}
            >
              Next step
            </Button>
          </div>
        </form>
      </FormikProvider>
    </div>
  );
};

export default ProfileForm;
