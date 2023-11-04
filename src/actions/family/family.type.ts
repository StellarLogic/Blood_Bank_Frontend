import { ContactInfo, DateOfBirth } from "../profile/profile.type";

export interface FamilyPayload {
  firstName: string;
  lastName: string;
  relationship: string;
  bloodType: string;
  contactInfo: ContactInfo;
  medicalHistory: string;
  dateOfBirth: DateOfBirth;
}

export interface FamilyResponse {
  firstName: string;
  lastName: string;
  user: string;
  relationship: string;
  bloodType: string;
  medicalHistory: string;
  contactInfo: ContactInfo;
  dateOfBirth: DateOfBirth;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export type FamilyListResponse = FamilyResponse[];
