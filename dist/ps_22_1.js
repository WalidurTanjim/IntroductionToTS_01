"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robert = {
    name: "Robert",
    age: 26,
    email: "walidur.tanjim@gmail.com"
};
const sumFunc = (num1, num2) => {
    return num1 + num2;
};
const TUF = {
    id: 1,
    title: "ASUS TUF GAMING A15 FA506N",
    price: 95500
};
const albert = {
    name: "Albert",
    email: "albert@gmail.com"
};
const student = {
    id: 1,
    name: "Albert",
    email: "albert@gmail.com",
};
// ৬. ইন্টারফেস এক্সটেন্ড করা (Extends)
// প্রশ্ন: একটি বেসিক User ইন্টারফেস তৈরি করো এবং Admin ইন্টারফেস তৈরি করে সেটিকে এক্সটেন্ড করো, যেখানে অতিরিক্ত একটি role প্রপার্টি থাকবে।
const roleOptions = ["admin", "moderator", "user", "guest"];
const personInfo = {
    name: "Robert",
    phone: 0
};
// ৮. বেসিক জেনেরিক ফাংশন (Generic Function)
// প্রশ্ন: একটি জেনেরিক ফাংশন তৈরি করো যা যেকোনো ধরনের ইনপুট (T) গ্রহণ করবে এবং হুবহু সেই মানটিই রিটার্ন করবে।
const returnSameValue = (value) => {
    return value;
};
// console.log(returnSameValue<string>("Walid"));
// console.log(returnSameValue<number>(26));
// console.log(returnSameValue<boolean>(true));
// ৯. জেনেরিক অ্যারে ফাংশন
// প্রশ্ন: একটি জেনেরিক ফাংশন লেখো যা যেকোনো ধরনের অ্যারে ইনপুট হিসেবে নেবে এবং ঐ অ্যারের প্রথম উপাদানটি রিটার্ন করবে।
const returnFirstValue = (value) => {
    return value[0];
};
const myApiData = {
    status: "success",
    data: {
        success: "success",
        message: "Data fetched successfully",
    }
};
const myCourse = {
    id: 1,
    name: "Next Level Web Development",
    batch: 8,
    isEnrolled: false
};
const printLength = (value) => {
    return value.length;
};
// console.log(printLength<string[]>(['a', 'b', 'c', 'd']));
// console.log(printLength<number[]>([1, 2, 3, 4, 5]));
// console.log(printLength<boolean[]>([true, false, false]));
// ১৩. সাধারণ এনাম (Enum) তৈরি
// প্রশ্ন: একটি Direction নামের enum তৈরি করো যার মানগুলো হবে Up, Down, Left, Right।
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// ১৪. সংখ্যাসূচক এনাম (Numeric Enum) মান কাস্টমাইজেশন
// প্রশ্ন: একটি StatusCode নামের এনাম তৈরি করো যেখানে প্রথম মানটি 200 থেকে শুরু হবে এবং পরবর্তীগুলো যথাক্রমে 400, 401, 404 হবে।
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
})(StatusCode || (StatusCode = {}));
// console.log(StatusCode.OK);
// console.log(StatusCode.BadRequest);
// ১৫. স্ট্রিং এনাম (String Enum)
// প্রশ্ন: একটি স্ট্রিং এনাম Role তৈরি করো যার মানগুলো হবে স্ট্রিং টাইপের ("ADMIN", "USER", "GUEST")।
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
// console.log(Role.User)
// ১৬. as const দিয়ে অ্যারে লিটারেল ইমিউটেবল করা
// প্রশ্ন: একটি রঙের অ্যারে (colors) ঘোষণা করো এবং as const ব্যবহার করে সেটিকে সম্পূর্ণ রিডওনলি ও লিটারেল টাইপে রূপান্তর করো, যেন পরবর্তীতে এতে নতুন উপাদান যোগ করা না যায়।
const colors = ["red", "green", "yellow"];
// ১৭. as const দিয়ে অবজেক্ট ইমিউটেবল করা
// প্রশ্ন: একটি কনফিগারেশন অবজেক্ট তৈরি করো এবং as const ব্যবহার করে এর প্রপার্টিগুলোর মান লক বা অপরিবর্তনীয় করে দাও।
const configuration = {
    name: "WalidurTanjim",
    age: 26,
    isAdult: true
};
const getUserIdentity = (obj, param) => {
    return obj[param];
};
console.log(getUserIdentity({ name: "WalidurTanjim", email: "walidur@gmail.com" }, "name"));
console.log(getUserIdentity({ name: "ASUS TUF Gaming A15", price: 95500 }, "price"));
