// Problem statement 01:
const printUser = (name: string, age: number) : string => {
    return `${name} is ${age} years old`;
}
// console.log(printUser('Walidur Tanjim', 26))

// Problem statement 02:
const availability = (name: string, price: number, isAvailable: boolean) : string => {
    return `${name} cost ${price} and is available: ${isAvailable}`;
}
// console.log(availability('Laptop', 45000, true));

// Problem statement 03:
const studentArrayLength = (students: string[]) : number => {
    return students.length;
}
// console.log(studentArrayLength(["Amina", "Rahim", "Karim", "Salma", "Rafi"]));

// Problem statement 04:
const singleTuple = (people: [string, number]) : string => {
    return `${people[0]} is ${people[1]} years old`;
}
// console.log(singleTuple(["Amina", 22]));

// Problem statement 05:
const printUserObject = ( user: { name: string, email?: string }) : string => {
    return `Name: ${user?.name}, Email: ${user?.email ? user?.email : 'Not Provided'}`
}
// console.log(printUserObject({name: 'Walidur Tanjim', email: 'walidur@gmail.com'}))

// Problem statement 06:
const checkEven = (givenValue: number) : boolean => {
    return givenValue % 2 === 0;
}
// console.log(checkEven(251))

// Problem statement 07:
const sumAll = (givenValue: number[]) : number => {
    let sum: number = 0;
    for(let i: number = 0; i < givenValue.length; i++) {
        sum = sum + i;
    }
    return sum;
}
// console.log(sumAll([1,2,3,4,5,6,7,8,9,10]));

// Problem statement 08:
const margeArray = (arr1: number[], arr2: number[]) : number[] => {
    const newArr: number[] = [...arr1, ...arr2];
    return newArr;
}
// console.log(margeArray([1, 2, 3], [4, 5, 6]))

// Problem statement 09:
const checkNumber = (number: number) : string => {
    return (number < 0) ? `${number} is negative` : (number >= 1) ? `${number} is positive` : `${number} is zero`;
}
// console.log(checkNumber(0));

// Problem statement 10:
const showDefaultValue = (username: string = 'Guest') : string => {
    return username;
}
// console.log(showDefaultValue())

// Problem statement 11:
const checkUnknown = (givenValue: unknown) : string => {
    if(typeof givenValue === 'string') {
        return 'String'
    } else if(typeof givenValue === 'number') {
        return 'Number'
    } else {
        return 'Other'
    }
}
// console.log(checkUnknown(true));

// Problem statement 12:
const displayUserInfo = (user: {name: string, age: number, email: string, skills: string[], active: boolean}) : {} => {
    return {
        name: user?.name,
        age: user?.age,
        email: user?.email,
        skills: user?.skills,
        active: user?.active
    }
}
// console.log(displayUserInfo({
//     name: "Amina",
//     age: 22,
//     email: "amina@email.com",
//     skills: ["HTML", "CSS", "TypeScript"],
//     active: true
// }))

/* Extra challenge ideas:
=========================
* EPI 01: একটি shopping cart object বানাও।
* EPI 02: একটি function দিয়ে user login check করো।
* EPI 03: array থেকে even numbers filter করো।
* EPI 04: nested object থেকে country বের করো।
* EPI 05: type-safe function দিয়ে total price calculate করো।
*/

// EPI 01: একটি shopping cart object বানাও।
type ShoppingCart = {
    author: {
        name: string;
        email: string;
    },
    products: {
        product_name: string;
        brand: string;
        price: number;
        quantity: number;
        isAvailable: boolean;
        discountPrice?: number;
    }
}
const shoppingCart: ShoppingCart = {
    author: {
        name: 'Walidur Tanjim',
        email: 'walidur.tanjim@gamil.com'
    },
    products: {
        product_name: 'ASUS TUF Gaming A15 FA506N',
        brand: 'ASUS',
        price: 95500,
        quantity: 1,
        isAvailable: true
    }
}

// EPI 02: একটি function দিয়ে user login check করো।
const checkUserLogin = (email: string, password: number | string) : string => {
    const userPassword = 123456;

    if(email === 'walidur.tanjim@gmail.com') {
        if(password === userPassword) {
            return 'Login successful'
        } else {
            return 'Login failed. Wrong password'
        }
    }
    return 'Login failed. Wrong email'
}
// console.log(checkUserLogin('walidur.tanjim@gmail.com', 123456))

// EPI 03: array থেকে even numbers filter করো।
const findEven = (numbers: number[]) : number[] => {
    const evenNumbers: number[] = numbers.filter((value: number) => value % 2 === 0);
    return evenNumbers
}
// console.log(findEven([1,2,3,4,5,6,7,8,9]))

// EPI 04: nested object থেকে country বের করো।
// 1. Level 3 Type (Deepest nesting)
type Coordinates = {
    lat: number;
    lng: number;
};

// 2. Level 2 Type (Nested inside Address)
type Address = {
    country: string;
    street: string;
    city: string;
    zipCode: string;
    coordinates?: Coordinates; // Optional nested object
};

// 2. Level 2 Type (Nested inside UserProfile)
type UserPreferences = {
    theme: 'dark' | 'light';
    notifications: boolean;
};

// 1. Level 1 (Root Type)
type UserProfile = {
    id: number;
    name: string;
    email?: string;
    address: Address;          // Nested object 1
    preferences: UserPreferences; // Nested object 2
};

// --- Creating the Nested Object ---
const currentUser: UserProfile = {
    id: 101,
    name: "Walidur Tanjim",
    email: "tanjim@example.com",
    address: {
        country: "Bangladesh",
        street: "123 Tech Avenue",
        city: "Dhaka",
        zipCode: "1216",
        coordinates: {
            lat: 23.8103,
            lng: 90.4125
        }
    },
    preferences: {
        theme: "dark",
        notifications: true
    }
};

const findCountry = currentUser?.address?.country;
// console.log(`Current country: ${findCountry}`);

// EPI 05: type-safe function দিয়ে total price calculate করো।
const totalPrice = (priceValue1: number, priceValue2: number) : number => {
    return priceValue1 + priceValue2;
}
// console.log(totalPrice(5, 7))