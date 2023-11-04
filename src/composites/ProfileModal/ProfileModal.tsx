import { Modal, Stepper } from "@mantine/core";
import { useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiSolidFlag } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import FamilyForm from "./Steps/FamilyForm/FamilyForm";
import ProfileForm from "./Steps/ProfileForm/ProfileForm";

type Props = {
  opened: boolean;
};

const ProfileModal = ({ opened }: Props) => {
  const [active, setActive] = useState(0);

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

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
      <div className="px-4 py-8 bg-white">
        <Stepper
          active={active}
          onStepClick={setActive}
          completedIcon={<ImProfile />}
        >
          <Stepper.Step
            icon={<ImProfile />}
            label="Step 1"
            description="Create Profile"
          >
            <ProfileForm nextStep={nextStep} />
          </Stepper.Step>
          <Stepper.Step
            icon={<AiOutlineUnorderedList />}
            label="Step 2"
            description="Add Family Members"
          >
            <FamilyForm nextStep={nextStep} />
          </Stepper.Step>
          <Stepper.Step
            icon={<BiSolidFlag />}
            label="Step 3"
            description="Finish"
          >
            Finish
          </Stepper.Step>
        </Stepper>
      </div>
    </Modal>
  );
};

export default ProfileModal;
