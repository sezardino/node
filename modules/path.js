const path = require("path");

console.log("File name: ", path.basename(__filename));
console.log("Directory: ", path.basename(__dirname));
console.log("Ext: ", path.extname(__filename));
console.log("Parse: ", path.parse(__filename));
console.log("Join: ", path.join(__dirname, "server", "index.html"));
