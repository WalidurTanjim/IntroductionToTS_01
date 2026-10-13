interface Response<T> {
    data: T;
    status: number;
}

const transactionResponse: Response<string> = {
    data: "Transaction successful",
    status: 200,
}

const transactionStatus: Response<boolean> = {
    data: true,
    status: 200,
}

const transactionAmount: Response<number> = {
    data: 45000,
    status: 400,
}

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
const getFirstElement = <T> (element: T[]) : T | undefined => {
    return element[0]
}
// console.log(getFirstElement([]))
// console.log(getFirstElement(['MD', 'Walidur', 'Tanjim']))
// console.log(getFirstElement([0, 1, 2, 3]))
// console.log(getFirstElement([true, true, 'true']))

// PT2 solve:
const makePair = <T, U>(value1: T, value2: U) : {} => {
    return { value1: value1, value2: value2 }
}
// console.log(makePair("name", 'Walidur Tanjim'))
// console.log(makePair("age", 26))

// PT3 solve:
interface Box<T> {
    value: T;
}

const boxString: Box<string> = {
    value: "Walidur Tanjim"
}
const boxNumber: Box<number> = {
    value: 26
}

// PT4 solve:
interface ApiResponse<T> {
    status: number;
    data: T;
}

const userData: ApiResponse<string> = {
    status: 200,
    data: "walidur.tanjim@gamil.com"
}
const productData: ApiResponse<{ productName: string, productPrice: number, quantity?: number }> = {
    status: 200,
    data: {
        productName: "ASUS TUF Gaming A15 FA506N",
        productPrice: 95500,
        quantity: 1
    }
}

// PT5 solve:
const printPropertyValue = <T, U extends keyof T> (obj: T, key: U) : T[U] => {
    return obj[key]
}
// console.log(printPropertyValue({name: "tanjim", age: 22}, "name"))