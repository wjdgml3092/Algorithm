const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/1576_test.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const cnt = input[0]
const arr = input[1].split(' ').map(Number)

let max = -1

arr.forEach((item) => (max = Math.max(max, item)))

let answer = 0

arr.forEach((item) => {
  answer += (item / max) * 100
})

console.log(answer / cnt)
