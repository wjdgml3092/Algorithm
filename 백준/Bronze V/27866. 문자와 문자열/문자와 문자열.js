const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/27866_test.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const idx = Number(input[1]) - 1
console.log(input[0][idx])
