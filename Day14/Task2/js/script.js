const employees = [
    {
        id: 1,
        name: "Malak",
        age: 22,
        salary: 6000,
        department: "IT",
        active: true
    },
    {
        id: 2,
        name: "Alaa",
        age: 27,
        salary: 8500,
        department: "HR",
        active: true
    },
    {
        id: 3,
        name: "Adham",
        age: 20,
        salary: 4500,
        department: "IT",
        active: false
    },
    {
        id: 4,
        name: "Mona",
        age: 30,
        salary: 10000,
        department: "Finance",
        active: true
    },
    {
        id: 5,
        name: "Omar",
        age: 24,
        salary: 7000,
        department: "Marketing",
        active: false
    },
    {
        id: 6,
        name: "Youssef",
        age: 29,
        salary: 12000,
        department: "IT",
        active: true
    }
];


// Part 1 - Loops

// 1) for

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}


// 2) for...of

for (const employee of employees) {
    console.log(employee.name);
}


// 3) forEach

employees.forEach((employee) => {
    console.log(employee.name);
});


// 4) for...in

for (const index in employees) {
    console.log(index);
}


// 5) Active employees

for (let i = 0; i < employees.length; i++) {
    if (employees[i].active === true) {
        console.log(employees[i]);
    }
}


// Part 1 Loops

// 1 Print names using for

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}


// 2 Print names using for of

for (const employee of employees) {
    console.log(employee.name);
}


// 3 Print names using forEach

employees.forEach((employee) => {
    console.log(employee.name);
});


// 4 Print Index using for in

for (const index in employees) {
    console.log(index);
}


// 5 Print active employees using normal loop

for (let i = 0; i < employees.length; i++) {
    if (employees[i].active === true) {
        console.log(employees[i]);
    }
}


// Part 2  ES6


// Q1  Arrow Function

const welcome = (name) => {
    return "Welcome " + name;
};

console.log(welcome("Malak"));


// Q2  Destructuring

const employee = employees[0];

const { name, salary } = employee;

console.log(name);
console.log(salary);


// Q3  Spread Operator

const newEmployee = {
    ...employee,
    country: "Egypt"
};

console.log(newEmployee);


// Q4 Template Literal

console.log(`${name} works in ${employee.department} and earns ${salary}`);


// Part 3
// Q1
const employeeNames = employees.map((employee) => {
    return employee.name;
});

console.log(employeeNames);


// Q2
const salaries = employees.map((employee) => {
    return employee.salary;
});

console.log(salaries);


// Q3
const employeeInfo = employees.map((employee) => {
    return `${employee.name} (${employee.department})`;
});

console.log(employeeInfo);


// Q4
const increasedSalaries = employees.map((employee) => {
    return {
        ...employee,
        salary: employee.salary + 1000
    };
});

console.log(increasedSalaries);

// Part 4 


// Q1

const highSalaryEmployees = employees.filter((employee) => {
    return employee.salary > 7000;
});

console.log(highSalaryEmployees);


// Q2
const itEmployees = employees.filter((employee) => {
    return employee.department === "IT";
});

console.log(itEmployees);


// Q3

const activeEmployees = employees.filter((employee) => {
    return employee.active === true;
});

console.log(activeEmployees);

// Q4
const youngEmployees = employees.filter((employee) => {
    return employee.age < 25;
});

console.log(youngEmployees);


// Q5
const itHighSalaryEmployees = employees.filter((employee) => {
    return employee.department === "IT" && employee.salary > 5000;
});

console.log(itHighSalaryEmployees);

// Part 5

// Q1
const highSalaryEmployee = employees.find((employee) => {
    return employee.salary > 9000;
});

console.log(highSalaryEmployee);


// Q2
const hrEmployee = employees.find((employee) => {
    return employee.department === "HR";
});

console.log(hrEmployee);

// Q3
const inactiveEmployee = employees.find((employee) => {
    return employee.active === false;
});

