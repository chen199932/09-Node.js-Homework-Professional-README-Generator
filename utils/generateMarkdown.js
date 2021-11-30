// GitHub formatting syntax for markdowns:
// https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/basic-writing-and-formatting-syntax

// function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {

  // Plug userReponses into table of contents
  let draftTable = `## Table of Contents`;

  if (userResponses.installation !== '') { draftTable += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftTable += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftTable += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { draftTable += `
  * [Tests](#tests)` };
  
  // Create title and description
  // Generate badges
  let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repository}?style=flat&logo=appveyor) 
  
  
  ## Description 
  
  
  ${userResponses.description}
  `
  // Add table of contents data to markdown
  draftMarkdown += draftTable;
  
  // Add license section to markdown
  draftMarkdown += `
  * [License](#license)`;

  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  
  ${userResponses.installation}`
  };


  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
   
  ${userResponses.usage}`
  };
  
 
  if (userResponses.contributing !== '') {
  `
  
  ## Contributing
  
  
  ${userResponses.contributing}`
  };


  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  
  ${userResponses.tests}`
  };

  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;


  let draftDeveloper = 
  `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  if (userInfo.email !== null) {
  
  draftDeveloper +=
  `
  Email: ${userInfo.email}
  `};


  draftMarkdown += draftDeveloper;


  return draftMarkdown;
};

module.exports = generateMarkdown;