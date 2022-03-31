// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Provide a description for your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Which command is used to test your application?',
        default: "npm run test"
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How can one contribute to your project?'
    },
    {
        type: 'checkbox',
        message: 'If there is a license, check one of the following: ',
        name: 'license',
        choices: ['mit',"[GNU]('gpl-3.0')", "none"],
        default: ['mit']
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error =>{
        if(error){
            return console.log("There was an error writing to the file: "+error);
        }
        else{
            console.log("Your README has been generated.");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        console.log(answers)
        writeToFile("genREADME.md", generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
