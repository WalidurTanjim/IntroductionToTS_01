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
const myNewUser = {
    name: "Robert",
    address: "Dhaka"
};
// ২. একটি জেনেরিক ফাংশন লেখো যা ইনপুট হিসেবে যেকোনো ধরনের অবজেক্ট এবং একটি চাবি (key) গ্রহণ করবে, কিন্তু চাবিটি যদি অবজেক্টের ভেতর না থাকে তবে টাইপ স্ক্রিপ্ট যেন কম্পাইল টাইমেই এরর দেয়।
const existingKey = (obj, param) => {
    return obj[param];
};
// console.log(existingKey({ name: "AA", age: 5}, "name"));
// console.log(existingKey({ quantity: 5, price: 150}, "name"));
// ৩. এমন একটি কাস্টম টাইপ বা ইন্টারফেস বানাও যা একই সাথে একটি সাধারণ অবজেক্ট এবং একটি ফাংশন উভয় হিসেবেই কাজ করতে পারবে (callable object)।
// ৪. একটি readonly টিউপল (Tuple) তৈরি করো যেখানে প্রথম উপাদানটি হবে স্ট্রিং (নাম) এবং দ্বিতীয় উপাদানটি হবে নাম্বার (বয়স), এবং as const ব্যবহার করে সেটিকে সম্পূর্ণ ইমিউটেবল করে দেখাও।
const readonlyTuple = ["WalidurTanjim", 26];
const myNewEmployee = {
    name: "Robert",
    email: "robert@gamil.com",
    salary: 75000,
    phone: 500
};
// ৬. একটি জেনেরিক ইন্টারফেস তৈরি করো যার ভেতরে একটি ডেটা প্রপার্টি থাকবে, এবং সেই ডেটার টাইপটি ডিফল্টভাবে একটি অ্যারে (T[]) হিসেবে সেট করা থাকবে যদি না অন্য কিছু পাস করা হয়।
// ৭. এমন একটি এনাম (Enum) এবং একটি ফাংশন তৈরি করো যেখানে ফাংশনটি শুধুমাত্র ওই এনামের নির্দিষ্ট কিছু মান আর্গুমেন্ট হিসেবে গ্রহণ করবে, সব মান নয়।
var CRUD;
(function (CRUD) {
    CRUD["Create"] = "CREATE";
    CRUD["Read"] = "READ";
    CRUD["Update"] = "UPDATE";
    CRUD["Delete"] = "DELETE";
})(CRUD || (CRUD = {}));
const specificEnumProperty = (role) => {
    return role;
};
// const myUserAge: CombineAge = {
//     isMarried: false,
//     isStudent: true,
//     age: 26
// }
// ৯. একটি ফাংশন লিখুন যা ইনপুট হিসেবে স্ট্রিং অথবা নাম্বার নিতে পারে (Union Type), কিন্তু ফাংশনের ভেতর টাইপ গার্ড (Type Guard) ব্যবহার করে নিশ্চিত করতে হবে যে ইনপুট স্ট্রিং হলে তার লেন্থ এবং নাম্বার হলে তার স্কয়ার রিটার্ন করবে।
const returnTypeGuard = (value) => {
    if (typeof value === "number") {
        return value * 2;
    }
    if (typeof value === "string") {
        return value.length;
    }
    return 'Please enter a string or number';
};
// console.log(returnTypeGuard("name"))
// console.log(returnTypeGuard(5))
// ১০. একটি অবজেক্ট লিটারেল তৈরি করে সেটিতে as const প্রয়োগ করার পর, তার ভেতরের একটি নেস্টেড প্রপার্টির টাইপ এক্সট্র্যাক্ট করার জন্য typeof এবং জেনেরিক লুকআপ টাইপ কীভাবে ব্যবহার করতে হবে তা প্রবলেম আকারে সমাধান করো।
const appConfig = {
    appName: "TypeScript Learning",
    version: 1.0,
    dbConfig: {
        host: "localhost",
        port: 5432,
        isSecure: true
    }
};
const myNewConfig = {
    host: "localhost",
    port: 5432,
    isSecure: true
};
