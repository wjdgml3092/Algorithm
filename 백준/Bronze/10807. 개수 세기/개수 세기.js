const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/10807_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

const answer = input[1].split(' ').filter((item) => item === input[2])

console.log(answer.length)
