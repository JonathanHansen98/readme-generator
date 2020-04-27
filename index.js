const inquirer = require("inquirer")
const fs = require("fs")

// Title
// Description
// -----Table of Contents will not have an input value----
// Table of Contents
// ------------------------------------------------
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

const questions = [
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

inquirer.prompt(questions).then(answers => {
    let { title, descrip, installation, license, usage, contributing } = answers
    if (license === 'N/A') {
        license = ''
        generateMD(title, descrip, installation, license, usage, contributing)

    }
    else {
        generateMD(title, descrip, installation, license, usage, contributing)
    }
})

const generateMD = (title, descrip, installation, license, usage, contributing) => {
    let readMe = writeMD(title, descrip, installation, license, usage, contributing)
        fs.writeFile("README.md", readMe, err => {
            if (err) {
                throw err
            }
            else {
                console.log("Your ReadMe.md has been Generated!")
            }
        })
}


const writeMD = (title, descrip, installation, license, usage, contributing) => {
    const MDtemplate =
        "# " + title +
        "\n" +
        descrip +
        "\n" +
        "## Table of Contents" +
        "\n" +
        "[" + title + "]" + "" + "(" + title + ")" +
        "\n" +
        "[Usage](Usage)" +
        "\n" +
        "[Contributing](Contributing)" +
        "\n" +
        "[Tests](Tests)" +
        "\n" +
        "[License](License)" +
        "\n" +
        "## Installation" +
        "\n" +
        installation +
        "\n" +
        "## Usage " +
        "\n" +
        usage +
        "\n" +
        "## Contributing" +
        "\n" +
        contributing +
        "\n" +
        "## Tests" +
        "\n" +
        "" +
        "\n" +
        "## License" +
        "\n" +
        license

    return MDtemplate
}