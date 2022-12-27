const path = require("path")

console.log(path.sep);


const filePath = path.join(__dirname, "content", "subfolder", "test.txt");

console.log(".join: ",filePath);

const base = path.basename(filePath)

console.log(base);


const absolute = path.resolve(__dirname, filePath)
console.log(".resolve: ",absolute);
