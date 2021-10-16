// to get license badge
const MIT = `![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)`;

const GNU = `![GNU License](https://img.shields.io/badge/License-GPLv3-blue.svg)`;

const ISC = `![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)`;

function badge(lic) {
    var badge;
    switch(lic) {
        case 'MIT':
            badge = MIT;
            break;
        case 'GNU':
            badge = GNU;
            break;
        default:
            badge = ISC;
    }
    return badge;
}

module.exports = badge;