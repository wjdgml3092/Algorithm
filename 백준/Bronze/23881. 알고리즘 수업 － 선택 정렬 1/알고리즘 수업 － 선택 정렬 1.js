const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/23881_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

const K = input[0].split(' ').map((item) => Number(item))[1]

let arr = input[1].split(' ').map((item) => Number(item))

function selectSort() {
  let changeCnt = 0
  for (let i = arr.length - 1; i > 0; i--) {
    let idx = i
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[idx]) {
        idx = j
      }
    }

    if (i !== idx) {
      [arr[i], arr[idx]] = [arr[idx], arr[i]]
      changeCnt++

      if (changeCnt === K) {
        return `${arr[idx]} ${arr[i]}`
      }
    }
  }

  return -1
}

let answer = selectSort()

console.log(answer)
