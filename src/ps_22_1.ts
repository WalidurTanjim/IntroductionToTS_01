// ১. টাইপ অ্যালিয়াস (Type Alias) তৈরি
// প্রশ্ন: একটি ইউজারের জন্য একটি টাইপ অ্যালিয়াস (Type Alias) তৈরি করো যার ভেতর name (স্ট্রিং), age (নাম্বার), এবং email (স্ট্রিং) প্রপার্টি থাকবে। এরপর এই টাইপ অনুযায়ী একটি অবজেক্ট তৈরি করো।
type UserType = {
    name: string;
    age: number;
    email: string;
}
const robert: UserType = {
    name: "Robert",
    age: 26,
    email: "walidur.tanjim@gmail.com"
}

// ২. ফাংশনের জন্য টাইপ অ্যালিয়াস
// প্রশ্ন: দুটি সংখ্যা যোগ করার একটি ফাংশনের জন্য টাইপ অ্যালিয়াস তৈরি করো এবং একটি অ্যারো ফাংশনের মাধ্যমে তা বাস্তবায়ন করো।
type SumFunc = (num1: number, num2: number) => number;
const sumFunc: SumFunc = (num1, num2) => {
    return num1 + num2;
}

// ৩. ইন্টারফেস (Interface) দিয়ে অবজেক্ট টাইপ ডিফাইন
// প্রশ্ন: একটি পণ্যের (Product) ইন্টারফেস তৈরি করো যাতে id (নম্বার), title (স্ট্রিং), এবং price (নম্বার) প্রপার্টি থাকবে।
interface Product {
    id: number;
    title: string;
    price: number;
}
const TUF: Product = {
    id: 1,
    title: "ASUS TUF GAMING A15 FA506N",
    price: 95500
}

// ৪. ইন্টারফেসে অপশনাল প্রপার্টি (?)
// প্রশ্ন: একটি ইন্টারফেসে একটি প্রপার্টি কীভাবে অপশনাল বা ঐচ্ছিক করতে হয় তা দেখাও, যেখানে ফোন নম্বর (phone) না দিলেও কোডে কোনো ত্রুটি দেখাবে না।
interface IUser {
    name: string;
    email: string;
    phone?: number;
}
const albert: IUser = {
    name: "Albert",
    email: "albert@gmail.com"
}

// ৫. ইন্টারফেসে রিডওনলি প্রপার্টি (readonly)
// প্রশ্ন: একটি ইন্টারফেসে readonly মডিফায়ার ব্যবহার করো যাতে আইডি (id) প্রপার্টির মান পরবর্তীতে আর পরিবর্তন করা না যায়।
interface Student {
    readonly id: 1;
    name: string;
    email: string;
}
const student: Student = {
    id: 1,
    name: "Albert",
    email: "albert@gmail.com",
}

// ৬. ইন্টারফেস এক্সটেন্ড করা (Extends)
// প্রশ্ন: একটি বেসিক User ইন্টারফেস তৈরি করো এবং Admin ইন্টারফেস তৈরি করে সেটিকে এক্সটেন্ড করো, যেখানে অতিরিক্ত একটি role প্রপার্টি থাকবে।
const roleOptions = ["admin", "moderator", "user", "guest"] as const;
type RoleOptions = typeof roleOptions[number];

interface UserInterface {
    name: string;
    email: string;
    phone: number;
}
interface Admin extends UserInterface {
    role: RoleOptions;
}

// ৭. টাইপ অ্যালিয়াসে ইন্টারসেকশন (&) ব্যবহার
// প্রশ্ন: দুটি আলাদা টাইপ অ্যালিয়াস (Name এবং Contact) তৈরি করো এবং ইন্টারসেকশন অপারেটর (&) ব্যবহার করে তাদের একত্রিত করে একটি নতুন টাইপ বানাও।
type Name = {
    name: string;
}
type Contact = {
    phone: number;
}
type CombineType = Name & Contact;
const personInfo: CombineType = {
    name: "Robert",
    phone: 0
}

