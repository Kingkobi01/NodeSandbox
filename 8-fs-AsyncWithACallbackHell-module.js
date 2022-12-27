const { readFile, writeFile } = require("fs")

console.log('Start');
readFile("./content/first.txt", 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  const first = result

  readFile("./content/second.txt", 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    const second = result

    writeFile(
      "./content/result-Async.txt",
      `THis is the result\nFirst: ${first}\nSecond: ${second}`, (err, result) => {
        if (err) {
          console.log(err)
          return
        }

        console.log('Done with this task');
      })
  })
})
console.log("Starting next Task");