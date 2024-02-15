const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/5597_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n').map(Number)

let arr = Array.from({ length: 30 }, (_, idx) => idx + 1)

const answer = arr.filter((item) => !input.includes(item))

console.log(answer.join('\n'))
