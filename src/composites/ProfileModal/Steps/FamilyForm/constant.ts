export type MyFormValues = {
  firstName: string;
  lastName: string;
  relationship: string;
  bloodType: string;
  medicalHistory: string;
  contactInfo: {
    email: string;
    phone: string;
  };
  dateOfBirth: {
    date: string;
    month: string;
    year: string;
  };
};

export const initialValues: MyFormValues = {
  firstName: "",
  lastName: "+918130519266",
  relationship: "",
  bloodType: "",
  medicalHistory: "",
  contactInfo: {
    email: "",
    phone: "",
  },
  dateOfBirth: {
    date: "",
    month: "",
    year: "",
  },
};
