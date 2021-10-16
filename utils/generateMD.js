// module to generate readme text
const licences = require("./licenses.js");
const badge = require("./badge.js");

function generateMD(response) {
    var licText = licences(response.projLic);
    var projBadge = badge(response.projLic);
    const markdown = `
# ${response.projName}
${projBadge}
### Description
${response.projDesc}
### Owner
${response.projOwner}
## Installation
${response.projInst}
## User Guide
${response.projUG}
## Testing
${response.projTest}
## Credits
${response.projCredit}
## Contribution Guidelines
${response.projContrib}
## License
${licText}
## Contacts
### Github
${response.projGit}
### Email
${response.projEmail}
`;
    return markdown;
}

module.exports = generateMD;