// var first_name="Mohamed"
// var age=21;
// var is_student=false;
// console.log(`my name is: ${first_name} and my age is:${age}`);
// age+=5;
// console.log(`my name is: ${first_name} and my age is:${age}`);
// console.log(`my name is: ${first_name} and my age is:${age} and am i a student ${is_student}`);

// var PlayerOneChoice = "Rock";
// var PlayerTwoChoice = "Scissors";

// if (
//     (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors") ||
//     (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") ||
//     (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Paper")
// ) {
//     console.log("Player One Wins!");
// }
// else if (
//     (PlayerTwoChoice === "Rock" && PlayerOneChoice === "Scissors") ||
//     (PlayerTwoChoice === "Paper" && PlayerOneChoice === "Rock") ||
//     (PlayerTwoChoice === "Scissors" && PlayerOneChoice === "Paper")
// ) {
//     console.log("Player Two Wins!");
// }
// else if (PlayerOneChoice === PlayerTwoChoice) {
//     console.log("It's a Tie!");
// }
// for(i=0; i<10; i++){
//         console.log(i);
// }
//  var i =0
//  while(i<10){
//     i++
//      console.log(i)
//  }
//  var i = 0;

// do {
//     console.log(i);
//     i++;
// }
// while (i <= 6);

// function getAverage(num1, num2) {
//     var avg = (num1 + num2) / 2;
//     console.log(avg);
// }

// getAverage(10, 20);

var person= {
    fullName:`Malak Hosny`,
    age:23 ,
    job:`Engineer`,
    salary:2000 ,
    city:`cairo` ,
    isStudent:true,
    wife:{
        fullName: `alaa emad` ,
        age:20,
        gender:`female` ,
        son: {
            fullName:`Adham` ,
            age: 16 ,
            gender: `male`

        }
    },
    eat: function(meal) {
        console.log(`Eating ${meal}`);
    }
};

console.log(person.fullName);
console.log(person.wife.fullName);
console.log(person.wife.age);

console.log(`son Age: ${person.wife.son.age}`);


