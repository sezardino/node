const fs = require("fs");
const path = require("path");

// create directory

// fs.mkdir(path.join(__dirname, "test"), (error) => {
//     if (error) {
//         throw error;
//     }

//     console.log("directory created");
// });

// create file

const filePath = path.join(__dirname, "test", "test.txt");

fs.writeFile(filePath, "Hello World", (error) => {
    if (error) {
        throw error;
    }

    console.log("file created");
});

// update file

fs.appendFile(filePath, "\nWorld", (error) => {
    if (error) {
        throw error;
    }

    console.log("file created");
});

// read file

fs.readFile(filePath, "utf-8", (error, content) => {
    if (error) {
        throw error;
    }

    console.log(content);
});
