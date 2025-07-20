const arg = process.argv[2];
const num = Number(arg);

console.log(!isNaN(num) ? `My number: ${num}`: 'Not a number');