// ৮. বেসিক জেনেরিক ফাংশন (Generic Function)
// প্রশ্ন: একটি জেনেরিক ফাংশন তৈরি করো যা যেকোনো ধরনের ইনপুট (T) গ্রহণ করবে এবং হুবহু সেই মানটিই রিটার্ন করবে।
const returnSameValue = <T>(value: T) : T => {
    return value;
}
// console.log(returnSameValue<string>("Walid"));
// console.log(returnSameValue<number>(26));
// console.log(returnSameValue<boolean>(true));

// ৯. জেনেরিক অ্যারে ফাংশন
// প্রশ্ন: একটি জেনেরিক ফাংশন লেখো যা যেকোনো ধরনের অ্যারে ইনপুট হিসেবে নেবে এবং ঐ অ্যারের প্রথম উপাদানটি রিটার্ন করবে।
const returnFirstValue = <T>(value: T[]) : T | undefined => {
    return value[0];
}
// console.log(returnFirstValue<string>(['You', 'a', 'b', 'c']));
// console.log(returnFirstValue<number>([1, 2, 3]));
// console.log(returnFirstValue<boolean>([true, false]));
// console.log(returnFirstValue([]))

// ১০. জেনেরিক ইন্টারফেস (Generic Interface)
// প্রশ্ন: একটি জেনেরিক ইন্টারফেস ApiResponse<T> তৈরি করো যাতে একটি status (স্ট্রিং) এবং data (T টাইপের) প্রপার্টি থাকবে।
interface ApiResponse<T> {
    status: string;
    data: T;
}
interface DataFormat {
    success: string;
    message: string;
}
const myApiData: ApiResponse<DataFormat> = {
    status: "success",
    data: {
        success: "success",
        message: "Data fetched successfully",
    }
}

// ১১. জেনেরিকে ডিফল্ট টাইপ (Default Type) ব্যবহার
// প্রশ্ন: একটি জেনেরিক ইন্টারফেস বা টাইপ তৈরি করো যেখানে টাইপ প্যারামিটারের একটি ডিফল্ট মান (string) সেট করা থাকবে।
interface Course<T = string> {
    id: number;
    name: T,
    batch: number;
    isEnrolled: boolean;
}
const myCourse: Course = {
    id: 1,
    name: "Next Level Web Development",
    batch: 8,
    isEnrolled: false
}

// ১২. জেনেরিক কনস্ট্রেইন্ট (extends)
// প্রশ্ন: জেনেরিক কনস্ট্রেইন্ট ব্যবহার করে একটি ফাংশন তৈরি করো যা শুধু এমন ডেটা গ্রহণ করবে যাতে কমপক্ষে একটি length প্রপার্টি বিদ্যমান।
interface HasLength {
    length: number;
}
const printLength = <T extends HasLength>(value: T): number => {
    return value.length;
}
// console.log(printLength<string[]>(['a', 'b', 'c', 'd']));
// console.log(printLength<number[]>([1, 2, 3, 4, 5]));
// console.log(printLength<boolean[]>([true, false, false]));

// ১৩. সাধারণ এনাম (Enum) তৈরি
// প্রশ্ন: একটি Direction নামের enum তৈরি করো যার মানগুলো হবে Up, Down, Left, Right।
enum Direction {
    Up,
    Down,
    Left,
    Right
}

// ১৪. সংখ্যাসূচক এনাম (Numeric Enum) মান কাস্টমাইজেশন
// প্রশ্ন: একটি StatusCode নামের এনাম তৈরি করো যেখানে প্রথম মানটি 200 থেকে শুরু হবে এবং পরবর্তীগুলো যথাক্রমে 400, 401, 404 হবে।
enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404
}
// console.log(StatusCode.OK);
// console.log(StatusCode.BadRequest);

