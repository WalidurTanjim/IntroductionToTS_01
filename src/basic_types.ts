import type {Student} from "./types/student_type";
import type {Employee} from "./types/employee_interface";

// type
const robin: Student = {
    firstName: "MD.",
    lastName: "Robin",
    email: "md.robin@gmail.com",
    gender: "Male",
    isMarried: "Single"
}

// interface
const employee_01: Employee = {
    id: 1,
    name: "Walidur Tanjim",
    email: "walidur.tanjim@gmail.com",
    gender: "Male",
    isMarried: "Single",
    salary: 75000
}

const employee_02: Employee = {
    id: 2,
    name: "MD Walidur",
    email: "md.walidur@gmail.com",
    gender: "Male",
    isMarried: "Single",
    salary: 70000
}

const team: Employee[] = [
    employee_01, employee_02
]