// EMPLOYEE_GENDER_OPTIONS
const employee_genders = ["Male", "Female"] as const;
type EMPLOYEE_GENDER_OPTIONS = typeof employee_genders[number];

// EMPLOYEE_MARITAL_STATUS_OPTIONS
const employee_marital_status = ["Single", "Married"] as const;
type EMPLOYEE_MARITAL_STATUS_OPTIONS = typeof employee_marital_status[number];

export interface Employee {
    id: number;
    name: string;
    email: string;
    gender: EMPLOYEE_GENDER_OPTIONS;
    isMarried: EMPLOYEE_MARITAL_STATUS_OPTIONS;
    salary: number;
}