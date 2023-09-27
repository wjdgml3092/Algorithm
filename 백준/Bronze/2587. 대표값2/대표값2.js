const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/2587_test.txt'
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => Number(item))

input.sort((a, b) => a - b)

let median = input[2]
let average = 0

input.forEach((item) => (average += item))

average /= 5

console.log(average)

console.log(median)
