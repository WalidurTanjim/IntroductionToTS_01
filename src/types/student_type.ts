// StudentGender
const genders = ["Male", "Female", "Other"] as const;
type StudentGender = typeof genders[number];

// MaritalStatus
const maritalStatus = ["Single", "Married"] as const;
type MaritalStatus = typeof maritalStatus[number];

export type Student = {
    firstName: string;
    lastName: string;
    email: string;
    gender?: StudentGender;
    isMarried?: MaritalStatus;
}