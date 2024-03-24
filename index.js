#! /usr/bin/env node     
import inquirer from "inquirer";
const answere = await inquirer.prompt([
    { message: "enter first number:", type: "number", name: "firstNumber" },
    { message: "enter second number:", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "substraction", "multipilication", "Division"],
    },
]);
if (answere.operator === "Addition") {
    console.log(answere.firstNumber + answere.secondNumber);
}
else if (answere.operator === "substraction") {
    console.log(answere.firstNumber - answere.secondNumber);
}
else if (answere.operator === "multipilication") {
    console.log(answere.firstNumber * answere.secondNumber);
}
else if (answere.operator === "Division") {
    console.log(answere.firstNumber / answere.secondNumber);
}
