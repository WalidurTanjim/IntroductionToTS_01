// ** Problem statement 01: Declare a variable of type unknown holding a string. Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.
// Input: let val: unknown = "Hello TypeScript";
// Output: 16 (length), printed twice — once via as string, once via <string>.
let val: unknown = "Hello TypeScript";

let lengthViaAsConst: number = (val as string).length;
let lengthViaBracket: number = (<string>val).length;
// console.log(lengthViaAsConst, lengthViaBracket)

// ** Problem statement 02: Declare a string | number union variable. Cast it safely to number and add 10. Then write a double assertion (as unknown as) example and comment why it's risky.
// Input: let value: string | number = "100";
// Output: 110 (safe cast result); commented risky example, no runtime output required.
let value: string | number = "100";
let safeResult: number = Number(value) + 10;
// console.log(`${safeResult} (safe cast result)`);

let newValue: string = "Hello TypeScript";
let doubleAssertion = (newValue as unknown) as number;
// console.log(doubleAssertion, typeof doubleAssertion);

// ** Problem statement 03: Create a Product interface with title: string, price: number, inStock?: boolean. Create two product objects — one with inStock, one without. Write a function that logs a product's price.
// Input: { title: "Laptop", price: 55000 } and { title: "Mouse", price: 500, inStock: true }
// Output: 55000 and 500 printed by the function.
interface Product {
    title: string;
    price: number;
    inStock?: boolean;
}

const product_01: Product = {
    title: "ASUS TUF Gaming A15 FA506N",
    price: 95500,
    inStock: true,
}

const product_02: Product = {
    title: "VIVO Y22s",
    price: 21000
}

const displayPrice = (product: Product) : void => {
    console.log(`Product price: ${product.price}`);
}
// displayPrice(product_02);

// ** Problem statement 04: Create a type alias PaymentMethod = "cash" | "card" | "mobile". Comment why interface can't express this. Create an Order interface using PaymentMethod.
// Input: let method: PaymentMethod = "card";
// Output: Order object like { id: 1, method: "card" }, type-checked successfully.
const paymentMethod = ["cash", "card", "mobile"] as const;
type PaymentMethod = typeof paymentMethod[number];

interface Order {
    id: number;
    method: PaymentMethod;
}
const myOrder: Order = {
    id: 1,
    method: "cash"
}
// console.log(myOrder);

// ** Problem statement 05: Write a generic function getLastElement<T> that returns the last element of an array. Test with number[] and string[].
// Input: [10, 20, 30] and ["a", "b", "c"]
// Output: 30 and "c"
const getLastElement = <T>(array: T[]) : T | undefined => {
    const arrayLength = array.length;
    return array[arrayLength - 1];
}

// console.log(getLastElement([10,20,30]))
// console.log(getLastElement(["a", "b", "c"]));

// ** Problem statement 06: Create a generic interface Container<T> with item: T. Create one Container<number> and one Container<string>.
// Input: { item: 100 }, { item: "Books" }
// Output: Container<number> = { item: 100 }, Container<string> = { item: "Books" }
interface Container<T> {
    item: T
}

const container_01: Container<string> = {
    item: "Books"
}
const container_02: Container<number> = {
    item: 1
}
// console.log(container_01);
// console.log(container_02);

// ** Problem statement 07: Create HasId interface (id: number). Write findById<T extends HasId> that searches an array for a matching id. Write a call that violates the constraint and comment on the error.
// Input: [{ id: 1, name: "A" }, { id: 2, name: "B" }], search id: 2
// Output: { id: 2, name: "B" }; commented line shows constraint-violation error (e.g. passing an object without id).
interface HasId {
    id: number;
}
const data = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
]
const extendData = [
    { id: 1, name: "C", quantity: 10}
]
const invalidData = [
    { name: "X" },
    { name: "Y" }
]

const findByID = <T extends HasId>(array: T[], searchId: number) : T | undefined => {
    return array.find((val: HasId) => val?.id === searchId);
}
// console.log(findByID(data, 1));

// ** Problem statement 08: Create a string enum OrderStatus: Placed, Shipped, Delivered, Canceled. Write a function that prints a readable message for a given status.
// Input: OrderStatus.Shipped
// Output: "Current status: SHIPPED" (or equivalent readable message)
enum OrderStatus {
    Placed = "Placed",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Canceled = "Canceled"
}
const printStatus = (status: OrderStatus) : string => {
    return status === "Placed" ? `Current status: ${OrderStatus.Placed}` : status === "Shipped" ? `Current status: ${OrderStatus.Shipped}` : status === "Delivered" ? `Current status: ${OrderStatus.Delivered}` : status === "Canceled" ? `Current status: ${OrderStatus.Canceled}` : "Please provide a valid order status";
}
// console.log(printStatus(OrderStatus.Canceled))
// console.log(printStatus(OrderStatus.Placed))
// console.log(printStatus(OrderStatus.Delivered))

// ** Problem statement 09: Create an appConfig object (theme, version), lock it with as const. Try mutating a property and comment on the resulting error. Derive a union type from an array using typeof + as const.
// Input: const appConfig = { theme: "dark", version: 2 } as const;
// Output: commented error on mutation attempt (Cannot assign to 'theme' because it is a read-only property); derived union type example (e.g. "red" | "green" | "blue").
const appConfig = {
    theme: "dark",
    version: 2
} as const;
// appConfig.version = 5;
// console.log(appConfig);

const genderOptions = ["Male", "Female", "Other"] as const;
type GenderOptions = typeof genderOptions[number];

const myGender: GenderOptions = "Male";
const yourGender: GenderOptions = "Female";
// console.log(myGender, yourGender);

// ** Problem statement 10: Create Employee interface (name, id, salary, department). Write updateEmployee using Partial<Employee>. Build two new types with Pick<Employee, "name" | "id"> and Omit<Employee, "salary">.
// Input: updateEmployee({ name: "Rafi" })
// Output: logs { name: "Rafi" }; Pick type = { name, id }; Omit type = { name, id, department }
interface Employee {
    name: string;
    id: number;
    salary: number;
    department: string;
}
interface Student {
    class: number;
    roll: number;
    isRegular: boolean;
}

const updateEmployee = <T>(value: Partial<T>): Partial<T> => {
    return value;
}
// console.log(updateEmployee<Employee>({ department: "Shopify" }));
// console.log(updateEmployee<Employee>({ department: "Backend Development", salary: 75000 }));
// console.log(updateEmployee<Employee>({ department: "Full Stack Development", salary: 95000 }));
// console.log(updateEmployee<Student>({ class: 10, isRegular: false }))

type employeeNameId = Pick<Employee, "name" | "id">;
type employeeSalary = Omit<Employee, "salary">;


