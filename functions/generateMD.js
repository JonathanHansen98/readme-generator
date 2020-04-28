const fs = require("fs")
const util = require("util")

const writeFileAsync = util.promisify(fs.writeFile)

const generateMD = (user, title, descrip, installation, license, usage, contributing) => {
    let readMe = writeMD(user, title, descrip, installation, license, usage, contributing)
    writeFileAsync("README.md", readMe).then(() => {
        console.log("Your ReadMe.md has been Generated!")
    }).catch(err => {
            console.log("Error in writeFileAsync")
            throw err
    })
}

const writeMD = (user, title, descrip, installation, license, usage, contributing) => {
    const MDtemplate = 
    `# ${title}

${descrip}

## Table of Contents
    
* [Installation](#Installation)
    
* [Usage](#Usage)
    
* [Contributing](#Contributing)
    
* [Tests](#Tests)
    
* [License](#License)
    
## Installation
${installation}
## Usage
${usage}
## Contributing 
${contributing}
## Tests    
## License
${license}`
    return MDtemplate
}

module.exports = {
    generateMD: generateMD
}
