const questions = [
    {
        type: "input",
        name: "user",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "title",
        message: "Title: What is the title of your project?",
    },
    {
        type: "input",
        name: "descrip",
        message: "Description: Enter a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation: What is required to run your project? Packages, installation directions, etc..",
    },
    {
        type: "list",
        name: "license",
        message: "Select a license, if applicable.",
        choices: ["MIT", "GPL", "LGPL", "BSD2", "BSD3", "Mozilla Public License", "N/A"]
    },
    {
        type: "input",
        name: "usage",
        message: "Usage: Let others know how to use your project. Provide a brief outline on how your project works and some guidlines on how to use it."
    },
    {
        type: "input",
        name: "contributing",
        message: "Contributing: Contribution guidlines. Let others know if you are open to contribution, pull requests, etc..."
    },
]

module.exports = {
    questions: questions
}