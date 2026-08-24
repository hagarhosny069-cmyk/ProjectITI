console.log(" If Else Statement :");

var age = 16;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}


console.log(" Else If :");
var grade = 75;

if (grade >= 90) {
    console.log("Excellent");
} else if (grade >= 75) {
    console.log("Very Good");
} else {
    console.log("Good");
}

console.log(" Nested If :");

var age = 20;
var grade = 85;

if (age >= 18) {
    if (grade >= 50) {
        console.log("Passed");
    }
}

console.log(" Switch :");

var day = 2;

switch (day) {
    case 1:
        console.log("Saturday");
        break;

    case 2:
        console.log("Sunday");
        break;

    case 3:
        console.log("Monday");
        break;

    default:
        console.log("Invalid Day");
}

console.log("Ternary Operator :");

var age = 20;

var result = age >= 18 ? "Adult" : "Not Adult";

console.log(result);

console.log(" For Loop :");

for (var i = 0; i <= 6; i++) {
    console.log(i);
}

console.log(" While Loop :");

var i = 0;

while (i <= 6) {
    console.log(i);
    i++;
}
console.log(" Do While Loop :");

var i = 0;

do {
    console.log(i);
    i++;
} while (i <= 6);

console.log(" Function Declaration :");

function sayHello() {
    console.log("Hello");
}

sayHello();


console.log(" Function Return :");

function getAverage(num1, num2) {
    return (num1 + num2) / 2;
}

console.log(getAverage(10, 20));


console.log(" Arrow Function :");

var getSum = (num1, num2) => {
    return num1 + num2;
};

console.log(getSum(10, 20));


console.log(" Object :");

var student = {
    name: "Malak",
    age: 20,
    grade: 85
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.grade);