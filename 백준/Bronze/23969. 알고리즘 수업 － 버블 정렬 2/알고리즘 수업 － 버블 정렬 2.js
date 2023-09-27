const { exit } = require('process')
const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/23969_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

let arr = input[1].split(' ').map(Number)
let swapCnt = Number(input[0].split(' ')[1])

let cnt = 0
for (let i = arr.length; i > 1; i--) {
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[j + 1]) {
      ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      cnt += 1
    }
    if (cnt === swapCnt) {
      console.log(arr.join(' '))
      exit(0)
    }
  }
}

console.log(-1)
