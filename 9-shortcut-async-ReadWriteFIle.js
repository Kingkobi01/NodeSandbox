const { readFile, writeFile } = require("fs").promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async () => {
  try {
    const firstText = await readFile("./content/first.txt", 'utf-8');
    const secText = await readFile("./content/second.txt", 'utf-8');
    const Result = `Another\nFirst: ${firstText}\nSecond: ${secText}\n`
    await writeFile("./content/result-Async.txt", Result)
  } catch (error) {
    console.log(error);
  }
}

start()


