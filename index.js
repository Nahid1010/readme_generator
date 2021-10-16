// main program
const inquirer = require("inquirer");
const questions = require("./utils/questions.js");
const generateMD = require("./utils/generateMD.js")
const saveMD = require("./utils/saveMD.js")

// Prompt questions, generate markdown from answers, save and open md file
async function main() {
    const answers = await inquirer .prompt(questions);
    const markdown = generateMD(answers);
    const fileName = await saveMD(markdown);
}

// invoke
main();
