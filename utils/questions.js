// this file contains all the questions for readme generator
const questions = [
    {
        type: 'input',
        name: 'projName',
        message: 'Please enter project name: ',
      },
      {
        type: 'input',
        name: 'projDesc',
        message: 'Please enter a brief project description: ',
      },
      {
        type: 'input',
        name: 'projOwner',
        message: 'Please enter project owner name (first last): ',
      },
      {
        type: 'input',
        name: 'projInst',
        message: 'Please enter installation instructions: ',
      },
      {
        type: 'input',
        name: 'projUG',
        message: 'Please enter a brief user guide: ',
      },
      {
        type: 'input',
        name: 'projTest',
        message: 'Please enter test instructions: ',
      },
      {
        type: 'input',
        name: 'projCredit',
        message: 'Please enter project developer names: ',
      },      
      {
        type: 'input',
        name: 'projContrib',
        message: 'Please enter contribution guidelines: ',
      },
      {
        type: 'list',
        name: 'projLic',
        message: 'Please select a license for your project: ',
        choices: ["MIT", "GPL", "ISC"],
      },
      {
        type: 'input',
        name: 'projGit',
        message: 'Please enter your Github username: ',
      },
      {
        type: 'input',
        name: 'projEmail',
        message: 'Please enter your email address: ',
      }
  
];

// export this 
module.exports = questions;