import { useAppSelector } from "@/app/services/store/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
// const ProfileForm = dynamic(() => import("./ProfileForm"), { ssr: false });

type Props = {};

const ProfileModel = (props: Props) => {
  const { profile } = useAppSelector((state) => state.profile);

  return (
    <Dialog open={!profile} modal={true}>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>Create Profile</DialogTitle>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModel;
