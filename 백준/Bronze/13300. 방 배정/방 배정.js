const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/13300_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n')
const [N, K] = input[0].split(' ')
const arr = Array.from(Array(6), () => new Array(2).fill(0))

for (let i = 1; i <= N; i++) {
  const [sex, grade] = input[i].split(' ').map(Number)
  if (sex) {
    //boy
    arr[grade - 1][1]++
  } else {
    //girl
    arr[grade - 1][0]++
  }
}

let answer = 0
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < 2; j++) {
    if (arr[i][j] !== 0) {
      if (arr[i][j] <= K) {
        answer++
      } else {
        answer += Math.ceil(arr[i][j] / K)
      }
    }
  }
}

console.log(answer)
