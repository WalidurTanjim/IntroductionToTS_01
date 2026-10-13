"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transactionResponse = {
    data: "Transaction successful",
    status: 200,
};
const transactionStatus = {
    data: true,
    status: 200,
};
const transactionAmount = {
    data: 45000,
    status: 400,
};
// Practice tasks
/*
PT1: অ্যারের প্রথম উপাদান রিটার্ন করা (First Element)
টাস্ক: একটি জেনেরিক ফাংশন তৈরি করুন যার নাম হবে getFirstElement<T>। এটি যেকোনো ধরনের অ্যারে (যেমন string[] বা number[]) ইনপুট হিসেবে নেবে এবং অ্যারের প্রথম উপাদানটি রিটার্ন করবে।

PT2: অবজেক্ট পেয়ার তৈরি করা (Make Pair)
টাস্ক: একটি জেনেরিক ফাংশন বানান যা দুটি ভিন্ন বা একই টাইপের মান (value1 এবং value2) গ্রহণ করবে এবং একটি অবজেক্ট আকারে রিটার্ন করবে।

হিಂট: ফংশন সিগনেচার এমন হতে পারে: function makePair<T, U>(first: T, second: U)

PT3: বক্স ইন্টারফেস (Generic Box Interface)
টাস্ক: Box<T> নামে একটি জেনেরিক ইন্টারফেস তৈরি করুন, যার ভেতরে value নামে একটি প্রপার্টি থাকবে যার টাইপ হবে T। এরপর এই ইন্টারফেস ব্যবহার করে একটি স্ট্রিং বক্স (Box<string>) এবং একটি নাম্বার বক্স (Box<number>) তৈরি করে দেখান।

PT4: এপিআই রেসপন্স র‍্যাপার (API Response Wrapper)
টাস্ক: একটি জেনেরিক টাইপ বা ইন্টারফেস বানান ApiResponse<T>। এর ভেতরে দুটি প্রপার্টি থাকবে: status (string) এবং data (T)। এখন এটিকে ইউজার ডেটা ({ name: string, email: string }) অথবা প্রোডাক্ট ডেটার জন্য ব্যবহার করুন।

PT5: প্রপার্টি প্রিন্টার (Print Property)
টাস্ক: একটি জেনেরিক ফাংশন তৈরি করুন যা যেকোনো অবজেক্ট এবং একটি কি (Key) ইনপুট নেবে এবং ওই প্রপার্টির মান প্রিন্ট করবে।
*/
// PT1 solve:
const getFirstElement = (element) => {
    return element[0];
};
// console.log(getFirstElement([]))
// console.log(getFirstElement(['MD', 'Walidur', 'Tanjim']))
// console.log(getFirstElement([0, 1, 2, 3]))
// console.log(getFirstElement([true, true, 'true']))
// PT2 solve:
const makePair = (value1, value2) => {
    return { value1: value1, value2: value2 };
};
const boxString = {
    value: "Walidur Tanjim"
};
const boxNumber = {
    value: 26
};
const userData = {
    status: 200,
    data: "walidur.tanjim@gamil.com"
};
const productData = {
    status: 200,
    data: {
        productName: "ASUS TUF Gaming A15 FA506N",
        productPrice: 95500,
        quantity: 1
    }
};
// PT5 solve:
const printPropertyValue = (obj, key) => {
    return obj[key];
};
console.log(printPropertyValue({ name: "tanjim", age: 22 }, "name"));
