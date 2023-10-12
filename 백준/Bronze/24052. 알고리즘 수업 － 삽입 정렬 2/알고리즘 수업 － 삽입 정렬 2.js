const { exit } = require('process')
const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/24052_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

let cnt = Number(input[0].split(' ')[1])
let arr = input[1].split(' ').map((item) => Number(item))
function insertSort(arr) {
  let changeCnt = 0

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      if (changeCnt === cnt) {
        return arr
      }

      arr[j + 1] = arr[j]

      changeCnt += 1
    }

    if (j + 1 !== i) {
      arr[j + 1] = currentVal
      changeCnt += 1
    }
  }

  return -1
}

let answer = insertSort(arr)

console.log(answer === -1 ? -1 : answer.join(' '))
