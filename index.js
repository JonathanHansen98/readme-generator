const inquirer = require("inquirer")
const importedQuestions = require("./functions/questions")
const {questions} = importedQuestions
const importgenerateMD = require("./functions/generateMD")
const {generateMD} = importgenerateMD

inquirer.prompt(questions)
.then(answers => {
    let { user, title, descrip, installation, license, usage, contributing } = answers
    if (license === 'N/A') {
        license = ''
        generateMD(user, title, descrip, installation, license, usage, contributing)
    }
    else {
        generateMD(user, title, descrip, installation, license, usage, contributing)

    }
})
.catch(err => {
    throw `${err} \n Error in inquirer.prompt()`
})
