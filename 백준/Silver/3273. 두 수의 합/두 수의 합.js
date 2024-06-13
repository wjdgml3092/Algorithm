const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/3273_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)
const x = Number(input[2])

let answer = 0
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === x) {
      answer++
    }
    if (arr[i] + arr[j] > x) {
      break
    }
  }
}

console.log(answer)
