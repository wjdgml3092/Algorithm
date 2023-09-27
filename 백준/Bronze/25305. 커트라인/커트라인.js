const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/25305_test.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const score = input[1].split(' ').sort((a, b) => b - a)

const cutLine = input[0].split(' ')[1] - 1
console.log(score[cutLine])
