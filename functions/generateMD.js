const fs = require("fs")
const util = require("util")
const axios = require("axios")

const writeFileAsync = util.promisify(fs.writeFile)

const generateMD = (user, title, descrip, installation, license, usage, contributing) => {
    axios
        .get(`https://api.github.com/users/${user}`)
        .then(res => {
            const { data } = res
            let email = data.email
            const picture = data.avatar_url
            const login = data.login
            if (email === null) {
                email = "No email provided"
            }
            const githubInfo = {
                email: email,
                picture: picture,
                login: login
            }
            return githubInfo
        })
        .then((githubInfo) => {
            const { email, picture, login } = githubInfo
            let readMe = writeMD(title, descrip, installation, license, usage, contributing, email, picture, login)
            return writeFileAsync("README.md", readMe)
        })
        .then(() => {
            console.log("Your ReadMe.md has been Generated!")
        })
        .catch(err => {
          throw `${err} \n Error in generateMD()`
        })
}

const writeMD = (title, descrip, installation, license, usage, contributing, email, picture, login) => {
    const MDtemplate =
        `# ${title}

${descrip}
<hr>

## Table of Contents
    
* [Installation](#Installation)
    
* [Usage](#Usage)
    
* [Contributing](#Contributing)
    
* [Tests](#Tests)
    
* [License](#License)
<hr>

## Installation
${installation}
<hr>

## Usage
${usage}
<hr>

## Contributing 
${contributing}
<hr>

## Tests
<hr>

## Questions
 Have questions? Contact Me: \n
 [![](https://img.shields.io/static/v1?label=Contact&message=Github&color=blue)](#https://github.com/${login}) \n
Email: ${email} \n 
<img src="${picture}" width="200" height="200" />
<hr>


## License
${license}`
    return MDtemplate
}

module.exports = {
    generateMD: generateMD
}