// ১৫. স্ট্রিং এনাম (String Enum)
// প্রশ্ন: একটি স্ট্রিং এনাম Role তৈরি করো যার মানগুলো হবে স্ট্রিং টাইপের ("ADMIN", "USER", "GUEST")।
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
// console.log(Role.User)

// ১৬. as const দিয়ে অ্যারে লিটারেল ইমিউটেবল করা
// প্রশ্ন: একটি রঙের অ্যারে (colors) ঘোষণা করো এবং as const ব্যবহার করে সেটিকে সম্পূর্ণ রিডওনলি ও লিটারেল টাইপে রূপান্তর করো, যেন পরবর্তীতে এতে নতুন উপাদান যোগ করা না যায়।
const colors = ["red", "green", "yellow"] as const;

// ১৭. as const দিয়ে অবজেক্ট ইমিউটেবল করা
// প্রশ্ন: একটি কনফিগারেশন অবজেক্ট তৈরি করো এবং as const ব্যবহার করে এর প্রপার্টিগুলোর মান লক বা অপরিবর্তনীয় করে দাও।
const configuration = {
    name: "WalidurTanjim",
    age: 26,
    isAdult: true
} as const;

// ১৮. টাইপ অ্যালিয়াসে ইউনিয়ন টাইপ (|) ব্যবহার
// প্রশ্ন: এমন একটি টাইপ অ্যালিয়াস ID তৈরি করো যা স্ট্রিং বা নাম্বার উভয় প্রকারের ডেটাই গ্রহণ করতে পারে।
type ID = string | number;

// ১৯. tsconfig.json ফাইলে স্ট্রিক্ট মোড অন করা
// প্রশ্ন: tsconfig.json ফাইলের ভেতরে কীভাবে কঠোর টাইপ চেকিং বা strict মোড সচল রাখতে হয়, তার কোড বা কনফিগারেশনটি লেখো।
//
// ২০. জেনেরিক ফাংশনে কী কনস্ট্রেইন্ট (keyof) ব্যবহার
// প্রশ্ন: একটি জেনেরিক ফাংশন তৈরি করো যা একটি অবজেক্ট এবং তার একটি প্রপার্টির নাম (key) ইনপুট নেবে এবং অবজেক্ট থেকে সেই প্রপার্টির সঠিক মান রিটার্ন করবে।
interface UserIdentity {
    name: string;
    email: string;
}
interface ProductIdentity {
    name: string;
    price: number;
}
const getUserIdentity = <T, K extends keyof T>(obj: T, param: K): T[K] => {
    return obj[param]
}
// console.log(getUserIdentity({name: "WalidurTanjim", email: "walidur@gmail.com"}, "name"))
// console.log(getUserIdentity({name: "ASUS TUF Gaming A15", price: 95500}, "price"))

// ১. একটি ইউজার অবজেক্টের টাইপ অ্যালিয়াস তৈরি করো, যেখানে address প্রপার্টিটি এমন হবে যা প্রথমে ঐচ্ছিক (optional) থাকবে, কিন্তু একবার সেট করলে সেটি আর পরিবর্তন বা মিউট করা যাবে না (readonly)।
type TrickyUser = {
    name: string;
    readonly address?: string;
};
const myNewUser: TrickyUser = {
    name: "Robert",
    address: "Dhaka"
}

// ২. একটি জেনেরিক ফাংশন লেখো যা ইনপুট হিসেবে যেকোনো ধরনের অবজেক্ট এবং একটি চাবি (key) গ্রহণ করবে, কিন্তু চাবিটি যদি অবজেক্টের ভেতর না থাকে তবে টাইপ স্ক্রিপ্ট যেন কম্পাইল টাইমেই এরর দেয়।
const existingKey = <T, K extends keyof T> (obj: T, param: K): T[K] => {
    return obj[param]
}
// console.log(existingKey({ name: "AA", age: 5}, "name"));
// console.log(existingKey({ quantity: 5, price: 150}, "name"));

