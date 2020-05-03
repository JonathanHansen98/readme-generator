const inquirer = require("inquirer")
const importedQuestions = require("./functions/questions")
const {questions} = importedQuestions
const importgenerateMD = require("./functions/generateMD")
const {generateMD} = importgenerateMD

inquirer.prompt(questions)
.then(answers => {
    let { user, title, descrip, installation, license, usage, contributing, testing } = answers
    if (license === 'N/A') {
        license = ''
        generateMD(user, title, descrip, installation, license, usage, contributing, testing)
    }
    else {
        generateMD(user, title, descrip, installation, license, usage, contributing, testing)

    }
})
.catch(err => {
     console.log(`Error in inquirer.prompt(): ${err}`)
})
