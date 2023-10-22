export interface ProfileResponse {
  user: string;
  phone: string;
  dateOfBirth: DateOfBirth;
  donorStatus: boolean;
  address: Address;
  family: Family[];
  _id: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface DateOfBirth {
  date: string;
  month: string;
  year: string;
}

export interface Family {
  firstName: string;
  lastName: string;
  relationship: string;
  bloodType: string;
  contactInfo: ContactInfo;
  medicalHistory: string;
  dateOfBirth: DateOfBirth;
  _id: string;
  id: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}