console.log(inactiveEmployee);


// Q4
const employee100 = employees.find((employee) => {
    return employee.id === 100;
});

console.log(employee100);

// Part 6 
// Q1
const activeEmployeeNames = employees
    .filter((employee) => {
        return employee.active === true;
    })
    .map((employee) => {
        return employee.name;
    });

console.log(activeEmployeeNames);


// Q2
const itEmployeeNames = employees
    .filter((employee) => {
        return employee.department === "IT";
    })
    .map((employee) => {
        return employee.name;
    });

console.log(itEmployeeNames);


// Q3
const highSalaryNames = employees
    .filter((employee) => {
        return employee.salary > 7000;
    })
    .map((employee) => {
        return employee.name;
    });

console.log(highSalaryNames);


// Q4
const employeeBonuses = employees.map((employee) => {
    return {
        employee: employee.name,
        bonus: employee.salary * 0.10
    };
});

console.log(employeeBonuses);


// Q5

const firstLetters = employees.map((employee) => {
    return employee.name[0];
});

console.log(firstLetters);

// Part 7 

const numbers3 = [5, 12, 8, 20, 15, 30, 3, 40];


// Q1
const greaterThan10 = numbers3.filter((num) => {
    return num > 10;
});

console.log(greaterThan10);


// Q2
const doubledNumbers = numbers3.map((num) => {
    return num * 2;
});

console.log(doubledNumbers);


// Q3
const firstGreaterThan25 = numbers3.find((num) => {
    return num > 25;
});

console.log(firstGreaterThan25);


// Q4
numbers3.forEach((num) => {
    console.log(num);
});


// Q5
const numberMessages = numbers3.map((num) => {
    return `Number is ${num}`;
});

console.log(numberMessages);

// Part 8

const product = {
    id: 1,
    title: "Laptop",
    price: 25000,
    category: "Electronics"
};


// Q1
for (const key in product) {
    console.log(key);
}

// Q2
for (const key in product) {
    console.log(product[key]);
}


// Q3
const newProduct = {
    ...product,
    stock: 15
};

console.log(newProduct);

// Q4
const { id, title, price, category } = product;

console.log(id);
console.log(title);
console.log(price);
console.log(category);

// Part 9 - Mini Dashboard

function dashboard() {

    console.log("Total Employees :", employees.length);


    // Active Employees

    const activeEmployees = employees.filter((employee) => {
        return employee.active === true;
    });

    console.log("Active Employees :", activeEmployees.length);


    // Inactive Employees

    const inactiveEmployees = employees.filter((employee) => {
        return employee.active === false;
    });

    console.log("Inactive Employees :", inactiveEmployees.length);


    // IT Employees

    const itEmployees = employees.filter((employee) => {
        return employee.department === "IT";
    });

    console.log("IT Employees :", itEmployees.length);


    // Highest Salary

    const highestSalary = Math.max(
        ...employees.map((employee) => employee.salary)
    );

    console.log("Highest Salary :", highestSalary);


    // First HR Employee

    const firstHrEmployee = employees.find((employee) => {
        return employee.department === "HR";
    });

    console.log("First HR Employee :", firstHrEmployee.name);


    // Employee Names

    console.log("Employee Names :");

    employees.forEach((employee) => {
        console.log(employee.name);
    });
}

// Call dashboard

dashboard();

// Bonus 
// Q1
const totalSalaries = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Salaries :", totalSalaries);

// Q2
const averageSalary = totalSalaries / employees.length;

console.log("Average Salary :", averageSalary);


// Q3
const highestSalary = employees.reduce((highest, employee) => {
    return Math.max(highest, employee.salary);
}, 0);

console.log("Highest Salary :", highestSalary);


// Q4
const activeCount = employees.reduce((count, employee) => {
    return count + (employee.active === true ? 1 : 0);
}, 0);

console.log("Active Employees :", activeCount);