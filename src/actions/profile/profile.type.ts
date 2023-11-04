export interface ProfileResponse {
  user: User;
  family: Family[];
  phone: string;
  dateOfBirth: DateOfBirth;
  donorStatus: boolean;
  address: Address;
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
  contactInfo: ContactInfo;
  dateOfBirth: DateOfBirth;
  _id: string;
  firstName: string;
  lastName: string;
  user: string;
  relationship: string;
  bloodType: string;
  medicalHistory: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  id: string;
}

export interface ProfilePayload {
  phone: string;
  dateOfBirth: DateOfBirthPayload;
  gender: string;
  donorStatus: boolean;
  address: AddressPayload;
}

export interface DateOfBirthPayload {
  date: string;
  month: string;
  year: string;
}
export interface AddressPayload {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