// ৩. এমন একটি কাস্টম টাইপ বা ইন্টারফেস বানাও যা একই সাথে একটি সাধারণ অবজেক্ট এবং একটি ফাংশন উভয় হিসেবেই কাজ করতে পারবে (callable object)।


// ৪. একটি readonly টিউপল (Tuple) তৈরি করো যেখানে প্রথম উপাদানটি হবে স্ট্রিং (নাম) এবং দ্বিতীয় উপাদানটি হবে নাম্বার (বয়স), এবং as const ব্যবহার করে সেটিকে সম্পূর্ণ ইমিউটেবল করে দেখাও।
const readonlyTuple: readonly [string, number] = ["WalidurTanjim", 26] as const;
// readonlyTuple[0] = "WalidurTanjim";

// ৫. একটি ইন্টারফেস চেইন তৈরি করো যেখানে Employee ইন্টারফেসটি Person এবং ContactNo উভয় ইন্টারফেসকেই একত্রে এক্সটেন্ড (multiple extends) করবে।
interface Person {
    salary: number;
}
interface ContactNo {
    phone: number
}
interface Employee extends Person, ContactNo {
    name: string;
    email: string;
}
const myNewEmployee: Employee = {
    name: "Robert",
    email: "robert@gamil.com",
    salary: 75000,
    phone: 500
}

// ৬. একটি জেনেরিক ইন্টারফেস তৈরি করো যার ভেতরে একটি ডেটা প্রপার্টি থাকবে, এবং সেই ডেটার টাইপটি ডিফল্টভাবে একটি অ্যারে (T[]) হিসেবে সেট করা থাকবে যদি না অন্য কিছু পাস করা হয়।


// ৭. এমন একটি এনাম (Enum) এবং একটি ফাংশন তৈরি করো যেখানে ফাংশনটি শুধুমাত্র ওই এনামের নির্দিষ্ট কিছু মান আর্গুমেন্ট হিসেবে গ্রহণ করবে, সব মান নয়।
enum CRUD {
    Create = "CREATE",
    Read = "READ",
    Update = "UPDATE",
    Delete = "DELETE"
}
const specificEnumProperty = (role: CRUD.Create | CRUD.Read) : CRUD.Create | CRUD.Read  => {
    return role;
}
// console.log(specificEnumProperty(CRUD.Read))

// ৮. দুটি ভিন্ন ইন্টারফেসে একই নামের প্রপার্টি রয়েছে (কিন্তু তাদের টাইপ আলাদা), ইন্টারসেকশন অপারেটর (&) ব্যবহার করে তাদের একত্রিত করলে টাইপ স্ক্রিপ্ট কী ধরনের বিহেভিয়ার দেখায় তা একটি প্রবলেমের মাধ্যমে ফুটিয়ে তোলো।
interface NumberAge {
    age: number,
    isMarried: boolean
}
interface StringAge {
    age: string;
    isStudent: boolean
}
type CombineAge = NumberAge & StringAge;

// const myUserAge: CombineAge = {
//     isMarried: false,
//     isStudent: true,
//     age: 26
// }


// ৯. একটি ফাংশন লিখুন যা ইনপুট হিসেবে স্ট্রিং অথবা নাম্বার নিতে পারে (Union Type), কিন্তু ফাংশনের ভেতর টাইপ গার্ড (Type Guard) ব্যবহার করে নিশ্চিত করতে হবে যে ইনপুট স্ট্রিং হলে তার লেন্থ এবং নাম্বার হলে তার স্কয়ার রিটার্ন করবে।
const returnTypeGuard = (value: string | number) : string | number => {
    if(typeof value === "number") {
        return value*2;
    }
    if(typeof value === "string") {
        return value.length;
    }
    return 'Please enter a string or number';
}
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
} as const;

type AppConfigType = typeof appConfig;
type DBConfigType = typeof appConfig["dbConfig"];
type HostConfigType = typeof appConfig["dbConfig"]["host"];
const myNewConfig: DBConfigType = {
    host: "localhost",
    port: 5432,
    isSecure: true
}