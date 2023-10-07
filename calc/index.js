//console.log("hello world");
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import showBanner from 'node-banner';
(async () => {
    await showBanner(' Rumman-Calculator', 'Perform your calculations');
})();
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets start calculation'); //start
    await sleep();
    rainbowTitle.stop();
    console.log(`
    _____________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|
    `);
}
welcome();
async function askQuestions() {
    const answers = await inquirer.prompt([
        //ask your questions here
        {
            type: "list",
            name: "operators",
            message: "which questions do you want to perform?\n",
            choices: ["addition", "subtraction", "multiplication", "division"],
        },
        {
            type: "number",
            name: "num1",
            message: "enter number 1",
        },
        {
            type: "number",
            name: "num2",
            messsage: "enter number 2",
        }
    ])
        .then((answers) => {
        if (answers.operator = "addition") {
            console.log(chalk.blue(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }
        else if (answers.operator = "subtraction") {
            console.log(chalk.blue(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }
        else if (answers.operator = "multiplication") {
            console.log((chalk.blue `${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        else if (answers.operator = "division") {
            console.log((chalk.blue `${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
        }
        ;
    });
}
;
//askQuestions();
async function startagain() {
    do {
        await askQuestions();
        var again = inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue?Press y or n:",
        });
    } while ((await again).restart == 'y' || (await again).restart == 'y' || (await again).restart == 'Yes');
}
;
startagain();
