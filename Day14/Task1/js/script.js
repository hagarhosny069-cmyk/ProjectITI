// Part 1  Choose

// 1) Array جديدة بنفس الطول
// 2) find()
// 3) Array جديدة بالعناصر اللي حققت الشرط
// 4) undefined
// 5) Arrays


// Part 2  True or False

// 1) False
// 2) True
// 3) True
// 4) True
// 5) False


// Part 3 Complete the following

// Q1
const numbers = [1, 2, 3, 4];

numbers.map((num) => {
    console.log(num * 2);
});


// Q2
const nums = [10, 25, 5, 30, 15, 40];

const result = nums.filter((num) => {
    return num > 20;
});

console.log(result);


// Q3
const users = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 28 },
    { name: "Omar", age: 30 }
];

const user = users.find((item) => {
    return item.age > 25;
});

console.log(user);


// Q4
const names = ["ali", "mona", "ahmed"];

const result2 = names.map((name) => {
    return name.toUpperCase();
});

console.log(result2);


// Part 4  To Do

const fruits = ["Apple", "Banana", "Orange"];

// 1) 
for (const fruit of fruits) {
    console.log(fruit);
}

// 2) 
for (const index in fruits) {
    console.log(index);
}

// 3) 
fruits.forEach((fruit, index) => {
    console.log(index + " -> " + fruit);
});


// Part 5  Q1

const sum = (a, b) => {
    return a + b;
};


// Part 5  Q2

const student = {
    name: "Malak",
    age: 25
};

const { name, age } = student;

console.log(name);
console.log(age);


// Part 5  Q3

console.log(`Hello ${name}`);


// Part 5  Q4

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);


// Part 6  Many Q

const students = [
    { name: "Ali", degree: 70 },
    { name: "Sara", degree: 95 },
    { name: "Ahmed", degree: 40 },
    { name: "Mona", degree: 85 },
    { name: "Omar", degree: 55 }
];


// Q1

const studentNames = students.map((student) => {
    return student.name;
});

console.log(studentNames);

// Q2

const passedStudents = students.filter((student) => {
    return student.degree >= 60;
});

console.log(passedStudents);


// Q3

const topStudent = students.find((student) => {
    return student.degree > 90;
});

console.log(topStudent);

// Q4

students.forEach((student) => {
    console.log(student.name);
});



const numbers2 = [5, 10, 15, 20];

const total = numbers2.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);