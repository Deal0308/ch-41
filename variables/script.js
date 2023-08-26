console.log("Script");
var message = "hello world";
let num1; //declare the variable
num1=10;//assigning the value
let num2=20;
let sum =num1+num2;
let firstname = "Michael"

console.log(message,num1,num2);

document.write("The result of the sum is: " + sum +"the calculation was made by " + firstname);

message="Welcome to coding";

console.log(message);

//exercise #1

let jobTitle = "Software developer";
let partnerName = "Michael"
let geolocation = "American"
let numberChildren = 0;

//document.write("You will be a " + jobTitle + " in " + geolocation + ", and married to " + partnerName + " with " + numberChildren +"kids.");

//template.string
document.write(
    `
    <h2> Exercise 1 </h2>
    <p> 
        You will be a ${jobTitle} in ${geolocation} , and married to ${partnerName} with ${numberChildren} kids.
        </p>
    `

);

//exercise 2
var name1 = "Cody"
let email = "cody@gmail.com"
let password ="abc123"
let age = "31"
let country =" America"
let salarymonthly = 10000;

document.write(
    `
    
    <p class="details"> Name: ${name1}</p>
    <p class="details"> Email: ${email} </p>
    <p class="details"> Monthlysalary: ${salarymonthly}

    `
);
