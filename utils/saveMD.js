const fileName = "new_readme.md";

const fs = require('fs/promises');

const saveMD = (str) => {
    
    fs.writeFile(fileName, str)
        
    .then(function() {
            console.log("File Saved!");
        })
        .catch(console.log);
    // return fileName;
};

module.exports = saveMD;