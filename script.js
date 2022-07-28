// input / outputs

// output
// window.alert(1234  + 4321)
// alert("helllo world")

// console.log("hello world")

// document.write("hello world")

// containers
// var  / const

// es6

// let / const

// var myName; // defining variable
// myName = "rohan sharma" // assignment

// const myAge = 34;
// myAge = 33;
// console.log(myAge)

// variable naming conventions

// var myName = "rohan sharma";

//           label            placeholder
// prompt("enter your name : " , "name here")
// the value of prompt will always be a string

// var myName = prompt("enter Your Name", "Name goes here")

// console.log(typeof myName)

// strings
// "" / '' will be considered as string
//  console.log(typeof "234");

var myName = "rohan sharma is a student";
// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName);
// console.log(myName.includes("a"));
// console.log(myName.endsWith("a"));
// console.log(myName.replace("r", "s"))
// console.log(myName);
// console.log(myName.slice(0,6));
// console.log(myName.split("s"));

// console.log(12+12);
// console.log("12"+"12");

// var fName = prompt("enter your First Name : ")
// var lName = prompt("enter your Last Name : ")

// console.log(fName + " " + lName + " is a website developer")

// string literals / template literals
// console.log(`${fName} ${lName} is a website develope.`);

// arithematic operators
// var a = 20;
// var b = 3;
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**2)
// console.log(++a)
// console.log(--a)

// control flow statement
// if(a == 21 ){
//     alert("correct")
// }else{
//     alert("incorrect")
// }

// var age= Number(prompt("enter age", "age"))
// console.log(typeof age)

// if(age===18)
// {
//     alert("you are elegible for vote")
// }
// else{
//     alert("you are not elegible for vote")
// }

// if (age > 60){
//     alert("not fit to vote")
// }
// else if (age > 18){
//     alert("eligible to vote")
// } else{
//     alert("not eligible to vote")
// }

// var today = prompt("Enter the Day today : ", "Monday - Sunday").toLowerCase()

// switch (today) {
//   case "monday":
//     alert(`It's a working day as it is \n "${today}"`);
//     break;
//   case "tuesday":
//     alert(`It's a working day as it is \n "${today}"`);
//     break;
//   case "wednesday":
//     alert(`It's a working day as it is \n"${today}"`);
//     break;
//   case "thursday":
//     alert(`It's a working day as it is \n"${today}"`);
//     break;
//   case "friday":
//     alert(`It's a working day as it is \n"${today}"`);
//     break;
//   case "saturday":
//     alert(`It's a Holiday as it is \n"${today}"`);
//     break;
//   case "sunday":
//     alert(`It's a Holiday day as it is \n"${today}"`);
//     break;

//   default:
//     alert(`please enter a valid Day: you entered "${today}"`)
//     break;
// }

// var age = Number(prompt("age"));

// switch (age) {
//   case 18:
//     alert("you're adult");
//     break;
//   case 21:
//     alert("you're fit n fine");
//     break;
//   case 30:
//     alert("you're going to be old soon");
//     break;

//   default:
//     alert(`please enter a valid Age , current Age : ${age}`)
//     break;
// }

// without arguments
// function greet(){
//     // code to be executed
//     alert("hello ! good morning")
// }

// greet()

// functions with params and args

//             FORMAL PARAMS // PLACEHOLDER
// function greet(fullName,age){
//     // code to be executed
//    console.log(`hello ! good morning ${fullName} and your age is ${age}`)
// }
// //   ACTUAL PARAMS
// greet("roph",23)

// function bmiCalculator() {
//   var weight = Number(prompt("enter your weight in kg", "weight"));
//   var height = Number(prompt("enter your height in m", "height"));
//   var bmi = Math.round(weight / (height * height));
//   console.log(`your bmi is ${bmi}`);

// }
// bmiCalculator();

// function bmicalculator() {
//   var weight = Number(prompt("enter your weight in kg", "weight"));
//   var height = Number(prompt("enter your height in m", "height"));
//   var bmi = weight / (height * height);
//   console.log(`your bmi is ${bmi}`);

//   if (bmi < 18.5) {
//     alert(`underweight as your Bmi is ${bmi} `);
//   } else if (bmi > 18.5 && bmi < 24.9) {
//     alert(`normal weight as your Bmi is ${bmi}`);
//   } else if (bmi > 25 && bmi < 29.9) {
//     alert(`Overweight as your Bmi is ${bmi}`);
//   } else if (bmi >= 30) {
//     alert(`Obesse as your Bmi is ${bmi}`);
//   }
// }
// bmicalculator();

