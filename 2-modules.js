// Modules

const secret = "SUPER SECRET"

const john = "John"
const peter = "Peter"

const sayHi = name => console.log(`Hi, ${name}!`);

sayHi('Kwabena');
sayHi(john);
sayHi(peter);

module.exports = {john, peter}

console.log(module.exports);