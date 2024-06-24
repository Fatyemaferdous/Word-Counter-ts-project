import inquirer from "inquirer";
const ans = await inquirer.prompt({
    name: "Sentence",
    type: "input",
    message: "Enter your sentence to count the  words"
});
const words = ans.Sentence.trim().split(" ");
console.log(words);
console.log(`your word count is ${words.length}`);
