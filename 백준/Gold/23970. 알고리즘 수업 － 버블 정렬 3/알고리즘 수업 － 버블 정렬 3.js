const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/23970_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

const N = Number(input[0])
const A = input[1].split(' ').map((item) => Number(item))
const B = input[2].split(' ').map((item) => Number(item))

function isSame(arr1, arr2) {
  for (let i = 0; i < N; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

function bubbleSort() {
  if (isSame(A, B)) return 1

  for (let i = A.length; i > 0; i--) {
    let noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (A[j] > A[j + 1]) {
        [A[j], A[j + 1]] = [A[j + 1], A[j]]
        if (A[j] === B[j] && isSame(A, B)) {
          return 1
        }
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return 0
}

console.log(bubbleSort())
