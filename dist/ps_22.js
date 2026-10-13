"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ** Problem statement 01: Declare a variable of type unknown holding a string. Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.
// Input: let val: unknown = "Hello TypeScript";
// Output: 16 (length), printed twice — once via as string, once via <string>.
let val = "Hello TypeScript";
let lengthViaAsConst = val.length;
let lengthViaBracket = val.length;
// console.log(lengthViaAsConst, lengthViaBracket)
// ** Problem statement 02: Declare a string | number union variable. Cast it safely to number and add 10. Then write a double assertion (as unknown as) example and comment why it's risky.
// Input: let value: string | number = "100";
// Output: 110 (safe cast result); commented risky example, no runtime output required.
let value = "100";
let safeResult = Number(value) + 10;
// console.log(`${safeResult} (safe cast result)`);
let newValue = "Hello TypeScript";
let doubleAssertion = newValue;
const product_01 = {
    title: "ASUS TUF Gaming A15 FA506N",
    price: 95500,
    inStock: true,
};
const product_02 = {
    title: "VIVO Y22s",
    price: 21000
};
const displayPrice = (product) => {
    console.log(`Product price: ${product.price}`);
};
// displayPrice(product_02);
// ** Problem statement 04: Create a type alias PaymentMethod = "cash" | "card" | "mobile". Comment why interface can't express this. Create an Order interface using PaymentMethod.
// Input: let method: PaymentMethod = "card";
// Output: Order object like { id: 1, method: "card" }, type-checked successfully.
const paymentMethod = ["cash", "card", "mobile"];
const myOrder = {
    id: 1,
    method: "cash"
};
// console.log(myOrder);
// ** Problem statement 05: Write a generic function getLastElement<T> that returns the last element of an array. Test with number[] and string[].
// Input: [10, 20, 30] and ["a", "b", "c"]
// Output: 30 and "c"
const getLastElement = (array) => {
    const arrayLength = array.length;
    return array[arrayLength - 1];
};
const container_01 = {
    item: "Books"
};
const container_02 = {
    item: 1
};
const data = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];
const extendData = [
    { id: 1, name: "C", quantity: 10 }
];
const invalidData = [
    { name: "X" },
    { name: "Y" }
];
const findByID = (array, searchId) => {
    return array.find((val) => val?.id === searchId);
};
// console.log(findByID(data, 1));
// ** Problem statement 08: Create a string enum OrderStatus: Placed, Shipped, Delivered, Canceled. Write a function that prints a readable message for a given status.
// Input: OrderStatus.Shipped
// Output: "Current status: SHIPPED" (or equivalent readable message)
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "Placed";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Canceled"] = "Canceled";
})(OrderStatus || (OrderStatus = {}));
const printStatus = (status) => {
    return status === "Placed" ? `Current status: ${OrderStatus.Placed}` : status === "Shipped" ? `Current status: ${OrderStatus.Shipped}` : status === "Delivered" ? `Current status: ${OrderStatus.Delivered}` : status === "Canceled" ? `Current status: ${OrderStatus.Canceled}` : "Please provide a valid order status";
};
// console.log(printStatus(OrderStatus.Canceled))
// console.log(printStatus(OrderStatus.Placed))
// console.log(printStatus(OrderStatus.Delivered))
// ** Problem statement 09: Create an appConfig object (theme, version), lock it with as const. Try mutating a property and comment on the resulting error. Derive a union type from an array using typeof + as const.
// Input: const appConfig = { theme: "dark", version: 2 } as const;
// Output: commented error on mutation attempt (Cannot assign to 'theme' because it is a read-only property); derived union type example (e.g. "red" | "green" | "blue").
const appConfig = {
    theme: "dark",
    version: 2
};
// appConfig.version = 5;
// console.log(appConfig);
const genderOptions = ["Male", "Female", "Other"];
const myGender = "Male";
const yourGender = "Female";
const updateEmployee = (value) => {
    return value;
};
