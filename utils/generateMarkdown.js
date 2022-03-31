// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none'){
    return `[![license](https://img.shields.io/badge/license-${license}-blue)](https://shields.io)`;
  }else{
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !=='none'){
    return `[${license}](https://choosealicense.com/licenses/${license})`
  }else{
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none'){
  return `
  ## License: 

  This application uses this license: 
${renderLicenseBadge(license)}

${renderLicenseLink(license)}
  `
  } else{
    return ' ';
  }

}

function renderLicenseinTable(license){
  if(license !== 'none'){
    return `
    [License](#license)
    `
  }else{
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description](#desc)
  - [Usage](#usage)
  - [Installation](#install)
  - [Testing](#test)
  - [Contribution](#contributors)
  - ${renderLicenseinTable(data.license)}

  ## Description: 
  ${data.desc}

  ## Usage: 
  ${data.usage}

  ## Installation: 
  ${data.install}

  ## Testing: 
  ${data.test}

  ## Contribution: 
  ${data.contributors}

  ${renderLicenseSection(data.license)}

  ## Contact: 
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