// console.log(Math.random())

// anonymous function
// const greet = function (){
//     alert("hello world")
// }

// console.log(typeof greet);

// greet()

// arrow function / es6
// const greet = ()=>{
//     alert("hello world")
// }

// console.log(typeof greet);

// const loveCalculator = ()=>{
//     var herName = prompt("Enter Her Name : ")
//     var hisName = prompt("Enter His Name : ")
//    var love = Math.round(Math.random() * 100)
//     alert(` ${herName} & ${hisName} your Love Percentage is :  ${love}%`)

// }

// loveCalculator()

// date module

// const today = new Date().toLocaleDateString()
// const today = new Date().getFullYear()

// console.log(today);

//  arrays
// []

// console.log(myList[0]);
// console.log(myList[1]);
// console.log(myList[2]);
// console.log(myList[3]);
// console.log(myList[4]);

// for (var i = 0 ; i < myList.length ; i++){
//     console.log(myList[i]);
// }

// console.log( myList[0]);
// console.log(typeof myList);
// console.log(myList.length);

//loops
// for  / while / do while
//  intiialization / condition / increment

// for

// for (var i = 0; i < 100; i++) {
//   console.log(`the value of i is ${i}`);
// }

// while
// var i = 0;
// while (i < 100) {
//   console.log(`the value of i is ${i}`);
//   i++;
// }

// do while

// var i = 0;

// do {
//   console.log(`the value of i is ${i}`);
//   i++;
// } while (i < 100);

// var num= Number(prompt("enter the number","number"))
// for(i=0;i<=10;i++)
// {
//   console.log(`${num} * ${i} = ${num*i}`)

// }

// const giveTable = ()=>{
//     var num= Number(prompt("enter the number","number"))
//     for (var i = 1; i <=10 ; i++){
//         var result = i * num
//         console.log(` ${num} * ${i} = ${result}`);
//     }
// }

// giveTable()

// const lifespan = () => {
//   var dob = Number(prompt("enter your date of birth", "dob"));
//   const averageAge = 90;
//   var today = new Date().getFullYear();

//   var age = today - dob;

//   if (age <= averageAge) {
//     var year = averageAge - age;
//     var month = year * 12;
//     var week = year * 52;
//     var days = year * 365;
//     console.log(
//       `You Have ${year} year left \n${month} month left \n${week}  week left \n${days} days left`
//     );
//   } else {
//     console.log(`enter if your age is below 90 only`);
//   }
// };
// lifespan();

var myList = ["abc", 234, 1.2, true, ["abc", "cde"], 1234];

// // push data in the end of an array
// myList.push("hello world")
// console.log(myList);

// console.log(myList.length)
// myList.reverse()
// console.log(myList)

// for (var i = 0 ; i < myList.length; i++){
//     console.log(`item no ${i} ${myList[i]}`);
// }

// console.log(myList.slice(0, 4));

// myList.shift("hello world")

// myList.unshift("hello")

// myList.pop()

// console.log(myList.includes("abcd"))

// console.log(myList)

// object
var myCar = {
  name: "mustang",
  brand: "Ford",
  year: 2020,
  color: ["red", "black", "yellow"],

// an arrow function inside an object doesn't have access to "this" keyword but 
// an anonymous function does 

// if inside an object in an arrow function "this" keyword means the window / document / global object
// if inside an object in an anonymous function "this" keyword means the object itself



  details: function()  {
    console.log(`The name of the Car is ${this.name} and it comes from ${this.brand}.
    \nIt's a ${this.year} model and Available in ${this.color} `);

  },
};

// console.log(myCar["name"])
// console.log(myCar["year"])
// console.log(myCar["color"])
// console.log(myCar);

// myCar.details();


// console.log(this);


// constructor function

// function Car(name, brand , year , colors){
//     this.carName = name
//     this.carBrand = brand
//     this.carYear = year
//     this.carColors = colors
//     this.details = function(){
//         console.log(`The name of the Car is ${this.name} and it comes from ${this.brand}.
//         \nIt's a ${this.year} model and Available in ${this.color} `);
//     }
// }


// var mustang = new Car("mustang","ford",2020, ["red","green","yellow"])
// console.log(mustang);