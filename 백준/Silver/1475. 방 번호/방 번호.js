const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/1475_test.txt'
const input = fs.readFileSync(filePath).toString().trim().split('').map(Number)

let stack = new Array(10).fill(0)

input.forEach((item) => (stack[item] += 1))
const sixNine = Math.ceil((stack[6] + stack[9]) / 2) // 6과 9 카운팅을 더해서 2로 나눈 후 올림
stack.splice(6, 1, sixNine)
stack.splice(9, 1, 0)

console.log(Math.max(...stack))
