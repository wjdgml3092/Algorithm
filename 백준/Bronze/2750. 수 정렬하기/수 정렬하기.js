const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/2750_test.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let arr = input.slice(1)
arr.sort((a, b) => a - b)

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
