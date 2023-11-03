import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import { Modal, ModalBaseBody } from "@mantine/core";
import { FormikProvider, useFormik } from "formik";
import React from "react";
import { ImProfile } from "react-icons/im";

type Props = {
  opened: boolean;
};

const ProfileModal = ({ opened }: Props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
  });

  return (
    <Modal
      opened={opened}
      centered
      onClose={() => {}}
      closeOnEscape={false}
      withCloseButton={false}
      classNames={{
        body: "p-0",
      }}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      size={"xl"}
    >
      <div className="px-4 py-8 bg-primary-200">
        <div className="text-center">
          <ImProfile size={80} className="mx-auto mb-4 text-primary-500" />
          <h3 className="text-2xl font-bold text-primary-500">
            Let's update your profile...
          </h3>
          <p>Because employers love and prefer good completed profiles</p>
        </div>

        <FormikProvider value={formik}>
          <div className="grid grid-cols-2 gap-4 py-3">
            <Input placeholder="Email" label="Email" name="email" />
            <Input placeholder="Email" label="Email" name="email" />
            <Input placeholder="Email" label="Email" name="email" />
            <Input placeholder="Email" label="Email" name="email" />
            <Input placeholder="Email" label="Email" name="email" />
            <Input placeholder="Email" label="Email" name="email" />
            <div className="col-span-2 text-center">
              <Button>Submit</Button>
            </div>
          </div>
        </FormikProvider>
      </div>
    </Modal>
  );
};

export default ProfileModal;
