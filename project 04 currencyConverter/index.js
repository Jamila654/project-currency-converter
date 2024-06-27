#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const conversionRates = {
    "\t\t\t\t\t\tPKR\n": {
        "\t\t\t\t\t\tPKR\n": 1,
        "\t\t\t\t\t\tUSD\n": 0.0035825600974456347,
        "\t\t\t\t\t\tGBP\n": 0.002825577124127603,
        "\t\t\t\t\t\tMYR\n": 0.017114495978093447,
        "\t\t\t\t\t\tSAR\n": 0.013421017313112333
    },
    "\t\t\t\t\t\tUSD\n": {
        "\t\t\t\t\t\tUSD\n": 1,
        "\t\t\t\t\t\tPKR\n": 279.13,
        "\t\t\t\t\t\tGBP\n": 0.7874015748031495,
        "\t\t\t\t\t\tMYR\n": 4.761904761904762,
        "\t\t\t\t\t\tSAR\n": 3.7037037037037033
    },
    "\t\t\t\t\t\tGBP\n": {
        "\t\t\t\t\t\tGBP\n": 1,
        "\t\t\t\t\t\tUSD\n": 1.27,
        "\t\t\t\t\t\tPKR\n": 353.91,
        "\t\t\t\t\t\tMYR\n": 5.88235294117647,
        "\t\t\t\t\t\tSAR\n": 4.761904761904762
    },
    "\t\t\t\t\t\tMYR\n": {
        "\t\t\t\t\t\tMYR\n": 1,
        "\t\t\t\t\t\tGBP\n": 0.17,
        "\t\t\t\t\t\tUSD\n": 0.21,
        "\t\t\t\t\t\tPKR\n": 58.43,
        "\t\t\t\t\t\tSAR\n": 0.78125,
    },
    "\t\t\t\t\t\tSAR\n": {
        "\t\t\t\t\t\tSAR\n": 1,
        "\t\t\t\t\t\tPKR\n": 74.51,
        "\t\t\t\t\t\tMYR\n": 1.28,
        "\t\t\t\t\t\tGBP\n": 0.21,
        "\t\t\t\t\t\tUSD\n": 0.27
    }
};
async function main() {
    console.log("\n\n\n\n\n");
    console.log("\t\t\t\t\t\t\t\t\t\t", "💸💶", chalk.bgYellowBright.bold("Welcome to Global Currency Exchange"), '💰💵\n\n\n');
    try {
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "from",
                message: chalk.magentaBright.bold("\t\t\t\t\t\tPlease choose a currency that you would like to convert", '❗❗\n\n'),
                choices: ["\t\t\t\t\t\tPKR\n", "\t\t\t\t\t\tUSD\n", "\t\t\t\t\t\tGBP\n", "\t\t\t\t\t\tMYR\n", "\t\t\t\t\t\tSAR\n"]
            },
            {
                type: "list",
                name: "to",
                message: chalk.magentaBright.bold("\t\t\t\t\t\tNow choose a currency that you want.", '❗❗\n\n'),
                choices: ["\t\t\t\t\t\tPKR\n", "\t\t\t\t\t\tUSD\n", "\t\t\t\t\t\tGBP\n", "\t\t\t\t\t\tMYR\n", "\t\t\t\t\t\tSAR\n"]
            },
            {
                type: "number",
                name: "amount",
                message: chalk.magentaBright.bold("\t\t\t\t\t\tPlease enter the amount to convert 💵 💴\n\n")
            }
        ]);
        if (answer.from && answer.to && answer.amount) {
            const result = conversionRates[answer.from][answer.to] * answer.amount;
            const roundResult = Math.floor(result * 1000) / 1000;
            console.log(chalk.greenBright.bold(`\t\t\t\t\t\tConversion is Successfull ✅\n`));
            console.log(`${answer.from}\n\t\t\t\t\t\tto\n\n${answer.to}\n`);
            console.log(chalk.cyanBright.bold(`\t\t\t\t\t\tConversion amount:`), `${roundResult} 💴\n\n`);
            console.log('\t\t\t\t\t\t\t\t\t\t👉', chalk.bgYellowBright.bold("Thank You! Hope To See You Soon"), "🤝\n");
        }
        else {
            console.log(chalk.redBright.bold("\t\t\t\t\t\tInvalid inputs ⭕️ ❌"));
        }
    }
    catch (error) {
        console.error(chalk.bgYellowBright.bold("\t\t\t\t\t\t\t\t\t\tError occurred:", error));
    }
}
main();
