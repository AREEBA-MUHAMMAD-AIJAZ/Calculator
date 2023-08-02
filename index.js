// import React from 'react'
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly enter ypu 1st no:"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "kindly enter ypu sec no:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select Operator"
    }
]);
// console.log(answer);
const { numberOne, numbertwo, operator } = answer;
if (numberOne && numbertwo && operator) {
    let result = 0;
    if (operator === "*") {
        result = numbertwo * numberOne;
    }
    else if (operator === "+") {
        result = numbertwo + numberOne;
    }
    else if (operator === "-") {
        result = numbertwo - numberOne;
    }
    if (operator === "/") {
        result = numbertwo / numberOne;
    }
    console.log("your result is :", result);
}
