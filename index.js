#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.91,
    KWD: 3.24,
    INR: 74.57,
    PKR: 280,
    AED: 0.27,
};
let user_answer = await inquirer.prompt([
    {
        name: 'From_currency',
        message: "Select the currency to convert from:",
        type: "list",
        choices: ['USD', 'EUR', 'KWD', 'INR', 'PKR', 'AED']
    },
    {
        name: 'To_currency',
        message: "Select the Currency to convert into:",
        type: "list",
        choices: ['USD', 'EUR', 'KWD', 'INR', 'PKR', 'AED']
    },
    {
        name: 'amount',
        message: "Enter the amount to convert:",
        type: 'number',
    }
]);
let fromAmount = currency[user_answer.From_currency];
let toAmount = currency[user_answer.To_currency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
