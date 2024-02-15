const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/5597_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

let arr = new Array(31).fill(0)

input.forEach((item) => (arr[item] = 1))

let answer = []
for (let i = 1; i < arr.length; i++) {
  if (arr[i] === 0) {
    answer.push(i)
  }
}

console.log(answer.join('\n'))
